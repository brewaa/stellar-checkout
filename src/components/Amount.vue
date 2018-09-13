<template>
  <div :class="[baseCssClass(), 'sco_component--amount']" v-show="!transaction.success">
    <div class="sco_component_i">
      <div class="sco_component_header sco_component_header--has-form">
        <div class="title">Amount</div>
        <div class="feature">
          <input v-model="amount" class="sco_input--money" />
          <Currency />
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
import Currency from 'components/Currency'
export default {
  components: {
    Currency
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
    transaction: {
      get () {
        return this.$store.state.transaction
      },
      set (value) {
        this.transactionSave(value)
      }
    },
    ...mapState({
      accountConfirmationComplete: state => state.accountConfirmation.complete
    })
  },
  data () {
    return {
      complete: true
    }
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    ...mapActions([
      'amountSet'])
  }
}
</script>
