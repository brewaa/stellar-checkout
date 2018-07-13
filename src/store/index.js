import Vue from 'vue'
import Vuex from 'vuex'
import merge from 'lodash.merge'

import constants from 'app/constants'
import {cultures} from 'l10n'

import { loadAccount, setNetwork } from 'utils/stellarsdk.helper'
import {syncStellarLumensTickerData} from 'services/stellar.lumens.ticker'

Vue.use(Vuex)

// TYPES
const ACCOUNT_CONFIRMATION_CLEAR = 'ACCOUNT_CONFIRMATION_CLEAR'
const ACCOUNT_CONFIRMATION_SET = 'ACCOUNT_CONFIRMATION_SET'
const ACCOUNT_CONFIRMATION_ERROR = 'ACCOUNT_CONFIRMATION_ERROR'

const CULTURE_SET = 'CULTURE_SET'
const CURRENCY_SET = 'CURRENCY_SET'

const DTO_SET = 'DTO_SET'
const DTO_ERROR = 'DTO_ERROR'

const FEDERATION_SET = 'FEDERATION_SET'
const FEDERATION_ERROR_SET = 'FEDERATION_ERROR_SET'

const LEDGER_ERROR = 'LEDGER_ERROR'

const PAYMENT_OPTIONS_SET = 'PAYMENT_OPTIONS_SET'
const PAYMENT_OPTIONS_ERROR = 'PAYMENT_OPTIONS_ERROR'

const NETWORK_SET = 'NETWORK_SET'

const TICKER_STELLAR_UPDATE = 'TICKER_STELLAR_UPDATE'

const TRANSACTION_DETAILS_SET = 'TRANSACTION_DETAILS_SET'
const TRANSACTION_DETAILS_ERROR_SET = 'TRANSACTION_DETAILS_ERROR_SET'

const TRANSACTION_STATUS_SET = 'TRANSACTION_STATUS_SET'
const TRANSACTION_STATUS_ERROR_SET = 'TRANSACTION_STATUS_ERROR_SET'

// STATE
const state = {
  accountConfirmation: {
    account: null,
    complete: false,
    error: null
  },
  cultures: cultures,
  currencies: constants.CURRENCIES,
  dto: constants.DTO,
  federation: {
    complete: false,
    error: null,
    ledgerAppVersion: null,
    ledgerBip32Path: '44\'/148\'/0\'',
    ledgerConfirmed: false,
    ledgerError: null,
    ledgerVerified: false,
    publicKey: null,
    stellarAddress: null
  },
  options: constants.OPTIONS,
  network: constants.NETWORK,
  paymentOptions: {
    complete: false,
    error: null,
    method: null
  },
  settings: constants.SETTINGS,
  ticker: {
    stellar: constants.TICKERS.stellar
  },
  transactionDetails: {
    complete: false,
    error: null,
    transaction: null,
    transactionHash: null,
    transactionXdr: null
  },
  transactionStatus: {
    complete: false,
    error: null,
    result: null,
    status: constants.TX_STATUS.empty,
    success: false
  }
}

// MUTATIONS
const mutations = {
  [ACCOUNT_CONFIRMATION_CLEAR] (state, obj) {
    state.accountConfirmation.account = null
    state.accountConfirmation.complete = false
    state.accountConfirmation.error = null
    // state.dto.payment.from = ''
    // state.dto.payment.from_stellar_address = ''
    // state.dto.tx.hash = null
    // state.dto.tx.xdr = null
    state.transactionDetails.complete = false
    state.paymentOptions.complete = false
  },
  [ACCOUNT_CONFIRMATION_SET] (state, obj) {
    merge(state.accountConfirmation, obj)
    if (!state.accountConfirmation.complete) {
      state.transactionDetails.complete = false
      state.paymentOptions.complete = false
    }
  },
  [ACCOUNT_CONFIRMATION_ERROR] (state, obj) {
    state.accountConfirmation.error = obj
  },
  [CULTURE_SET] (state, obj) {
    state.settings.culture = obj
  },
  [CURRENCY_SET] (state, obj) {
    state.settings.currency = obj
  },
  [DTO_SET] (state, obj) {
    merge(state.dto, obj)
  },
  [DTO_ERROR] (state, obj) {
    state.dto.error = obj
  },
  [FEDERATION_SET] (state, obj) {
    merge(state.federation, obj)
    state.federation.complete = !obj.error && state.federation.complete
    // state.federation.publicKey = state.federation.ledgerPublicKey || state.federation.publicKey
    if (state.federation.error) {
      // state.dto.payment.from = publicKey
      // todo: clear any states that depend on successful federation
    }
    state.dto.payment.from = state.federation.publicKey
    if (!state.federation.complete) {
      state.accountConfirmation.complete = false
      state.transactionDetails.complete = false
      state.paymentOptions.complete = false
    }
  },
  [FEDERATION_ERROR_SET] (state, obj) {
    state.federation.error = obj
  },
  [LEDGER_ERROR] (state, obj) {
    state.federation.ledgerError = obj
  },
  [PAYMENT_OPTIONS_SET] (state, obj) {
    merge(state.paymentOptions, obj)
  },
  [PAYMENT_OPTIONS_ERROR] (state, obj) {
    state.paymentOptions.error = obj
  },
  [NETWORK_SET] (state, obj) {
    var network = setNetwork(obj)
    state.network = network
  },
  [TICKER_STELLAR_UPDATE] (state, obj) {
    state.ticker.stellar.data = obj
    state.ticker.stellar.updated = new Date(Date.now())
  },
  [TRANSACTION_DETAILS_SET] (state, obj) {
    merge(state.transactionDetails, obj)
  },
  [TRANSACTION_DETAILS_ERROR_SET] (state, obj) {
    state.transactionDetails.error = obj
  },
  [TRANSACTION_STATUS_SET] (state, obj) {
    merge(state.transactionStatus, obj)
  },
  [TRANSACTION_STATUS_ERROR_SET] (state, obj) {
    state.transactionStatus.error = obj
  }
}

// ACTIONS
const actions = ({
  accountConfirmationClear ({ commit }, obj) {
    commit(ACCOUNT_CONFIRMATION_CLEAR, obj)
  },
  accountConfirmationError ({ commit }, obj) {
    commit(ACCOUNT_CONFIRMATION_ERROR, obj)
  },
  accountConfirmationSet ({ commit }, obj) {
    commit(ACCOUNT_CONFIRMATION_SET, obj)
  },
  accountLoad ({ commit }, publicKey) {
    return loadAccount(state.network, publicKey)
      .then(account => {
        commit(ACCOUNT_CONFIRMATION_SET, { account: account })
        return account
      })
  },
  cultureSet ({ commit }, obj) {
    commit(CULTURE_SET, obj)
  },
  currencySet ({ commit }, obj) {
    commit(CURRENCY_SET, obj)
  },
  dtoSet ({ commit }, obj) {
    commit(DTO_SET, obj)
  },
  dtoError ({ commit }, obj) {
    commit(DTO_ERROR, obj)
  },
  federationSet ({ commit }, obj) {
    commit(FEDERATION_SET, obj)
  },
  federationErrorSet ({ commit }, obj) {
    commit(FEDERATION_ERROR_SET, obj)
  },
  ledgerErrorSet ({ commit }, obj) {
    commit(LEDGER_ERROR, obj)
  },
  paymentOptionsSet ({ commit }, obj) {
    commit(PAYMENT_OPTIONS_SET, obj)
  },
  paymentOptionsError ({ commit }, obj) {
    commit(PAYMENT_OPTIONS_ERROR, obj)
  },
  networkSet ({ commit }, obj) {
    commit(NETWORK_SET, obj)
  },
  updateStellarTicker ({ commit }, obj) {
    if (!obj) {
      syncStellarLumensTickerData()
        .then(data => {
          return data[0]
        })
        .then(obj => commit(TICKER_STELLAR_UPDATE, obj))
      return
    }
    commit(TICKER_STELLAR_UPDATE, obj)
  },
  transactionDetailsSet ({ commit }, obj) {
    commit(TRANSACTION_DETAILS_SET, obj)
  },
  transactionDetailsErrorSet ({ commit }, obj) {
    commit(TRANSACTION_DETAILS_ERROR_SET, obj)
  },
  transactionStatusSet ({ commit }, obj) {
    commit(TRANSACTION_STATUS_SET, obj)
  },
  transactionStatusErrorSet ({ commit }, obj) {
    commit(TRANSACTION_STATUS_ERROR_SET, obj)
  }
})

// GETTERS
const getters = ({
  culture: (state) => {
    return state.settings.culture
  },
  currency: (state) => {
    return state.settings.currency
  },
  network: (state) => {
    return state.network
  },
  stellarTicker: (state) => {
    return state.ticker.stellar
  }
})

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
