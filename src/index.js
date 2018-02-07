import constants from './constants';
import formatter from './formatter';
import stellarSdkHelper from './stellarsdk.helper';
import ui from './ui';
import * as utils from './utils';

export default {
	name: constants.APP_NAME,
	ui: {
		render: function(selector, opts) {
			this.selector = selector;
			this.options = {};
			this.options.currency = opts.currency;
			this.options.elem = null;
			this.options.endpointTickerUrl = opts.endpointTickerUrl || constants.STELLAR_CHECKOUT_API_TICKER_URL;
			this.options.env = opts.env || 'development';
			this.options.memo = opts.memo;
			this.options.destinationKey = opts.destinationKey;
			this.options.redirectUrl = opts.redirectUrl;
			this.options.total = opts.total;
			this.options.onSubmit = opts.onSubmit;

			var self = this,
			_isCurrencySupported = false,
			_isStellarSdkLoaded = false,
			_isValidDestinationKey = false;

			_isStellarSdkLoaded = stellarSdkHelper.loadStellarSdk(function() {

				var dto = stellarSdkHelper.createTransactionDto(self.options);

				_isCurrencySupported = constants.CURRENCIES.indexOf(self.options.currency) !== -1;
				if (!_isCurrencySupported) {
					constants.CONFIG.error = true;
					constants.CONFIG.message = 'Currency not supported. Allowed currencies: ' + constants.CURRENCIES.join(', ');
				}

				_isValidDestinationKey = ui.validatePublicKey(self.options.destinationKey);
				if (!_isValidDestinationKey.result) {
					constants.CONFIG.error = true;
					constants.CONFIG.message = 'destinationKey is invalid';
				}

				self.options.elem = ui.create(self.selector, self.options);

				ui.createSubmitHandler(function(e) {

					// Final sanity check for valid form
					var isValid = ui.validateTransactionDto(dto);
					if (!isValid.result) {
						ui.setButtonState(ui.elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.DISABLED);
						return;
					}

					if (!constants.MODE.secure) {
						// Submit the transaction to the stellar network (using private seed)
						var result = stellarSdkHelper
						.submitTransaction(dto)
						.then(function(result) {

							console.log(result);
							// Show success feedback
							ui.setButtonState(ui.elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.PAYMENT_COMPLETE);

							// Send to success page if the simple redirect feature is configured
							utils.redirectIfRedirectUrlConfigured(self.options, result);

							// Call the onSubmit callback
							self.options.onSubmit.call(this, null, result);
						})
						.catch(function(error) {
							// Send the error back to the onSubmit call back (error-first)
							ui.showError(error);
							console.log(error);
							self.options.onSubmit.call(this, error);
						});
					} else {
						ui.createProgressHtml(dto);

						// Watch for transactions sent to the destinationKey
						stellarSdkHelper.receiveTransaction(dto, function(err, result) {
							if (err) {
								self.options.onSubmit.call(this, err);
								return;	
							}
							ui.updateProgressHtml(result);
							utils.redirectIfRedirectUrlConfigured(self.options, result);
							self.options.onSubmit.call(this, null, result);
						});
					}
				});
			});
		}
	}
};