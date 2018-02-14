import constants from './constants';
import elems from './ui/elems';
import sdkHelper from './utils/stellarsdk.helper';
import ui from './ui';
import {useRedirectUrl} from './utils/url';
import {validateTransactionDto} from './ui/validate';

import {setButtonState} from './ui/buttons';
import {showPaymentError} from './ui/payment.error';
import {showPaymentComplete} from './ui/payment.complete';
import {createPaymentAwaitingTemplate, showPaymentAwaitingProgress} from './ui/payment.awaiting';

export function init(options) {

	var dto = sdkHelper.createDto(options);

	ui.create(options);

	ui.createSubmitHandler(function(e) {

		// Final sanity check for valid form
		var isValid = validateTransactionDto(dto);
		if (!isValid.result) {
			setButtonState(elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.DISABLED);
			return;
		}

		// Show the awaiting payment page
		createPaymentAwaitingTemplate(dto);
		
		// Watch for transactions sent to the destinationKey
		sdkHelper.receivePayment(dto, function(err, result) {
			// Handle error
			if (err) {
				// Pass error to onSubmit callback
				if (options.onSubmit && typeof options.onSubmit === 'function') {
					options.onSubmit.call(this, err);
				}
				return;	
			}
			// Show payment verification feedback
			showPaymentAwaitingProgress(result)
			.then(function() {
				if (options.redirectUrl) {
					// Use redirectUrl if configured
					useRedirectUrl(options, result);
				}
				else if (options.onSubmit && typeof options.onSubmit === 'function') {
					// Call the onSubmit callback
					options.onSubmit.call(this, null, result);
				}
				else {
					// Show the payment complete page
					showPaymentComplete();
				}
			});
		});
		
	});
};