<style scoped>
.nottoowide {
  text-align: center;
}
.nottoowide .sco_button {
  margin: auto;
  width: 25%;
}
</style>
<template>
  <div :class="['sco_component', 'sco_component--transaction_details', { 'sco_loaded' : loaded, 'sco_component--collapsed' : complete }]">
    <div class="sco_component_i">
      <div class="sco_component_title">
        <!-- <span class="sco_spinner1" v-if="!transactionDetails.success">
          <i class="fas fa-spinner fa-spin"></i>
        </span> -->
        Transaction Details
        <div class="sco_component_title_aside">
          <span class="price">{{stellarTicker.meta.invoiceTotalFormatted}}</span>
          <span class="currency">{{options.currency}}</span>
          <span class="separator">/</span>
          <span class="price">{{stellarTicker.meta.invoicePriceInLumensFormatted}}</span>
          <span class="currency">{{options.asset().code}}</span>
          <input type="checkbox" v-model="complete" />
        </div>
      </div>
      <div class="sco_component_results">
        <div class="sco_component_results_row">
          <div>Merchant Ref</div>
          <div class="sco_component_results_row_aside">
            #{{ options.id }}
          </div>
        </div>
        <div class="sco_component_results_row" v-if="transaction.tx">
          <div>Hash</div>
          <div class="sco_component_results_row_aside">
            {{transaction.hash}}
          </div>
        </div>
        <div class="sco_component_results_row sco_offscreen" v-if="transaction.xdr">
          <div>TX XDR</div>
          <div class="sco_component_results_row_aside">
            <textarea ref="xdrEnvelope" v-model="transaction.xdr" readonly></textarea>
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>To</div>
          <div class="sco_component_results_row_aside" v-if="federation.accountTo.account">
            {{ federation.accountTo.account.account_id }}
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>From</div>
          <div class="sco_component_results_row_aside" v-if="federation.accountFrom.account">
            {{ federation.accountFrom.account.account_id }}
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>SUBTOTAL</div>
          <div class="sco_component_results_row_aside">
            {{stellarTicker.meta.invoiceTotalFormatted}}
            <span class="currency">{{options.currency}}</span>
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>TOTAL</div>
          <div class="sco_component_results_row_aside">
            {{stellarTicker.meta.invoicePriceInLumensFormatted}}
            <span class="currency">{{options.asset().code}}</span>
          </div>
        </div>
      </div>
      <div class="sco_component_footer">
        <div class="sco_component_results_row">
          <div>Status</div>
          <div class="sco_component_results_row_aside">
            {{transaction.status.title}}
          </div>
        </div>
      </div>
      <div class="sco_component_error" v-if="error" v-html="error"></div>
      <div class="sco_component_error nottoowide" v-if="error">
        <button class="sco_button" href="#" @click.prevent="tryAgain">Try again...</button>
      </div>
      <div class="sco_component_error nottoowide" v-if="error">
        <button class="sco_button" href="#" @click.prevent="tryAgain">Try again...</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
  },
  computed: {
    transaction: {
      get () {
        return this.$store.state.transaction
      },
      set (value) {
        this.transactionSave(value)
      }
    },
    ...mapState({
      federation: 'federation',
      error: state => state.transaction.error,
      options: 'options',
      network: 'network',
      stellarTicker: state => state.ticker.stellar
    })
  },
  data () {
    return {
      complete: true,
      loaded: false
    }
  },
  created () {
    this.loaded = true
  },
  methods: {
    tryAgain: function () {
      this.paymentOptions = {
        complete: false
      }
    },
    ...mapActions([
      'transactionSave'])
  },
  watch: {
    // paymentOptionsComplete (newVal) {
    //   if (!newVal) {
    //     return
    //   }
    //   console.log('paymentOptionsComplete')
    //   // this.error = null
    //   // this.loaded = true
    //   setTimeout(e => {
    //     this.transaction = {
    //       error: null,
    //       status: this.paymentOptions.method === 'ledger' ? constants.TX_STATUS.ledger_in_progress : constants.TX_STATUS.listening_for_transaction
    //     }
    //   }, 400)
    // },
    // transactionSuccess (newVal) {
    //   if (newVal) {
    //     fetchTransaction(this.network, this.transactionDetails.result.hash)
    //       .then(tx => {
    //         this.transaction = {
    //           result: tx
    //         }
    //       })
    //   }
    // }
  }
}
</script>
