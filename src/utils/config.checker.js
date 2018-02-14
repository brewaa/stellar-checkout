import constants from '../constants';
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
			reject(new Error('currency not supported. allowed currencies: ' + constants.CURRENCIES.join(', ') + ';'));
		}
		resolve(true);
	});
};

function checkDestinationKey(destinationKey) {
	return new Promise(function(resolve, reject) {
		if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(destinationKey)) {
			reject(new Error('destinationKey is invalid'));
		}
		resolve(true);
	});
};

function checkMemo(memo) {
	return new Promise(function(resolve, reject) {
		// todo: workout validation of memo field
		resolve(true);
	});
};

function checkOnSubmit(onSubmit) {
	return new Promise(function(resolve, reject) {
		if (onSubmit && typeof onSubmit !== 'function') {
			reject(new Error('onSubmit must be a function'));
		}
		resolve(true);
	});
};

function checkSelector(selector) {
	return new Promise(function(resolve, reject) {
		var targetElem = document.querySelector(selector);
		if (!targetElem) {
			reject(new Error('selector not found'));
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
			reject(new Error('stylesheet must be a string'));
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
			reject(new Error('total is required'));
		}
		if (isNaN(total)) {
			reject(new Error('total must be numeric'));
		}
		if (total <= 0) {
			reject(new Error('total must be greater than zero'));
		}
		resolve(true);
	});
};

export function validateConfig(options) {
	return loader.js(constants.STELLAR_SDK_URL) //sdkHelper.loadSdk()
		.then(checkStyleSheet(options.stylesheet))
		.then(function() {
		return Promise.all([
			checkSelector(options.selector),
			checkCurrency(options.currency),
			checkDestinationKey(options.destinationKey),
			checkMemo(options.memo),
			checkOnSubmit(options.onSubmit),
			checkTotal(options.total)
		]);
	});
};