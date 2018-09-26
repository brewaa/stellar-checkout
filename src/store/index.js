import Vue from 'vue'
import Vuex from 'vuex'
import { clone, merge } from 'lodash-es'

import constants from 'app/constants'
import { cultures } from 'l10n'
import options from 'app/options'

import { setNetwork } from 'utils/stellarsdk.helper'
import { extractStellarLumensTickerData, fetchStellarLumensTickerData } from 'services/stellar.lumens.ticker'
import { randomId } from 'utils/generator'

Vue.use(Vuex)

// TYPES
const ACCOUNT_CONFIRMATION_CLEAR = 'ACCOUNT_CONFIRMATION_CLEAR'
const ACCOUNT_CONFIRMATION_SET = 'ACCOUNT_CONFIRMATION_SET'
const ACCOUNT_CONFIRMATION_ERROR = 'ACCOUNT_CONFIRMATION_ERROR'

const ACCOUNT_FROM_SET = 'ACCOUNT_FROM_SET'
const ACCOUNT_TO_SET = 'ACCOUNT_TO_SET'

const AMOUNT_SET = 'AMOUNT_SET'

const CULTURE_SET = 'CULTURE_SET'
const CURRENCY_SET = 'CURRENCY_SET'

const FEDERATION_CLEAR = 'FEDERATION_CLEAR'
const FEDERATION_SET = 'FEDERATION_SET'
const FEDERATION_ERROR_SET = 'FEDERATION_ERROR_SET'

const LEDGER_ERROR = 'LEDGER_ERROR'
const LEDGER_UPDATE = 'LEDGER_UPDATE'

const PAYMENT_OPTIONS_CLEAR = 'PAYMENT_OPTIONS_CLEAR'
const PAYMENT_OPTIONS_ERROR = 'PAYMENT_OPTIONS_ERROR'
const PAYMENT_OPTIONS_SET = 'PAYMENT_OPTIONS_SET'

const NETWORK_SET = 'NETWORK_SET'

const OPTIONS_SET = 'OPTIONS_SET'

const TICKER_STELLAR_SET = 'TICKER_STELLAR_SET'

const TRANSACTION_SAVE = 'TRANSACTION_SAVE'
const TRANSACTION_ERROR_SAVE = 'TRANSACTION_ERROR_SAVE'
const TRANSACTION_RESULTS_UPDATE = 'TRANSACTION_RESULTS_UPDATE'
const TRANSACTION_STATUS_UPDATE = 'TRANSACTION_STATUS_UPDATE'

const TIMER_EXPIRED = 'TIMER_EXPIRED'
const TIMER_START = 'TIMER_START'
const TIMER_STOP = 'TIMER_STOP'

var federationResponse = {
  account: null,
  complete: false,
  error: null,
  ledgerAppVersion: null,
  ledgerBip32Path: '44\'/148\'/0\'',
  ledgerConfirmed: false,
  ledgerError: null,
  ledgerVerified: false,
  ledgerVerificationInProgress: false,
  publicKey: null,
  stellarAddress: null
}

function toggleFederationComplete (complete) {
  var fed = state.federation
  var accFrom = fed.accountFrom
  var accTo = fed.accountTo
  var isComplete = !fed.error &&
    accFrom.account !== null &&
    accTo.account !== null &&
    complete
  state.federation.complete = isComplete
  if (!isComplete) {
    merge(state.federation, {
      complete: false,
      error: null
    })
    merge(state.accountConfirmation, {
      complete: false,
      error: null
    })
    merge(state.paymentOptions, {
      complete: false,
      error: null,
      method: null
    })
    state.transaction.status = constants.TX_STATUS.federation
  }
}

function toggleAccountConfirmationComplete (complete) {
  state.accountConfirmation.complete = complete
  if (complete) {
    state.transaction.status = constants.TX_STATUS.payment_options
  } else {
    merge(state.accountConfirmation, {
      complete: false,
      error: null
    })
    merge(state.paymentOptions, {
      complete: false,
      error: null,
      method: null
    })
    state.transaction.status = constants.TX_STATUS.account_confirmation
  }
}

// STATE
const state = {
  accountConfirmation: {
    complete: false,
    error: null
  },
  amount: options.amount,
  culture: null,
  cultures: cultures,
  currency: null,
  currencies: constants.CURRENCIES,
  federation: {
    accountFrom: clone(federationResponse),
    accountTo: clone(federationResponse),
    complete: false,
    error: null,
    ledgerAppVersion: null,
    ledgerError: null
  },
  options: options,
  network: constants.NETWORK,
  paymentOptions: {
    complete: false,
    error: null,
    method: null
  },
  ticker: {
    stellar: constants.TICKERS.stellar
  },
  timer: {
    durationInSeconds: 0
  },
  transaction: {
    amount: null,
    asset: function () {
      return window.StellarSdk.Asset.native()
    },
    complete: false,
    error: null,
    hash: null,
    memo: randomId(28),
    memoType: function () {
      return window.StellarSdk.MemoHash
    },
    result: null,
    success: false,
    status: constants.TX_STATUS.federation,
    tx: null,
    xdr: null
  },
  transactionResults: []
}

// MUTATIONS
const mutations = {
  [ACCOUNT_CONFIRMATION_CLEAR] (state, obj) {
    merge(state.accountConfirmation, {
      complete: false,
      error: null
    })
    toggleAccountConfirmationComplete(false)
  },
  [ACCOUNT_CONFIRMATION_SET] (state, obj) {
    merge(state.accountConfirmation, obj)
    toggleAccountConfirmationComplete(obj.complete)
  },
  [ACCOUNT_CONFIRMATION_ERROR] (state, obj) {
    state.accountConfirmation.error = obj
  },
  [ACCOUNT_FROM_SET] (state, obj) {
    merge(state.federation.accountFrom, obj)
    toggleFederationComplete(obj.complete)
  },
  [ACCOUNT_TO_SET] (state, obj) {
    merge(state.federation.accountTo, obj)
    toggleFederationComplete(obj.complete)
  },
  [AMOUNT_SET] (state, obj) {
    state.amount = obj
  },
  [CULTURE_SET] (state, obj) {
    state.culture = obj
  },
  [CURRENCY_SET] (state, obj) {
    state.currency = obj
  },
  [FEDERATION_CLEAR] (state, obj) {
    merge(state.federation, {
      complete: false,
      error: null
    })
    toggleFederationComplete(false)
  },
  [FEDERATION_SET] (state, obj) {
    merge(state.federation, obj)
    toggleFederationComplete(obj.complete)
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
  },
  [PAYMENT_OPTIONS_SET] (state, obj) {
    merge(state.paymentOptions, obj)
    if (obj.complete) {
      switch (obj.method) {
        case 'byo':
        case 'ledger':
          state.transaction.status = constants.TX_STATUS.ledger_confirmation_required
          break
        case 'tx_signer':
          state.transaction.status = constants.TX_STATUS.listening_for_transaction
          break
        default:
          state.transaction.status = constants.TX_STATUS.payment_options
          break
      }
    } else {
      merge(state.paymentOptions, {
        complete: false,
        error: null,
        method: null
      })
      state.transaction.status = constants.TX_STATUS.payment_options
    }
  },
  [PAYMENT_OPTIONS_ERROR] (state, obj) {
    state.paymentOptions.error = obj
  },
  [NETWORK_SET] (state, obj) {
    var network = setNetwork(obj.name, obj.uri, obj.passphrase)
    state.network = network
  },
  [OPTIONS_SET] (state, obj) {
    merge(state.options, obj)
  },
  [TICKER_STELLAR_SET] (state, obj) {
    var data = obj.data
    if (data.length > 0) {
      state.ticker.stellar.counter++
      state.ticker.stellar.data = data[0]
      state.ticker.stellar.updated = new Date(Date.now())
      var meta = extractStellarLumensTickerData(state.amount, state.currency, data[0])
      merge(state.ticker.stellar.meta, meta)
      state.transaction.amount = meta.amount
    }
  },
  [TIMER_EXPIRED] (state, obj) {
    state.timer.durationInSeconds = 0
    merge(state.paymentOptions, {
      complete: false,
      error: 'Error: Timer has expired. The allowed time to complete the transaction has expired.',
      method: null
    })
  },
  [TIMER_START] (state, obj) {
    state.timer.durationInSeconds = 300
  },
  [TIMER_STOP] (state, obj) {
    state.timer.durationInSeconds = 0
  },
  [TRANSACTION_SAVE] (state, obj) {
    merge(state.transaction, obj)
  },
  [TRANSACTION_ERROR_SAVE] (state, obj) {
    state.transaction.error = obj
  },
  [TRANSACTION_RESULTS_UPDATE] (state, obj) {
    state.transactionResults.push(obj)
  },
  [TRANSACTION_STATUS_UPDATE] (state, obj) {
    state.transaction.status = obj
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
  accountFromSet ({ commit }, obj) {
    commit(ACCOUNT_FROM_SET, obj)
  },
  accountToSet ({ commit }, obj) {
    commit(ACCOUNT_TO_SET, obj)
  },
  amountSet ({ commit }, obj) {
    commit(AMOUNT_SET, obj)
  },
  cultureSet ({ commit }, obj) {
    commit(CULTURE_SET, obj)
  },
  currencySet ({ commit }, obj) {
    commit(CURRENCY_SET, obj)
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
  optionsSet ({ commit }, obj) {
    commit(OPTIONS_SET, obj)
  },
  stellarTickerUpdate ({ commit, state }, obj) {
    return new Promise(function (resolve, reject) {
      if (!obj) {
        fetchStellarLumensTickerData(state.currency)
          .then(response => {
            commit(TICKER_STELLAR_SET, response)
            resolve(response)
          })
          .catch(e => {
            state.ticker.stellar.error = e
            reject(e)
          })
        return
      }
      commit(TICKER_STELLAR_SET, obj)
      resolve(obj)
    })
  },
  stellarTickerSet ({ commit }, obj) {
    commit(TICKER_STELLAR_SET, obj)
  },
  timerExpired ({ commit }, obj) {
    commit(TIMER_EXPIRED, obj)
  },
  timerStart ({ commit }, obj) {
    commit(TIMER_START, obj)
  },
  timerStop ({ commit }, obj) {
    commit(TIMER_STOP, obj)
  },
  transactionSave ({ commit }, obj) {
    if (obj.tx) {
      obj.hash = obj.tx.hash().toString('hex')
      obj.xdr = obj.tx.toEnvelope().toXDR('base64')
    }
    commit(TRANSACTION_SAVE, obj)
  },
  transactionErrorSave ({ commit }, obj) {
    commit(TRANSACTION_ERROR_SAVE, obj)
  },
  transactionResultsUpdate ({ commit }, obj) {
    commit(TRANSACTION_RESULTS_UPDATE, obj)
  },
  transactionStatusUpdate ({ commit }, obj) {
    commit(TRANSACTION_STATUS_UPDATE, obj)
  }
})

// GETTERS
const getters = ({
  amount: (state) => {
    return state.amount
  },
  culture: (state) => {
    return state.culture
  },
  currency: (state) => {
    return state.currency
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
