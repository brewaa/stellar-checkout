<template>
  <div :class="['sco_component', 'sco_component--payment_options', { 'sco_loaded' : loaded, 'sco_component--collapsed': complete }]" v-show="transactionDetailsComplete">
    <div class="sco_component_i">
      <div class="sco_component_title">4. Payment method
        <div class="sco_component_title_aside">
          <input type="checkbox" v-model="complete" :disabled="!paymentOptions.complete" />
        </div>
      </div>
      <div class="sco_component_results" v-show="loaded">
        <div class="sco_component--button_row" v-show="ledgerConnected">
          <button class="sco_button" @click.prevent="signWithLedgerClick">Sign with Ledger Wallet</button>
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
import { listenForPayment, submitTransaction } from 'utils/stellarsdk.helper'
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
    transactionStatus: {
      get () {
        return this.$store.state.transactionStatus
      },
      set (value) {
        this.transactionStatusSet(value)
      }
    },
    transactionStatusError: {
      get () {
        return this.$store.state.transactionStatus.error
      },
      set (value) {
        this.transactionStatusErrorSet(value)
      }
    },
    ...mapState({
      dto: 'dto',
      federation: 'federation',
      network: 'network',
      options: 'options',
      transactionDetailsComplete: state => state.transactionDetails.complete
    })
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    useAlternatePaymentMethod: function (method) {
      this.paymentOptions = {
        complete: true,
        error: null,
        method: method
      }
      this.transactionStatus = {
        status: constants.TX_STATUS.listening_for_transaction
      }
      // Watch for transactions sent to the merchant
      listenForPayment(this.network, this.dto, this.submitHandler)
    },
    signWithLedgerClick: function () {
      this.paymentOptions = { // set early, it shows the instructions panel
        complete: true,
        error: null,
        method: 'ledger'
      }
      this.transactionStatus = {
        status: constants.TX_STATUS.ledger_confirmation_required
      }
      var trx = this.transactionDetails.transaction
      var bip32Path = this.federation.ledgerBip32Path
      return getSignature(trx, bip32Path)
        .then(signature => {
          this.transactionStatus = {
            status: constants.TX_STATUS.signed
          }
          return new Promise((resolve, reject) => {
            var hash = trx.hash()
            var keyPair = window.StellarSdk.Keypair.fromPublicKey(this.dto.payment.from)
            if (keyPair.verify(hash, signature)) {
              var hint = keyPair.signatureHint()
              var decorated = new window.StellarSdk.xdr.DecoratedSignature({ hint: hint, signature: signature })
              trx.signatures.push(decorated)
              setTimeout(() => {
                this.transactionStatus = {
                  status: constants.TX_STATUS.in_progress
                }
              }, 400)
              return submitTransaction(this.network, trx)
                .then(transaction => {
                  this.transactionStatus = {
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
          this.transactionStatus = {
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
          this.transactionStatus = {
            status: constants.TX_STATUS.redirecting
          }
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
      'paymentOptionsSet',
      'paymentOptionsError',
      'transactionDetailsSet',
      'transactionStatusSet',
      'transactionStatusErrorSet'])
  },
  watch: {
    transactionDetailsComplete (newVal) {
      if (!newVal) {
        return
      }
      this.error = null
      this.loaded = false
      setTimeout(e => {
        this.loaded = true
      }, 400)
    }
  }
}
</script>