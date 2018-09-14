<template>
  <div class="sco_component_toggler sco_component_toggler--currency">
    <select v-if="currencies.length > 0" v-model="currency" :disabled="disabled">
      <option v-for="c in currencies" :value="c" :key="c" :selected="c == currency">{{c}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: String
  },
  computed: {
    currency: {
      get () {
        return this.$store.state.currency
      },
      set (value) {
        this.currencySet(value)
      }
    },
    ...mapState({
      currencies: state => state.currencies
    })
  },
  created () {
    if (this.value) {
      this.currency = this.value
    }
  },
  methods: {
    ...mapActions(['currencySet'])
  }
}
</script>
