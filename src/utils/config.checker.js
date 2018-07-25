import constants from 'app/constants'
import {cultures} from 'l10n'
import loader from './loader'

function checkCurrency (options) {
  var currency = options.currency || ''
  return new Promise(function (resolve, reject) {
    if (currency === '' || typeof currency !== 'string' || constants.CURRENCIES.indexOf(currency) === -1) {
      console.log(constants.APP.name + ' [currency] not supported. allowed currencies: ' + constants.CURRENCIES.join(', ') + '')
      options.currency = constants.SETTINGS.currency
    }
    resolve(options)
  })
};

function checkFrom (from) {
  return new Promise(function (resolve, reject) {
    if (from && typeof from !== 'string' && !window.StellarSdk.StrKey.isValidEd25519PublicKey(from)) {
      console.log(constants.APP.name + ': [from] is not a valid public key;')
    }
    resolve(true)
  })
};

function checkTo (to) {
  return new Promise(function (resolve, reject) {
    if (to && typeof to !== 'string' && !window.StellarSdk.StrKey.isValidEd25519PublicKey(to)) {
      reject(new Error(constants.APP.name + ': [to] is not a valid destination public key;'))
    }
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

function checkMemo (memo) {
  return new Promise(function (resolve, reject) {
    if (memo && typeof memo !== 'string') {
      reject(new Error(constants.APP.name + ': [memo] field must be a string;'))
    }
    resolve(true)
  })
};

function checkOnSubmit (onSubmit) {
  return new Promise(function (resolve, reject) {
    if (onSubmit && typeof onSubmit !== 'function') {
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
    resolve(options)
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

function checkTotal (total) {
  return new Promise(function (resolve, reject) {
    if (!total) {
      reject(new Error(constants.APP.name + ': [total] is required;'))
    }
    if (isNaN(total)) {
      reject(new Error(constants.APP.name + ': [total] must be numeric;'))
    }
    if (total <= 0) {
      reject(new Error(constants.APP.name + ': [total] must be greater than zero;'))
    }
    resolve(true)
  })
};

export function validateConfig (options) {
  return loader.Js(constants.STELLAR_SDK_URL)
    .then(checkStyleSheet(options.stylesheet))
    .then(function () {
      return Promise.all([
        checkSelector(options),
        checkCurrency(options),
        checkFrom(options.from),
        checkTo(options.to),
        checkCulture(options),
        checkMemo(options.memo),
        checkOnSubmit(options.onSubmit),
        checkTotal(options.total)
      ])
    })
};
