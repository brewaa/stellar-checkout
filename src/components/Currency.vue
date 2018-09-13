<template>
  <div class="currency_toggler">
    <select v-if="currencies.length > 0" v-model="currency">
      <option v-for="c in currencies" :value="c" :key="c" :selected="c == currency">{{c}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
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
  methods: {
    ...mapActions(['currencySet'])
  }
}
</script>
