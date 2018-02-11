import constants from './constants';
import elems from './ui/elems';
import {Err} from './utils/error';
import sdkHelper from './utils/stellarsdk.helper';
import ui from './ui';
import {useRedirectUrl} from './utils/url';
import {validateTransactionDto} from './ui/validate';

import {setButtonState} from './ui/buttons';
import {showPaymentError} from './ui/payment.error';
import {showPaymentComplete} from './ui/payment.complete';
import {createPaymentAwaitingTemplate, showPaymentAwaitingProgress} from './ui/payment.awaiting';

export function init(selector, options) {

	var isValidDestinationKey = window.StellarSdk.StrKey.isValidEd25519PublicKey(options.destinationKey);
	if (!isValidDestinationKey) {
		console.log(new Err('destinationKey is invalid').toString());
		return;
	}

	var dto = sdkHelper.createDto(options);

	options.elem = ui.create(selector, options);

	ui.createSubmitHandler(function(e) {

		// Final sanity check for valid form
		var isValid = validateTransactionDto(dto);
		if (!isValid.result) {
			setButtonState(elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.DISABLED);
			return;
		}

		if (!constants.MODE.secure) {

			// Submit the transaction to the stellar network (using private seed)
			var result = sdkHelper
			.sendPayment(dto)
			.then(function(result) {

				console.log(result);
				// Show success feedback
				setButtonState(elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.PAYMENT_COMPLETE);

				// Send to success page if the simple redirect feature is configured
				useRedirectUrl(options, result);

				// Call the onSubmit callback
				if (options.onSubmit && typeof options.onSubmit === 'function') {
					options.onSubmit.call(this, null, result);	
				}
				else {
					showPaymentComplete();
				}
			})
			.catch(function(error) {
				// Send the error back to the onSubmit call back (error-first)
				showPaymentError(error);
				console.log(error);
				options.onSubmit.call(this, error);
			});

		} else {

			createPaymentAwaitingTemplate(dto);
			// Watch for transactions sent to the destinationKey
			sdkHelper.receivePayment(dto, function(err, result) {
				if (err) {
					options.onSubmit.call(this, err);
					return;	
				}
				showPaymentAwaitingProgress(result)
				.then(function() {
					useRedirectUrl(options, result);
					if (options.onSubmit && typeof options.onSubmit === 'function') {
						options.onSubmit.call(this, null, result);
					}
					else {
						showPaymentComplete();
					}
				});
			});

		}
		
	});
};