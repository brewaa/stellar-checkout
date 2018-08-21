<template>
  <div :class="[baseCssClass(), 'sco_component--payment_options']" v-show="accountConfirmationComplete && !transaction.success">
    <div class="sco_component_i">
      <div class="sco_component_header">
        <div class="title">3. Payment method</div>
        <div class="complete_icon">
          <input type="checkbox" v-model="isComplete" :disabled="!isComplete" />
        </div>
      </div>
      <div class="sco_component_results" v-show="loaded">
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
      <div class="sco_component_error" v-if="this.error">
        <icon icon="exclamation-circle"></icon>
        <span v-html="error"></span>
      </div>
      <span class="sco_component_spinner">
        <icon icon="spinner" spin pulse></icon>
      </span>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { mapActions, mapState } from 'vuex'
import { getSignature } from 'services/ledger.stellar'
import { buildTransaction, getPaymentsForAccount, submitTransaction, verifyPayment } from 'utils/stellarsdk.helper'
import { useRedirectUrl } from 'utils/url'
import BaseComponent from 'components/.base.component.mixin'
export default {
  props: {
    ledgerConnected: {
      type: Boolean
    }
  },
  computed: {
    // complete: {
    //   get () {
    //     return this.$store.state.paymentOptions.complete
    //   },
    //   set (value) {
    //     this.paymentOptionsSet({
    //       complete: value
    //     })
    //   }
    // },
    // error: {
    //   get () {
    //     return this.$store.state.paymentOptions.error
    //   },
    //   set (value) {
    //     this.paymentOptionsError(value)
    //   }
    // },
    isComplete: {
      get () {
        return this.complete
      },
      set (value) {
        this.complete = value
        this.paymentOptionsSet({ complete: value })
        if (!value) {
          if (this.closeStream) {
            this.closeStream()
          }
        }
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
      federation: 'federation',
      network: 'network',
      options: 'options',
      stellarTicker: 'stellarTicker'
    })
  },
  data () {
    return {
      asset: null,
      closeStream: null,
      from: null,
      memo: null,
      to: null
    }
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    buildTransaction: async function () {
      if (this.validate()) {
        this.amount = this.transaction.amount
        this.asset = this.transaction.asset()
        this.from = this.federation.accountFrom.account.account_id
        this.memo = this.transaction.memo
        this.to = this.federation.accountTo.account.account_id
        this.transaction = {
          status: constants.TX_STATUS.created,
          tx: await buildTransaction(
            this.network,
            this.to,
            this.from,
            this.asset,
            this.amount,
            this.memo)
        }
      }
    },
    signWithLedger: function () {
      this.complete = true
      this.error = null
      this.paymentOptions = { // set early, it shows the instructions panel
        complete: true,
        error: null,
        method: 'ledger'
      }
      this.transaction = {
        complete: false,
        error: null,
        status: constants.TX_STATUS.ledger_confirmation_required,
        success: false
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
                    complete: true,
                    result: transaction,
                    status: constants.TX_STATUS.complete,
                    success: true
                  }
                  this.transactionResultsUpdate(this.transaction)
                  setTimeout(() => {
                    resolve(transaction)
                    this.submitHandler(null, this.$store.state)
                  }, 800)
                })
            }
            reject(new Error('Bad signature'))
          })
        }).catch(err => {
          this.isComplete = false
          this.error = err.message
          this.transaction = {
            complete: false,
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
      this.complete = true
      this.timerStart()
      // Update state
      this.paymentOptions = {
        complete: true,
        error: null,
        method: method
      }
      // Update transaction status
      this.transaction = {
        complete: false,
        error: null,
        status: constants.TX_STATUS.listening_for_transaction,
        success: false
      }
      if (this.closeStream) {
        this.closeStream()
      }
      return getPaymentsForAccount(this.network, this.to)
        .then(response => {
          console.log(constants.APP.name + ': LISTENING_FOR_PAYMENTS')
          this.closeStream = response.payments.stream({
            onmessage: (payment) => {
              if (payment.to !== response.accountId) {
                return
              }
              verifyPayment(this.network, response.now, response.ledgerHeight, this.to, this.from, this.amount, this.memo, payment)
                .then(transaction => {
                  if (transaction) {
                    console.log(constants.APP.name + ': TRANSACTION_COMPLETE')
                    console.log(transaction)
                    this.transaction = {
                      complete: true,
                      result: transaction,
                      status: constants.TX_STATUS.complete,
                      success: true
                    }
                    this.transactionResultsUpdate(this.transaction)
                    setTimeout(() => {
                      this.submitHandler(null, this.$store.state)
                    }, 800)
                    this.closeStream()
                    this.timerStop()
                  } else {
                    throw new Error('Payment received. it wasn\'t our payment though...')
                  }
                })
            },
            onerror: error => {
              console.error(error)
              this.closeStream()
              this.timerStop()
              this.transaction = {
                complete: true,
                error: error.message,
                status: constants.TX_STATUS.error
              }
            }
          })
        })
    },
    validate: function () {
      var amount = this.transaction.amount
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
      'timerStart',
      'timerStop',
      'transactionSave',
      'transactionErrorSave',
      'transactionResultsUpdate',
      'transactionStatusUpdate'])
  },
  watch: {
    accountConfirmationComplete (newVal) {
      if (!newVal) {
        return
      }
      this.complete = false
      this.loaded = false
      this.paymentOptionsClear()
      this.buildTransaction()
        .then(() => {
          this.loaded = true
        })
    },
    stellarTicker () {
      this.buildTransaction()
    }
  }
}
</script>
