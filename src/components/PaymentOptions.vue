<template>
  <div :class="['sco_component', 'sco_component--payment_options', { 'sco_loaded' : loaded, 'sco_component--collapsed': complete }]" v-show="accountConfirmationComplete">
    <div class="sco_component_i">
      <div class="sco_component_title">3. Payment method
        <div class="sco_component_title_aside">
          <input type="checkbox" v-model="complete" :disabled="!paymentOptions.complete" />
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
      <div class="sco_component_error" v-if="error"><p>{{error}}</p></div>
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
    transactionDetails: {
      get () {
        return this.$store.state.transactionDetails
      },
      set (value) {
        this.transactionDetailsSet(value)
      }
    },
    ...mapState({
      accountConfirmationComplete: state => state.accountConfirmation.complete,
      dto: 'dto',
      federation: 'federation',
      network: 'network',
      options: 'options'
    })
  },
  data () {
    return {
      closeStream: null,
      loaded: false
    }
  },
  methods: {
    buildTransaction: function () {
      return buildTransaction(this.network, this.dto)
        .then(trx => {
          this.transactionDetails = {
            transaction: trx,
            transactionHash: trx.hash().toString('hex'),
            transactionXdr: trx.toEnvelope().toXDR('base64')
          }
          this.transactionStatus = {
            status: constants.TX_STATUS.created
          }
          return trx
        })
    },
    useAlternatePaymentMethod: function (method) {
      // Build the transaction object
      return this.buildTransaction()
        .then(() => {
          // Update state
          this.paymentOptions = {
            complete: true,
            error: null,
            method: method
          }
          // Update transaction status
          this.transactionDetails = {
            result: null,
            status: constants.TX_STATUS.listening_for_transaction,
            success: false
          }
        })
        .then(() => getPaymentsForAccount(this.network, this.dto))
        .then(response => {
          console.log(constants.APP.name + ': LISTENING_FOR_PAYMENTS')
          this.closeStream = response.payments.stream({
            onmessage: (payment) => {
              if (payment.to !== response.accountId) {
                return
              }
              verifyPayment(this.network, response.now, response.ledgerHeight, this.dto, payment)
                .then(result => {
                  if (result) {
                    console.log(constants.APP.name + ': TRANSACTION_COMPLETE')
                    console.log(result)
                    this.transactionDetails = {
                      complete: true,
                      error: null,
                      result: result,
                      status: constants.TX_STATUS.complete,
                      success: true
                    }
                    setTimeout(() => {
                      this.submitHandler(null, result)
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
    signWithLedger: function () {
      this.paymentOptions = { // set early, it shows the instructions panel
        complete: true,
        error: null,
        method: 'ledger'
      }
      this.transactionDetails = {
        result: null,
        status: constants.TX_STATUS.ledger_confirmation_required,
        success: false
      }
      var bip32Path = this.federation.ledgerBip32Path
      return this.buildTransaction()
        .then(trx => getSignature(trx, bip32Path))
        .then(signature => {
          this.transactionStatusUpdate(constants.TX_STATUS.signed)
          return new Promise((resolve, reject) => {
            var hash = this.transactionDetails.transaction.hash()
            var keyPair = window.StellarSdk.Keypair.fromPublicKey(this.dto.payment.from)
            if (keyPair.verify(hash, signature)) {
              var hint = keyPair.signatureHint()
              var decorated = new window.StellarSdk.xdr.DecoratedSignature({ hint: hint, signature: signature })
              this.transactionDetails.transaction.signatures.push(decorated)
              setTimeout(() => {
                this.transactionStatusUpdate(constants.TX_STATUS.in_progress)
              }, 400)
              return submitTransaction(this.network, this.transactionDetails.transaction)
                .then(transaction => {
                  console.log(constants.APP.name + ': TRANSACTION_COMPLETE: SUCCESS')
                  console.log(transaction)
                  this.transactionDetails = {
                    complete: true,
                    error: null,
                    result: transaction,
                    status: constants.TX_STATUS.complete,
                    success: true
                  }
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
          this.transactionDetails = {
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
    ...mapActions([
      'paymentOptionsClear',
      'paymentOptionsSet',
      'paymentOptionsError',
      'transactionDetailsSet',
      'transactionStatusUpdate'])
  },
  watch: {
    accountConfirmationComplete (newVal) {
      this.paymentOptionsClear()
      this.loaded = false
      setTimeout(() => {
        this.loaded = true
      }, 400)
    }
  }
}
</script>
