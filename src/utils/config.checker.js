import constants from '../constants';
import sdkHelper from './stellarsdk.helper';

export function validateConfig(options) {
	var result = '';
	return new Promise(function(resolve, reject) {
		// invoice.currency
		if (options.currency && typeof options.currency === 'string' && options.currency !== '') {
			var isCurrencySupported = constants.CURRENCIES.indexOf(options.currency) !== -1;
			if (!isCurrencySupported) {
				result = 'Currency not supported. Allowed currencies: ' + constants.CURRENCIES.join(', ') + ';';
				reject(result);
			}
		}
		// invoice.total
		if (!options.total || isNaN(options.total) || options.total <= 0) {
			result = 'Amount must be numeric and greater than zero';
			reject(result);
		}

		// StellarSdk
		// var _isStellarSdkLoaded = sdkHelper.loadSdk(function() {
		// 	// payment.to
		// 	var isValidDestinationKey = window.StellarSdk.StrKey.isValidEd25519PublicKey(options.destinationKey);
		// 	if (!isValidDestinationKey) {
		// 		result = 'destinationKey is invalid';
		// 		reject(result);
		// 	}
		// 	resolve(result);
		// });

		resolve(result);
	});
};