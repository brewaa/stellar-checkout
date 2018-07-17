<template>
  <div :class="['sco_component', 'sco_component--transaction_details', { 'sco_loaded' : loaded, 'sco_component--collapsed' : complete }]">
    <div class="sco_component_i">
      <div class="sco_component_title">
        <!-- <span class="sco_spinner1" v-if="!transactionDetails.success">
          <i class="fas fa-spinner fa-spin"></i>
        </span> -->
        Transaction Details
        <div class="sco_component_title_aside">
          <input type="checkbox" v-model="complete" />
        </div>
      </div>
      <div class="sco_component_results">
        <div class="sco_component_results_row">
          <div>ID</div>
          <div class="sco_component_results_row_aside">
            #{{ dto.order_id || dto.invoice.id }}
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>SUBTOTAL</div>
          <div class="sco_component_results_row_aside">
            {{stellarTicker.meta.invoiceTotalFormatted}} {{dto.invoice.currency}}
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>TOTAL</div>
          <div class="sco_component_results_row_aside">
            {{stellarTicker.meta.invoicePriceInLumensFormatted}} {{dto.payment.asset.code}}
          </div>
        </div>
        <div class="sco_component_results_row" v-if="transactionDetails.transaction">
          <div>TX Hash</div>
          <div class="sco_component_results_row_aside">
            {{transactionDetails.transactionHash}}
          </div>
        </div>
        <div class="sco_component_results_row" v-if="transactionDetails.transaction">
          <div>TX XDR</div>
          <div class="sco_component_results_row_aside">
            <textarea ref="xdrEnvelope" v-model="transactionDetails.transactionXdr" readonly></textarea>
          </div>
        </div>
      </div>
      <div class="sco_component_footer">
        <div class="sco_component_results_row">
          <div>Status</div>
          <div class="sco_component_results_row_aside">
            {{transactionDetails.status.title}}
          </div>
        </div>
      </div>
      <div class="sco_component_error" v-if="error">
        <p>{{error}} <a href="#" @click.prevent="tryAgain">Try again...</a></p>
      </div>
    </div>
  </div>
</template>
<script>
// import constants from 'app/constants'
import { mapActions, mapState } from 'vuex'
// import { buildTransaction, fetchTransaction } from 'utils/stellarsdk.helper'
// import {copy} from 'utils/clipboard'
export default {
  props: {
  },
  computed: {
    complete: {
      get () {
        return this.$store.state.transactionDetails.complete
      },
      set (value) {
        this.transactionDetailsSet({
          complete: value
        })
      }
    },
    error: {
      get () {
        return this.$store.state.transactionDetails.error
      },
      set (value) {
        this.transactionDetailsErrorSet(value)
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
      accountConfirmation: 'accountConfirmation',
      accountConfirmed: state => state.accountConfirmation.complete,
      dto: 'dto',
      network: 'network',
      paymentOptionsComplete: state => state.paymentOptions.complete,
      stellarTicker: state => state.ticker.stellar,
      transactionSuccess: state => state.transactionDetails.success
    })
  },
  data () {
    return {
      loaded: false
    }
  },
  created () {
    this.loaded = true
    this.complete = true
  },
  methods: {
    // buildTransaction: function () {
    //   buildTransaction(this.network, this.dto)
    //     .then(result => {
    //       this.transactionDetails = {
    //         transaction: result,
    //         transactionHash: result.hash().toString('hex'),
    //         transactionXdr: result.toEnvelope().toXDR('base64')
    //       }
    //     }).catch(err => {
    //       console.log(err)
    //       this.error = err
    //     })
    // },
    tryAgain: function () {
      this.paymentOptions = {
        complete: false
      }
    },
    ...mapActions([
      'paymentOptionsSet',
      'transactionDetailsSet',
      'transactionDetailsErrorSet'])
  },
  watch: {
    // accountConfirmed (newVal) {
    //   if (!newVal) {
    //     return
    //   }
    //   // this.error = null
    //   // this.loaded = false
    //   setTimeout(e => {
    //     this.buildTransaction()
    //   }, 400)
    // },
    // paymentOptionsComplete (newVal) {
    //   if (!newVal) {
    //     return
    //   }
    //   console.log('paymentOptionsComplete')
    //   // this.error = null
    //   // this.loaded = true
    //   setTimeout(e => {
    //     this.transactionDetails = {
    //       error: null,
    //       status: this.paymentOptions.method === 'ledger' ? constants.TX_STATUS.ledger_in_progress : constants.TX_STATUS.listening_for_transaction
    //     }
    //   }, 400)
    // },
    // transactionSuccess (newVal) {
    //   if (newVal) {
    //     fetchTransaction(this.network, this.transactionDetails.result.hash)
    //       .then(tx => {
    //         this.transactionDetails = {
    //           result: tx
    //         }
    //       })
    //   }
    // }
  }
}
</script>
