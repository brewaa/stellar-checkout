<template>
  <div :class="['sco_component', 'sco_component--payment_options', { 'sco_loaded' : loaded, 'sco_component--collapsed': complete }]" v-show="accountConfirmationComplete">
    <div class="sco_component_i">
      <div class="sco_component_title">3. Payment method
        <div class="sco_component_title_aside">
          <input type="checkbox" v-model="complete" :disabled="!paymentOptions.complete" />
        </div>
      </div>
      <div class="sco_component_results" v-show="loaded && !error">
        <div class="sco_component--button_row" v-show="ledgerConnected">
          <button class="sco_button" @click.prevent="signWithLedger">Sign with Ledger Wallet</button>
        </div>
        <div class="sco_component--button_row" v-show="!ledgerConnected">
          <button class="sco_button" @click.prevent="useAlternatePaymentMethod('tx_signer')">Use Transaction Signer</button>
        </div>
        <div class="sco_component--button_row" v-show="!ledgerConnected">
          <button class="sco_button" @click.prevent="useAlternatePaymentMethod('byo')">Use my own wallet</button>
        </div>
      </div>
      <div class="sco_component_error" v-if="loaded &&  error"><p>{{error}}</p></div>
      <span class="sco_spinner">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { mapActions, mapState } from 'vuex'
import { getSignature } from 'services/ledger.stellar'
import { buildTransaction, getPaymentsForAccount, submitTransaction, verifyPayment } from 'utils/stellarsdk.helper'
import {randomId} from 'utils/generator'
import { useRedirectUrl } from 'utils/url'
export default {
  props: {
    ledgerConnected: {
      type: Boolean
    }
  },
  computed: {
    complete: {
      get () {
        return this.$store.state.paymentOptions.complete
      },
      set (value) {
        this.paymentOptionsSet({
          complete: value
        })
      }
    },
    error: {
      get () {
        return this.$store.state.paymentOptions.error
      },
      set (value) {
        this.paymentOptionsError(value)
      }
    },
    paymentOptions: {
      get () {
        return this.$store.state.paymentOptions
      },
      set (value) {
        this.paymentOptionsSet(value)
      }
    },
    transaction: {
      get () {
        return this.$store.state.transaction
      },
      set (value) {
        this.transactionSave(value)
      }
    },
    ...mapState({
      accountConfirmationComplete: state => state.accountConfirmation.complete,
      // dto: 'dto',
      federation: 'federation',
      network: 'network',
      options: 'options',
      stellarTicker: 'stellarTicker'
    })
  },
  data () {
    return {
      closeStream: null,
      loaded: false,
      from: null,
      to: null,
      memo: null
    }
  },
  methods: {
    buildTransaction: async function () {
      if (this.validate()) {
        this.from = this.federation.accountFrom.account.account_id
        this.to = this.federation.accountTo.account.account_id
        this.memo = randomId(28)
        this.transaction = {
          status: constants.TX_STATUS.created,
          tx: await buildTransaction(
            this.network,
            this.to,
            this.from,
            window.StellarSdk.Asset.native(),
            this.options.amount,
            this.memo)
        }
      }
    },
    signWithLedger: function () {
      this.paymentOptions = { // set early, it shows the instructions panel
        complete: true,
        error: null,
        method: 'ledger'
      }
      this.transactionReset()
      this.transaction = {
        status: constants.TX_STATUS.ledger_confirmation_required
      }
      var bip32Path = this.federation.ledgerBip32Path
      return getSignature(this.transaction.tx, bip32Path)
        .then(signature => {
          this.transactionStatusUpdate(constants.TX_STATUS.signed)
          return new Promise((resolve, reject) => {
            var hash = this.transaction.tx.hash()
            var keyPair = window.StellarSdk.Keypair.fromPublicKey(this.federation.accountFrom.account.account_id)
            if (keyPair.verify(hash, signature)) {
              var hint = keyPair.signatureHint()
              var decorated = new window.StellarSdk.xdr.DecoratedSignature({ hint: hint, signature: signature })
              this.transaction.tx.signatures.push(decorated)
              setTimeout(() => {
                this.transactionStatusUpdate(constants.TX_STATUS.in_progress)
              }, 400)
              return submitTransaction(this.network, this.transaction.tx)
                .then(transaction => {
                  console.log(constants.APP.name + ': TRANSACTION_COMPLETE: SUCCESS')
                  console.log(transaction)
                  this.transaction = {
                    result: transaction,
                    status: constants.TX_STATUS.complete,
                    success: true
                  }
                  this.transactionResultsUpdate(this.transaction)
                  this.transactionReset()
                  setTimeout(() => {
                    resolve(transaction)
                    this.submitHandler(null, transaction)
                  }, 800)
                })
            }
            reject(new Error('Bad signature'))
          })
        }).catch(err => {
          console.log(err)
          this.transaction = {
            error: err.toString(),
            status: constants.TX_STATUS.error
          }
        })
    },
    submitHandler: function (err, result) {
      // Handle error
      if (err) {
        // Pass error to onSubmit callback
        if (this.options.onSubmit && typeof this.options.onSubmit === 'function') {
          this.options.onSubmit.call(this, err)
        }
        return
      }
      // Show payment verification feedback
      if (this.options.redirectUrl) {
        // Use redirectUrl if configured
        setTimeout(() => {
          this.transactionStatusUpdate(constants.TX_STATUS.redirecting)
          setTimeout(() => {
            useRedirectUrl(this.options, result)
          }, 800)
        }, 800)
      } else if (this.options.onSubmit && typeof this.options.onSubmit === 'function') {
        // Call the onSubmit callback
        this.options.onSubmit.call(this, null, result)
      } else {
        // Show the default payment complete dialog
      }
    },
    useAlternatePaymentMethod: function (method) {
      // Update state
      this.paymentOptions = {
        complete: true,
        error: null,
        method: method
      }
      // Update transaction status
      this.transaction = {
        status: constants.TX_STATUS.listening_for_transaction,
        success: false
      }
      return getPaymentsForAccount(this.network, this.to)
        .then(response => {
          console.log(constants.APP.name + ': LISTENING_FOR_PAYMENTS')
          this.closeStream = response.payments.stream({
            onmessage: (payment) => {
              if (payment.to !== response.accountId) {
                return
              }
              verifyPayment(this.network, response.now, response.ledgerHeight, this.from, this.to, this.memo, payment)
                .then(transaction => {
                  if (transaction) {
                    console.log(constants.APP.name + ': TRANSACTION_COMPLETE')
                    console.log(transaction)
                    this.transaction = {
                      result: transaction,
                      status: constants.TX_STATUS.complete,
                      success: true
                    }
                    this.transactionResultsUpdate(this.transaction)
                    this.transactionReset()
                    setTimeout(() => {
                      this.submitHandler(null, transaction)
                    }, 800)
                    this.closeStream()
                  } else {
                    throw new Error('Payment received. it wasn\'t our payment though...')
                  }
                })
            },
            onerror: error => {
              console.error(error)
            }
          })
        })
    },
    validate: function () {
      var amount = this.options.amount
      if (isNaN(amount) || parseFloat(amount) <= 0) {
        this.error = '[amount] is invalid'
        return false
      }
      var from = this.federation.accountFrom.account.account_id
      if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(from)) {
        this.error = '[from] is not a valid destination public key'
        return false
      }
      var to = this.federation.accountTo.account.account_id
      if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(to)) {
        this.error = '[to] is not a valid destination public key'
        return false
      }
      return true
    },
    ...mapActions([
      'paymentOptionsClear',
      'paymentOptionsSet',
      'paymentOptionsError',
      'transactionReset',
      'transactionSave',
      'transactionErrorSave',
      'transactionResultsUpdate',
      'transactionStatusUpdate'])
  },
  watch: {
    accountConfirmationComplete (newVal) {
      this.loaded = false
      this.paymentOptionsClear()
      this.buildTransaction()
        .then(() => {
          setTimeout(() => {
            this.loaded = true
          }, 400)
        })
    },
    stellarTicker () {
      this.buildTransaction()
    }
  }
}
</script>
