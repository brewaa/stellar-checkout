import {validateConfig} from './utils/config.checker';
import constants from './constants';
import {Err} from './utils/error';
import sdkHelper from './utils/stellarsdk.helper';
import ui from './ui';
import {useRedirectUrl} from './utils/url';

function init(selector, options) {

	var isValidDestinationKey = window.StellarSdk.StrKey.isValidEd25519PublicKey(options.destinationKey);
	if (!isValidDestinationKey) {
		console.log(new Err('destinationKey is invalid').toString());
		return;
	}

	var dto = sdkHelper.createDto(options);

	options.elem = ui.create(selector, options);

	ui.createSubmitHandler(function(e) {

		// Final sanity check for valid form
		var isValid = ui.validateTransactionDto(dto);
		if (!isValid.result) {
			ui.setButtonState(ui.elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.DISABLED);
			return;
		}

		if (!constants.MODE.secure) {

			// Submit the transaction to the stellar network (using private seed)
			var result = sdkHelper
			.sendPayment(dto)
			.then(function(result) {

				console.log(result);
				// Show success feedback
				ui.setButtonState(ui.elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.PAYMENT_COMPLETE);

				// Send to success page if the simple redirect feature is configured
				useRedirectUrl(options, result);

				// Call the onSubmit callback
				if (options.onSubmit && typeof options.onSubmit === 'function') {
					options.onSubmit.call(this, null, result);	
				}
				else {
					ui.showSuccess();
				}
			})
			.catch(function(error) {
				// Send the error back to the onSubmit call back (error-first)
				ui.showError(error);
				console.log(error);
				options.onSubmit.call(this, error);
			});

		} else {

			ui.createProgressHtml(dto);
			// Watch for transactions sent to the destinationKey
			sdkHelper.receivePayment(dto, function(err, result) {
				if (err) {
					options.onSubmit.call(this, err);
					return;	
				}
				ui.updateProgressHtml(result)
				.then(function() {
					useRedirectUrl(options, result);
					if (options.onSubmit && typeof options.onSubmit === 'function') {
						options.onSubmit.call(this, null, result);
					}
					else {
						ui.showSuccess();
					}
				});
			});

		}
		
	});
}

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

			var self = this;

			validateConfig(this.options)
			.catch(function(error) {
				console.log(constants.APP.name + ' CONFIGURATION_ERROR');
				console.log(new Err(error).toString());
			})
			.then(function() {
				sdkHelper.loadSdk(function() {
					init(selector, self.options);
				});	
			});
		}
	}
};