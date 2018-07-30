import App from './App'
import { FontAwesomeIcon } from 'assets/icons'
import constants from 'app/constants'
// eslint-disable-next-line no-unused-vars
import Css from 'sass/site.scss'
import merge from 'lodash.merge'
import l10n from 'l10n'
// import {randomId} from 'utils/generator'
import {setNetwork} from 'utils/stellarsdk.helper'
import store from 'store'
import {validateConfig} from 'utils/config.checker'
import Vue from 'vue'
import VueQrcode from '@xkeshi/vue-qrcode'
/**
 * @exports StellarCheckout
 */
var StellarCheckout = {
  name: constants.APP.name,
  /**
   * Renders the default user interface.
   *
   * @example <caption>Basic Configuration Example</caption>
<div id="elem"></div>
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
  currency: 'GBP',
  total: '10',
  to: 'GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI'
});
</script>
   *
   * @function render
   * @param {string} selector - The selector of the target element where StellarCheckout will be added to the DOM.
   * @param {object} opts - A configuration object.
   * @param {string} opts.culture - Options: ['en', 'es-ES', 'ja-JP', 'ko-KR', 'ru-RU', 'zh-CN']
   * @param {string} opts.currency - Options: ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"]
   * @param {string} opts.from - The sender's address. A federated stellar address OR a public key.
   * @param {string} opts.id - An optional reference ID supplied by the merchant
   * @param {string} opts.network - The Stellar.org network. Options: [ 'public', 'test']
   * @param {callback} opts.onSubmit - A callback function that will contain the transaction results. Uses error first callback pattern.
   * @param {string} opts.redirectUrl - A URL that the user will be redirected to upon completing a successful transaction.
   * @param {boolean} opts.showNetworkSelector - Shows the network selector component. Options: [true, false]
   * @param {boolean} opts.showTicker - Show the XLM ticker component Options: [true, false]
   * @param {string} opts.stylesheet - Allows overriding of the default styles. Must be a valid URL to a stylesheet document.
   * @param {string} opts.to - The recipient's address. A federated stellar address OR a public key.
   * @param {decimal} opts.total - The invoice/order total in the fiat currency specified in opts.currency
   */
  render: function (selector, opts) {
    document.addEventListener('DOMContentLoaded', () => {
      var options = merge(constants.OPTIONS, opts)
      options.selector = selector
      validateConfig(options)
        .then(e => {
          // Axios settings
          var axios = window.StellarSdk.axios
          // Vue settings
          Vue.config.productionTip = false
          Vue.component('font-awesome-icon', FontAwesomeIcon)
          Vue.component(VueQrcode.name, VueQrcode)
          Vue.prototype.$http = axios
          // Set stellar network (options.[public|test])
          merge(constants.NETWORK, setNetwork(options.network))
          // Vue
          var app = new Vue({
            store,
            ...App
          })
          return new Promise((resolve) => {
            // syncStellarLumensTickerData()
            //   .then(data => {
            //     resolve(data)
            //   })
            resolve()
          })
            .then(l10n.init(options.lang))
            .then(() => {
              app.$mount(options.selector)
            })
        })
    })
  }
}

export default StellarCheckout
