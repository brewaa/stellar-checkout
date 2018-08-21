<template>
  <div :class="[baseCssClass(), 'sco_component--ticker']">
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
          <span class="price">${{ price | decimal7 }}</span>
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
            <span class="currency">XLM</span>
            <span class="separator">|</span>
            <span class="price">{{ stellarTicker.data.price_btc | decimal8 }}</span>
            <span class="currency">BTC</span>
          </div>
        </div>
        <div class="sco_component_row sco_component_row--meta">
          <div>Updated</div>
          <div class="sco_component_row_aside">
            {{stellarTicker.updated | date }}
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
import { formatDate, formatDecimal7, formatDecimal8, formatNiceNumber } from 'utils/formatter'
import TWEEN from '@tweenjs/tween.js'
import BaseComponent from 'components/.base.component.mixin'
export default {
  computed: {
    // error: {
    //   get () {
    //     return this.stellarTicker.error
    //   },
    //   set (value) {
    //     this.setStellarTickerError(value)
    //   }
    // },
    // loaded: function () {
    //   return !isNaN(this.price)
    // },
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
      'culture',
      'stellarTicker'
    ])
  },
  data () {
    return {
      complete: true
    }
  },
  filters: {
    date: function (date) {
      return formatDate(date)
    },
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
    this.run()
    setInterval(() => {
      this.complete = false
      this.loaded = false
      this.run()
    }, 30000)
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    run: function () {
      this.stellarTickerUpdate().then(() => {
        this.complete = true
        this.loaded = true
      })
    },
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
    ...mapActions([
      'stellarTickerUpdate'])
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
