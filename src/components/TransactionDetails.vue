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
        <div class="title">Transaction</div>
        <div class="feature">
          <span class="price">{{stellarTicker.meta.total}}</span>
          <span class="currency">{{options.currency }}</span>
          <span class="separator">/</span>
          <span class="price">{{stellarTicker.meta.amount | decimal }}</span>
          <span class="currency">{{options.asset().code}}</span>
        </div>
        <div class="complete_icon">
          <input type="checkbox" v-model="complete" />
        </div>
      </div>
      <div class="sco_component_results">
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
        <div class="sco_component_results_row" v-if="options.id">
          <div>Merchant Ref</div>
          <div class="sco_component_results_row_aside">
            #{{ options.id }}
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>SUBTOTAL</div>
          <div class="sco_component_results_row_aside">
            {{stellarTicker.meta.total}}
            <span class="currency">{{options.currency}}</span>
          </div>
        </div>
        <div class="sco_component_results_row">
          <div>TOTAL</div>
          <div class="sco_component_results_row_aside">
            {{stellarTicker.meta.amount}}
            <span class="currency">{{options.asset().code}}</span>
          </div>
        </div>
      </div>
      <div class="sco_component_footer">
        <div class="sco_component_results_row">
          <div>Status</div>
          <div class="sco_component_results_row_aside">
            <span class="spinner" v-if="paymentOptions.method && !transaction.complete">
              <icon icon="spinner" spin pulse></icon>
            </span>
            <span v-if="transaction.success" v-html="tick"></span>
            {{transaction.status.title}}
          </div>
        </div>
      </div>
      <div class="sco_component_footer" v-if="timer.durationInSeconds > 0">
        <div class="sco_component_results_row">
          <div>Time remaining</div>
          <div class="sco_component_results_row_aside">
            <CountdownTimer :time="timer.durationInSeconds * 1000"
              v-on:countdownend="onCountdownEnd"></CountdownTimer>
          </div>
        </div>
      </div>
      <div class="sco_component_error" v-if="error" v-html="error"></div>
      <div class="sco_component_error nottoowide" v-if="error">
        <button class="sco_button" href="#" @click.prevent="tryAgain">Try again...</button>
      </div>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { formatDecimal } from 'utils/formatter'
import { mapActions, mapState } from 'vuex'
import CountdownTimer from 'components/CountdownTimer'
export default {
  props: {
  },
  components: {
    CountdownTimer
  },
  computed: {
    tick: () => constants.ENTITY.tick,
    transaction: {
      get () {
        return this.$store.state.transaction
      },
      set (value) {
        this.transactionSave(value)
      }
    },
    ...mapState({
      error: state => state.transaction.error,
      federation: 'federation',
      network: 'network',
      options: 'options',
      paymentOptions: 'paymentOptions',
      stellarTicker: state => state.ticker.stellar,
      timer: 'timer'
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
  filters: {
    decimal: function (input) {
      return formatDecimal(input)
    }
  },
  methods: {
    onCountdownEnd: function () {
      this.timerExpired()
    },
    tryAgain: function () {
      this.paymentOptions = {
        complete: false
      }
    },
    ...mapActions([
      'timerExpired',
      'transactionSave'])
  },
  watch: {
    // transaction (newVal) {
    //   if (newVal.success) {
    //     setTimeout(e => {
    //       this.complete = false
    //     }, 1000)
    //   }
    // }
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
