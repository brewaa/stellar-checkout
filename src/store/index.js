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

const ACCOUNT_FROM_SET = 'ACCOUNT_FROM_SET'
const ACCOUNT_TO_SET = 'ACCOUNT_TO_SET'

const CULTURE_SET = 'CULTURE_SET'
const CURRENCY_SET = 'CURRENCY_SET'

const DTO_SET = 'DTO_SET'
const DTO_ERROR = 'DTO_ERROR'

const FEDERATION_CLEAR = 'FEDERATION_CLEAR'
const FEDERATION_SET = 'FEDERATION_SET'
const FEDERATION_ERROR_SET = 'FEDERATION_ERROR_SET'

const LEDGER_ERROR = 'LEDGER_ERROR'
const LEDGER_UPDATE = 'LEDGER_UPDATE'

const PAYMENT_OPTIONS_CLEAR = 'PAYMENT_OPTIONS_CLEAR'
const PAYMENT_OPTIONS_ERROR = 'PAYMENT_OPTIONS_ERROR'
const PAYMENT_OPTIONS_SET = 'PAYMENT_OPTIONS_SET'

const NETWORK_SET = 'NETWORK_SET'

const TICKER_STELLAR_SET = 'TICKER_STELLAR_SET'
const TICKER_STELLAR_ERROR_SET = 'TICKER_STELLAR_ERROR_SET'

const TRANSACTION_SET = 'TRANSACTION_SET'

const TRANSACTION_DETAILS_SET = 'TRANSACTION_DETAILS_SET'
const TRANSACTION_DETAILS_ERROR_SET = 'TRANSACTION_DETAILS_ERROR_SET'

const TRANSACTION_STATUS_UPDATE = 'TRANSACTION_STATUS_UPDATE'

// STATE
const state = {
  accountConfirmation: {
    complete: false,
    error: null
  },
  accountFrom: {
    account: null,
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
  accountTo: {
    account: null,
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
  transaction: {
    current: null,
    currentHash: null,
    currentXdr: null,
    results: []
  },
  transactionDetails: {
    complete: false,
    error: null,
    result: null,
    status: constants.TX_STATUS.federation,
    success: false,
    transaction: null,
    transactionHash: null,
    transactionXdr: null
  }
}

// MUTATIONS
const mutations = {
  [ACCOUNT_CONFIRMATION_CLEAR] (state, obj) {
    merge(state.accountConfirmation, {
      // account: null,
      complete: false,
      error: null
    })
    // state.transactionDetails.status = constants.TX_STATUS.account_confirmation_loading_account
  },
  [ACCOUNT_CONFIRMATION_SET] (state, obj) {
    merge(state.accountConfirmation, obj)
    if (obj.complete) {
      state.transactionDetails.status = constants.TX_STATUS.payment_options
    } else {
      merge(state.accountConfirmation, {
        // account: null,
        complete: false,
        error: null
      })
      state.transactionDetails.status = constants.TX_STATUS.account_confirmation
    }
  },
  [ACCOUNT_CONFIRMATION_ERROR] (state, obj) {
    state.accountConfirmation.error = obj
  },
  [ACCOUNT_FROM_SET] (state, obj) {
    merge(state.accountFrom, obj)
  },
  [ACCOUNT_TO_SET] (state, obj) {
    merge(state.accountTo, obj)
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
  [FEDERATION_CLEAR] (state, obj) {
    merge(state.federation, {
      complete: false,
      error: null,
      publicKey: null,
      stellarAddress: null
    })
    state.transactionDetails.status = constants.TX_STATUS.federation
  },
  [FEDERATION_SET] (state, obj) {
    merge(state.federation, obj)
    state.federation.complete = !obj.error && state.federation.complete
    state.dto.payment.from = state.federation.publicKey
    if (!obj.complete) {
      merge(state.federation, {
        complete: false,
        error: null,
        publicKey: null,
        stellarAddress: null
      })
      state.transactionDetails.status = constants.TX_STATUS.federation
    }
  },
  [FEDERATION_ERROR_SET] (state, obj) {
    state.federation.error = obj
  },
  [LEDGER_ERROR] (state, obj) {
    state.federation.ledgerError = obj
  },
  [LEDGER_UPDATE] (state, obj) {
    merge(state.federation, obj)
  },
  [PAYMENT_OPTIONS_CLEAR] (state, obj) {
    merge(state.paymentOptions, {
      complete: false,
      error: null,
      method: null
    })
    // state.transactionDetails.status = constants.TX_STATUS.payment_options
  },
  [PAYMENT_OPTIONS_SET] (state, obj) {
    merge(state.paymentOptions, obj)
    if (obj.complete) {
      switch (obj.method) {
        case 'byo':
        case 'tx_signer':
          state.transactionDetails.status = constants.TX_STATUS.listening_for_transaction
          break
        case 'ledger':
          state.transactionDetails.status = constants.TX_STATUS.ledger_confirmation_required
          break
        default:
          state.transactionDetails.status = constants.TX_STATUS.payment_options
          break
      }
    } else {
      merge(state.paymentOptions, {
        complete: false,
        error: null,
        method: null
      })
      state.transactionDetails.status = constants.TX_STATUS.payment_options
    }
  },
  [PAYMENT_OPTIONS_ERROR] (state, obj) {
    state.paymentOptions.error = obj
  },
  [NETWORK_SET] (state, obj) {
    var network = setNetwork(obj)
    state.network = network
  },
  [TICKER_STELLAR_SET] (state, obj) {
    state.ticker.stellar.data = obj
    state.ticker.stellar.updated = new Date(Date.now())
  },
  [TICKER_STELLAR_ERROR_SET] (state, obj) {
    state.ticker.stellar.error = obj
  },
  [TRANSACTION_SET] (state, obj) {
    merge(state.transaction, obj)
  },
  [TRANSACTION_DETAILS_SET] (state, obj) {
    merge(state.transactionDetails, obj)
  },
  [TRANSACTION_DETAILS_ERROR_SET] (state, obj) {
    state.transactionDetails.error = obj
  },
  [TRANSACTION_STATUS_UPDATE] (state, obj) {
    state.transactionDetails.status = obj
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
  // accountLoad ({ commit }, publicKey) {
  //   return loadAccount(state.network, publicKey)
  //     .then(account => {
  //       commit(ACCOUNT_CONFIRMATION_SET, { account: account })
  //       return account
  //     })
  // },
  accountFromSet ({ commit }, publicKey) {
    return loadAccount(state.network, publicKey)
      .then(account => {
        commit(ACCOUNT_FROM_SET, { account: account })
        return account
      })
  },
  accountToSet ({ commit }, publicKey) {
    return loadAccount(state.network, publicKey)
      .then(account => {
        commit(ACCOUNT_TO_SET, { account: account })
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
  federationClear ({ commit }, obj) {
    commit(FEDERATION_CLEAR, obj)
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
  ledgerUpdate ({ commit }, obj) {
    commit(LEDGER_UPDATE, obj)
  },
  paymentOptionsClear ({ commit }, obj) {
    commit(PAYMENT_OPTIONS_CLEAR, obj)
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
  stellarTickerUpdate ({ commit }, obj) {
    if (!obj) {
      syncStellarLumensTickerData()
        .then(data => {
          return data[0]
        })
        .then(obj => commit(TICKER_STELLAR_SET, obj))
      return
    }
    commit(TICKER_STELLAR_SET, obj)
  },
  stellarTickerSet ({ commit }, obj) {
    commit(TICKER_STELLAR_SET, obj)
  },
  stellarTickerErrorSet ({ commit }, obj) {
    commit(TICKER_STELLAR_ERROR_SET, obj)
  },
  transactionSet ({ commit }, obj) {
    if (obj.current) {
      obj.currentHash = obj.current.hash().toString('hex')
      obj.currentXdr = obj.current.toEnvelope().toXDR('base64')
    }
    commit(TRANSACTION_SET, obj)
  },
  transactionDetailsSet ({ commit }, obj) {
    commit(TRANSACTION_DETAILS_SET, obj)
  },
  transactionDetailsErrorSet ({ commit }, obj) {
    commit(TRANSACTION_DETAILS_ERROR_SET, obj)
  },
  transactionStatusUpdate ({ commit }, obj) {
    commit(TRANSACTION_STATUS_UPDATE, obj)
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
