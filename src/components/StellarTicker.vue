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
        {{ stellarTicker.data.id }}
        <div class="sco_component_results_aside">
          <span class="currency_name sco_hidden">Stellar</span>
          <span class="moniker">XLM</span>
          <span class="separator">|</span>
          <span class="price">{{ stellarTicker.data.price_btc | decimal8 }}</span>
          <span class="moniker">BTC</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { formatDecimal7, formatDecimal8, formatNiceNumber } from 'utils/formatter'
import TWEEN from '@tweenjs/tween.js'
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
    tweenPrice: function (startValue, endValue) {
      return this.tween(startValue, endValue, this.price)
    },
    tweenPriceBtc: function (startValue, endValue) {
      return this.tween(startValue, endValue, this.priceBtc)
    },
    tween: function (startValue, endValue, targetProp) {
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function (object) {
          targetProp = object.tweeningValue
        })
        .start()
      animate()
    },
    ...mapActions(['updateStellarTicker'])
  },
  watch: {
    price: function (newVal, oldVal) {
      this.tweenPrice(oldVal, newVal)
    },
    priceBtc: function (newVal, oldVal) {
      this.tweenPriceBtc(oldVal, newVal)
    }
  }
}
</script>
