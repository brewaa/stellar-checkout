<template>
  <div :class="[baseCssClass(), 'sco_component--amount']" v-show="!transaction.success">
    <div class="sco_component_i">
      <div class="sco_component_header sco_component_header--has-form">
        <div class="title">Amount</div>
        <div class="feature">
          <input v-model="localAmount" class="sco_input--amount" type="number" step="0.1" placeholder="0.00" v-if="!value" />
          <input class="sco_input--amount" :value="value" v-if="value" disabled />
          <CurrencyToggler v-if="!amount && !currency" />
          <select v-if="amount || currency" disabled>
            <option :value="currency">{{options.currency}}</option>
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
  props: {
    currency: String,
    value: String
  },
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
      options: 'options'
    })
  },
  data () {
    return {
      localAmount: this.value,
      complete: true
    }
  },
  created () {
    if (this.value) {
      this.amount = this.value
    }
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    ...mapActions([
      'amountSet'])
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
