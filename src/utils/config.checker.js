import constants from '../constants';
import loader from './loader';
import sdkHelper from './stellarsdk.helper';

function checkCurrency(currency) {
	return new Promise(function(resolve, reject) {
		if (!currency) {
			reject('currency is required');
		}
		if (typeof currency !== 'string') {
			reject('currency must be a string');
		}
		if (currency === '') {
			reject('currency is required');
		}
		if (constants.CURRENCIES.indexOf(currency) === -1) {
			reject('currency not supported. allowed currencies: ' + constants.CURRENCIES.join(', ') + ';');
		}
		resolve(true);
	});
};

function checkDestinationKey(destinationKey) {
	return new Promise(function(resolve, reject) {
		if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(destinationKey)) {
			reject('destinationKey is invalid');
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
			reject('onSubmit must be a function');
		}
		resolve(true);
	});
};

function checkStyleSheet(stylesheet) {
	return new Promise(function(resolve, reject) {
		if (stylesheet && typeof stylesheet !== 'string') {
			reject('stylesheet must be a string');
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
			reject('total is required');
		}
		if (isNaN(total)) {
			reject('total must be numeric');
		}
		if (total <= 0) {
			reject('total must be greater than zero');
		}
		resolve(true);
	});
};

export function validateConfig(options) {
	return sdkHelper.loadSdk()
		.then(checkStyleSheet(options.stylesheet))
		.then(function() {
		return Promise.all([
			checkCurrency(options.currency),
			checkDestinationKey(options.destinationKey),
			checkMemo(options.memo),
			checkOnSubmit(options.onSubmit),
			checkTotal(options.total)
		]);
	});
};