<template>
  <div :class="[baseCssClass(), 'sco_component--amount']" v-show="!transaction.success">
    <div class="sco_component_i">
      <div class="sco_component_header sco_component_header--has-form">
        <div class="title">Amount</div>
        <div class="feature">
          <input v-model="localAmount" class="sco_input--amount" type="number" step="0.1" placeholder="0.00" v-if="!amount || (amount && localAmount)" />
          <input class="sco_input--amount" :value="amount" v-if="amount && !localAmount" disabled />
          <CurrencyToggler v-if="!amount && !options.currency" />
          <select v-if="amount || options.currency" disabled>
            <option :value="currency">{{currency}}</option>
          </select>
        </div>
      </div>
      <div class="sco_component_error" v-if="this.error">
        <icon icon="exclamation-circle"></icon>
        <span v-html="error"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import BaseComponent from 'components/.base.component.mixin'
import CurrencyToggler from 'components/CurrencyToggler'
export default {
  components: {
    CurrencyToggler
  },
  computed: {
    amount: {
      get () {
        return this.$store.state.amount
      },
      set (value) {
        this.amountSet(value)
      }
    },
    transaction: function () {
      return this.$store.state.transaction
    },
    ...mapState({
      accountConfirmationComplete: state => state.accountConfirmation.complete,
      currency: 'currency',
      options: 'options'
    })
  },
  data () {
    return {
      localAmount: this.amount,
      complete: true
    }
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    ...mapActions(['amountSet'])
  },
  watch: {
    localAmount: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.amount = newVal
      }
    }
  }
}
</script>
