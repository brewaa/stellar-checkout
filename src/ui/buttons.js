import constants from '../constants';

export function setButtonState(target, state)  {
	switch(state) {
		case constants.SUBMIT_BUTTON_STATE.DISABLED:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = 'Enter payment info';
			break;
		case constants.SUBMIT_BUTTON_STATE.NORMAL:
			target.removeAttribute('disabled');
			target.innerHTML = 'Send payment';
			break;
		case constants.SUBMIT_BUTTON_STATE.IN_PROGRESS:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = 'Confirming transaction...';
			break;
		case constants.SUBMIT_BUTTON_STATE.PAYMENT_COMPLETE:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = 'Payment complete';
			break;
		default:
			break;
	}
};