<template>
  <div :class="[baseCssClass(), 'sco_component--ticker', 'sco_component--bestill']">
    <div class="sco_component_i">
      <div class="sco_component_header">
        <div class="title">Ticker</div>
        <span class="sco_component_spinner">
          <icon icon="spinner" spin pulse></icon>
        </span>
        <div class="feature" v-show="loaded">
          <span class="currency_name sco_hidden">Stellar</span>
          <span class="currency">XLM</span>/<span class="currency">{{ currency }}</span>
          <span class="separator">|</span>
          <span class="price">{{ decimal7Format(price) }}</span>
        </div>
        <div class="complete_icon" v-show="loaded">
          <input type="checkbox" v-model="complete" />
        </div>
      </div>
      <div class="sco_component_results">
        <div class="sco_component_row">
          <div>{{ stellarTicker.data.id }}</div>
          <div class="sco_component_row_aside">
            <span class="currency_name sco_hidden">Stellar</span>
            <span class="currency">XLM</span>/<span class="currency">BTC</span>
            <span class="separator">|</span>
            <span class="price">{{ decimal8Format(stellarTicker.data.price_btc) }}</span>
            <span class="currency">BTC</span>
          </div>
        </div>
        <div class="sco_component_row sco_component_row--meta">
          <div>Updated</div>
          <div class="sco_component_row_aside">
            {{ dateFormat(stellarTicker.updated) }}
          </div>
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
import { mapActions, mapGetters } from 'vuex'
import { formatDate, formatDecimal7, formatDecimal8 } from 'utils/formatter'
import BaseComponent from 'components/.base.component.mixin'
export default {
  computed: {
    marketCap: function () {
      return this.stellarTicker.data['market_cap_' + this.currency.toLowerCase()]
    },
    price: function () {
      return this.stellarTicker.data['price_' + this.currency.toLowerCase()]
    },
    priceBtc: function () {
      return this.stellarTicker.data.price_btc
    },
    volume24h: function () {
      return this.stellarTicker.data['24h_volume_' + this.currency.toLowerCase()]
    },
    ...mapGetters([
      'amount',
      'culture',
      'currency',
      'stellarTicker'
    ])
  },
  data () {
    return {
      complete: true
    }
  },
  created () {
    this.run()
    setInterval(() => {
      this.loaded = false
      this.run()
    }, 30000)
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    dateFormat: function (date) {
      return formatDate(date)
    },
    decimal7Format: function (price) {
      return formatDecimal7(price, this.culture)
    },
    decimal8Format: function (price) {
      return formatDecimal8(price, this.culture)
    },
    run: function () {
      this.stellarTickerUpdate().then(() => {
        this.complete = !this.complete ? this.complete : true
        this.loaded = true
      })
    },
    ...mapActions(['stellarTickerUpdate'])
  },
  watch: {
    amount: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.run()
      }
    },
    currency: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.run()
      }
    }
  }
}
</script>
