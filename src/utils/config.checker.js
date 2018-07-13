<<<<<<< HEAD
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

function checkTo (to) {
  return new Promise(function (resolve, reject) {
    if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(to)) {
      reject(new Error(constants.APP.name + ': [to] is not a valid destination public key;'))
    }
    resolve(true)
  })
};

function checkCulture (options) {
  var lang = options.lang || ''
  var errMsg = constants.APP.name + ': [lang] not supported. falling back to \'en\'. allowed cultures: ' + cultures.join(', ') + ';'
  return new Promise(function (resolve, reject) {
    var culturesLowerCase = cultures.map(function (value) {
      return value.toLowerCase()
    })
    if (typeof lang === 'string' && lang.length > 0 && culturesLowerCase.indexOf(lang.toLowerCase()) === -1) {
      console.log(errMsg)
      options.lang = constants.SETTINGS.culture
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
        checkTo(options.to),
        checkCulture(options),
        checkMemo(options.memo),
        checkOnSubmit(options.onSubmit),
        checkTotal(options.total)
      ])
    })
};
=======
import constants from '../constants';
import {cultures} from '../l10n';
import elems from '../ui/elems';
import loader from './loader';
import sdkHelper from './stellarsdk.helper';

function checkCurrency(currency) {
	return new Promise(function(resolve, reject) {
		if (!currency) {
			reject(new Error('currency is required'));
		}
		if (typeof currency !== 'string') {
			reject(new Error('currency must be a string'));
		}
		if (currency === '') {
			reject(new Error('currency is required'));
		}
		if (constants.CURRENCIES.indexOf(currency) === -1) {
			reject(new Error(constants.APP.name + '; currency not supported. allowed currencies: ' + constants.CURRENCIES.join(', ') + ';'));
		}
		resolve(true);
	});
};

function checkDestinationKey(destinationKey) {
	return new Promise(function(resolve, reject) {
		if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(destinationKey)) {
			reject(new Error(constants.APP.name + ': destinationKey is invalid;'));
		}
		resolve(true);
	});
};

function checkLang(lang) {
	return new Promise(function(resolve, reject) {
		if (lang && typeof lang !== 'string') {
			reject('lang must be a string');
		}
		var culturesLowerCase = cultures.map(function(value) {
			return value.toLowerCase();
		});
		if (culturesLowerCase.indexOf(lang.toLowerCase()) === -1) {
			console.log(constants.APP.name + ': lang not supported. falling back to \'en\'. allowed cultures: ' + cultures.join(', ') + ';');
		}
		resolve(true);
	});
};

function checkMemo(memo) {
	return new Promise(function(resolve, reject) {
		if (memo && typeof memo !== 'string') {
			reject(constants.APP.name + ': memo field must be a string;');
		}
		resolve(true);
	});
};

function checkOnSubmit(onSubmit) {
	return new Promise(function(resolve, reject) {
		if (onSubmit && typeof onSubmit !== 'function') {
			reject(new Error(constants.APP.name + ': onSubmit must be a function;'));
		}
		resolve(true);
	});
};

function checkSelector(selector) {
	return new Promise(function(resolve, reject) {
		var targetElem = document.querySelector(selector);
		if (!targetElem) {
			reject(new Error(constants.APP.name + ': selector not found;'));
			return;
		}
		elems.targetElem.elem = targetElem;
		elems.targetElem.selector = selector;
		resolve(true);
	});
};

function checkStyleSheet(stylesheet) {
	return new Promise(function(resolve, reject) {
		if (stylesheet && typeof stylesheet !== 'string') {
			reject(new Error(constants.APP.name + ': stylesheet must be a string;'));
		}
		if (stylesheet) {
			return new loader.css(stylesheet);
		}
		resolve(true);
	});
};

function checkTotal(total) {
	return new Promise(function(resolve, reject) {
		if (!total) {
			reject(new Error(constants.APP.name + ': total is required;'));
		}
		if (isNaN(total)) {
			reject(new Error(constants.APP.name + ': total must be numeric;'));
		}
		if (total <= 0) {
			reject(new Error(constants.APP.name + ': total must be greater than zero;'));
		}
		resolve(true);
	});
};

export function validateConfig(options) {
	return loader.js(constants.STELLAR_SDK_URL)
		.then(checkStyleSheet(options.stylesheet))
		.then(function() {
		return Promise.all([
			checkSelector(options.selector),
			checkCurrency(options.currency),
			checkDestinationKey(options.destinationKey),
			checkLang(options.lang),
			checkMemo(options.memo),
			checkOnSubmit(options.onSubmit),
			checkTotal(options.total)
		]);
	});
};
>>>>>>> parent of a4b59fd... no message
