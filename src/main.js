import App from './App'
import { FontAwesomeIcon } from 'assets/icons'
import constants from 'app/constants'
// eslint-disable-next-line no-unused-vars
import Css from 'sass/site.scss'
import merge from 'lodash.merge'
import l10n from 'l10n'
import {randomId} from 'utils/generator'
import {setNetwork} from 'utils/stellarsdk.helper'
import store from 'store'
import {syncStellarLumensTickerData} from 'services/stellar.lumens.ticker'
import {validateConfig} from 'utils/config.checker'
import Vue from 'vue'
import VueQrcode from '@xkeshi/vue-qrcode'

export default {
  name: constants.APP.name,
  ui: {
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
            var network = setNetwork(options.network)
            constants.NETWORK.name = network.name
            constants.NETWORK.network = network.network
            constants.NETWORK.uri = network.uri

            // CURRENCY
            var currency = options.currency
            constants.SETTINGS.currency = currency

            // CULTURE
            constants.SETTINGS.culture = options.lang

            // DTO
            constants.DTO.invoice.id = options.id
            constants.DTO.invoice.currency = currency
            constants.DTO.invoice.total = options.total
            constants.DTO.payment.asset = window.StellarSdk.Asset.native()
            constants.DTO.payment.fee = 0.00001
            constants.DTO.payment.memo = randomId(28) // options.memo ||
            constants.DTO.payment.memoType = window.StellarSdk.MemoHash
            constants.DTO.payment.to = options.to

            // Vue
            var app = new Vue({
              store,
              ...App
            })

            return l10n.init(options.lang)
              .then(syncStellarLumensTickerData())
              .then(data => {
                app.$mount(options.selector)
              })
          })
      })
    }
  }
}
