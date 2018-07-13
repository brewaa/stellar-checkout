<template>
  <div :class="['sco_component', 'sco_component--ticker', 'sco_loaded', { 'sco_component--collapsed': complete }]">
    <div class="sco_component_i">
      <div class="sco_component_title">
        Ticker
        <div class="sco_component_title_aside">
          <span class="currency_name sco_hidden">Stellar</span>
          <span class="moniker">XLM</span>
          <span class="separator">|</span>
          <span class="price">${{ price | decimal7 }}</span>
          <span class="moniker">{{ currency }}</span>
          <input type="checkbox" v-model="complete" />
        </div>
      </div>
      <div class="sco_component_results">
        <div class="ticker_meta">
          <div class="ticker_meta">
            <div class="ticker_meta_currency_name">{{ stellarTicker.data.id }} {{ stellarTicker.data.symbol }}</div>
            <div class="ticker_meta_price">${{ price | decimal7 }} {{currency}}</div>
            <div class="ticker_meta_priceBtc">{{ stellarTicker.data.price_btc | decimal8 }} BTC</div>
          </div>
          <div class="ticker_meta">
            <div class="ticker_meta_rank">rank: {{ stellarTicker.data.rank }}</div>
            <div class="ticker_meta_mcap">m.cap:{{ marketCap | niceNumber }}</div>
            <div class="ticker_meta_vol24h">vol24r:{{ volume24h | niceNumber }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { formatDecimal7, formatDecimal8, formatNiceNumber } from 'utils/formatter'
export default {
  computed: {
    marketCap: function () {
      return this.stellarTicker.data['market_cap_' + this.currency.toLowerCase()]
    },
    price: function () {
      return this.stellarTicker.data['price_' + this.currency.toLowerCase()]
    },
    volume24h: function () {
      return this.stellarTicker.data['24h_volume_' + this.currency.toLowerCase()]
    },
    ...mapGetters([
      'currency',
      'stellarTicker'
    ])
  },
  data () {
    return {
      complete: true
    }
  },
  filters: {
    decimal7: function (price) {
      return formatDecimal7(price)
    },
    decimal8: function (price) {
      return formatDecimal8(price)
    },
    niceNumber: function (price) {
      return formatNiceNumber(price, 'currency')
    }
  },
  created () {
    var self = this
    setInterval(function () {
      self.updateStellarTicker()
    }, 30000)
  },
  methods: {
    ...mapActions(['updateStellarTicker'])
  }
}
</script>
