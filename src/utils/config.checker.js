import constants from 'app/constants'
import {cultures} from 'l10n'
import loader from './loader'

function checkAmount (options) {
  var amount = options.amount
  return new Promise(function (resolve, reject) {
    // if (!amount) {
    //   reject(new Error(constants.APP.name + ': [amount] is required;'))
    // }
    if (amount && isNaN(amount)) {
      reject(new Error(constants.APP.name + ': [amount] must be numeric;'))
    }
    // if (amount && amount <= 0) {
    //   reject(new Error(constants.APP.name + ': [amount] must be greater than zero;'))
    // }
    resolve(true)
  })
};

function checkCulture (options) {
  var lang = options.culture || ''
  var errMsg = constants.APP.name + ': [culture] not supported. falling back to \'en\'. allowed cultures: ' + cultures.join(', ') + ';'
  return new Promise(function (resolve, reject) {
    var culturesLowerCase = cultures.map(function (value) {
      return value.toLowerCase()
    })
    if (typeof lang === 'string' && lang.length > 0 && culturesLowerCase.indexOf(lang.toLowerCase()) === -1) {
      console.log(errMsg)
      options.culture = 'en'
    }
    resolve(true)
  })
};

function checkCurrency (options) {
  var currency = options.currency || ''
  return new Promise(function (resolve, reject) {
    if (typeof currency !== 'string' || currency === '') {
      console.log(constants.APP.name + ' [currency] not supplied. Default currency is USD.')
      options.currency = 'USD'
    }
    if (typeof currency === 'string' && currency.length > 0 && constants.CURRENCIES.indexOf(currency) === -1) {
      console.log(constants.APP.name + ' [currency] not supported. allowed currencies: ' + constants.CURRENCIES.join(', ') + '')
      options.currency = 'USD'
    }
    resolve(true)
  })
};

function checkFrom (options) {
  var from = options.from
  return new Promise(function (resolve, reject) {
    if (from && typeof from !== 'string' && !window.StellarSdk.StrKey.isValidEd25519PublicKey(from)) {
      console.log(constants.APP.name + ': [from] is not a valid public key;')
    }
    resolve(true)
  })
};

function checkNetwork (options) {
  return new Promise(function (resolve, reject) {
    var network = options.network || 'test'
    var networkUri = options.networkUri
    var networkPassphrase = options.networkPassphrase
    var networks = [
      'custom',
      'public',
      'test'
    ]
    var fallbackTxt = 'falling back to [test] network'
    if (typeof network !== 'string' || networks.indexOf(network) === -1) {
      console.log(`${constants.APP.name}: [network] unsupported; allowed networks: ${networks.join(', ')}; ${fallbackTxt}`)
    }
    if (typeof network === 'string' && network === 'custom') {
      if (!networkUri || typeof networkUri !== 'string') {
        console.log(`${constants.APP.name}: [networkUri] is required for custom networks; ${fallbackTxt}`)
      }
      if (!networkPassphrase || typeof networkPassphrase !== 'string') {
        console.log(`${constants.APP.name}: [networkPassphrase] is required for custom networks; ${fallbackTxt}`)
      }
    }
    resolve(true)
  })
};

function checkOnSubmit (options) {
  var f = options.onSubmit
  return new Promise(function (resolve, reject) {
    if (f && typeof f !== 'function') {
      reject(new Error(constants.APP.name + ': [onSubmit] must be a function;'))
    }
    resolve(true)
  })
};

function checkSelector (options) {
  return new Promise(function (resolve, reject) {
    var selector = options.selector
    var targetElem = document.querySelector(selector)
    if (!targetElem) {
      reject(new Error(constants.APP.name + ': [selector] not found;'))
      return
    }
    resolve(true)
  })
};

function checkStyleSheet (stylesheet) {
  return new Promise(function (resolve, reject) {
    if (stylesheet && typeof stylesheet !== 'string') {
      reject(new Error(constants.APP.name + ': [stylesheet] must be a string;'))
    }
    if (stylesheet) {
      return new loader.Css(stylesheet)
    }
    resolve(true)
  })
};

function checkTo (options) {
  var to = options.to
  return new Promise(function (resolve, reject) {
    if (to && typeof to !== 'string' && !window.StellarSdk.StrKey.isValidEd25519PublicKey(to)) {
      // reject(new Error(constants.APP.name + ': [to] is not a valid destination public key;'))
      console.log(constants.APP.name + ': [to] is not a valid public key;')
    }
    resolve(true)
  })
};

export function validateConfig (options) {
  return loader.Js(constants.STELLAR_SDK_URL)
    .then(checkStyleSheet(options.stylesheet))
    .then(function () {
      return Promise.all([
        checkAmount(options),
        checkSelector(options),
        checkCurrency(options),
        checkFrom(options),
        checkNetwork(options),
        checkTo(options),
        checkCulture(options),
        checkOnSubmit(options)
      ])
    })
}
