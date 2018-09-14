<template>
  <div :class="[baseCssClass(), 'sco_component--amount']" v-show="!transaction.success">
    <div class="sco_component_i">
      <div class="sco_component_header sco_component_header--has-form">
        <div class="title">Amount</div>
        <div class="feature" v-if="!value">
          <input v-model="localAmount" class="sco_input--amount" type="number" />
          <CurrencyToggler :value="options.currency" />
        </div>
        <div class="feature" v-if="value">
          <input class="sco_input--amount" :value="value" disabled />
          <CurrencyToggler :value="options.currency" disabled="disabled" />
        </div>
        <!-- <div class="complete_icon" v-show="loaded">
          <input type="checkbox" v-model="complete" />
        </div> -->
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
