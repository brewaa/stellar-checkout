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
  <div :class="[baseCssClass(), 'sco_component--transaction_details']">
    <div class="sco_component_i">
      <div class="sco_component_header">
        <div class="title">Transaction</div>
        <div class="feature">
          <span class="price">{{amount | currency }}</span>
          <span class="currency">{{ currency }}</span>
        </div>
        <div class="complete_icon">
          <input type="checkbox" v-model="complete" />
        </div>
      </div>
      <div class="sco_component_results">
        <div class="sco_component_row" v-if="transaction.tx">
          <div>Hash</div>
          <div class="sco_component_row_aside">
            {{transaction.hash}}
          </div>
        </div>
        <div class="sco_component_row sco_offscreen" v-if="transaction.xdr">
          <div>TX XDR</div>
          <div class="sco_component_row_aside">
            <textarea ref="xdrEnvelope" v-model="transaction.xdr" readonly></textarea>
          </div>
        </div>
        <div class="sco_component_row">
          <div>To</div>
          <div class="sco_component_row_aside" v-if="federation.accountTo.account">
            {{ federation.accountTo.account.account_id }}
          </div>
        </div>
        <div class="sco_component_row">
          <div>From</div>
          <div class="sco_component_row_aside" v-if="federation.accountFrom.account">
            {{ federation.accountFrom.account.account_id }}
          </div>
        </div>
        <div class="sco_component_row" v-if="options.id">
          <div>Merchant Ref</div>
          <div class="sco_component_row_aside">
            #{{ options.id }}
          </div>
        </div>
        <div class="sco_component_row">
          <div>Amount</div>
          <div class="sco_component_row_aside">
            {{amount | currency}}
            <span class="currency">{{ currency }}</span>
          </div>
        </div>
        <div class="sco_component_row">
          <div>Total</div>
          <div class="sco_component_row_aside">
            {{transaction.amount}}
            <span class="currency">{{transaction.asset().code}}</span>
          </div>
        </div>
      </div>
      <div class="sco_component_row sco_component_row--footer">
        <div>Status</div>
        <div class="sco_component_row_aside">
          <span class="spinner" v-if="paymentOptions.method && !transaction.complete">
            <icon icon="spinner" spin pulse></icon>
          </span>
          <span v-if="transaction.success" v-html="tick"></span>
          {{transaction.status.title}}
        </div>
      </div>
      <div class="sco_component_row sco_component_row--footer" v-if="timer.durationInSeconds > 0">
        <div>Time remaining</div>
        <div class="sco_component_row_aside">
          <CountdownTimer :time="timer.durationInSeconds * 1000"
            v-on:countdownend="onCountdownEnd"></CountdownTimer>
        </div>
      </div>
      <div class="sco_component_error" v-if="this.error">
        <icon icon="exclamation-circle"></icon>
        <span v-html="error"></span>
      </div>
      <div class="sco_component_error nottoowide" v-if="error">
        <button class="sco_button" href="#" @click.prevent="tryAgain">Try again...</button>
      </div>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { formatCurrency } from 'utils/formatter'
import { mapActions, mapState } from 'vuex'
import BaseComponent from 'components/.base.component.mixin'
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
      amount: 'amount',
      currency: 'currency',
      errorMsg: this.error = state => state.transaction.error,
      federation: 'federation',
      network: 'network',
      options: 'options',
      paymentOptions: 'paymentOptions',
      stellarTicker: state => state.ticker.stellar,
      transaction: 'transaction',
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
    currency: function (input) {
      return formatCurrency(input)
    }
  },
  mixins: [
    BaseComponent
  ],
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
  }
}
</script>
