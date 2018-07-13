import constants from '../constants';
import l10n from '../l10n';

export function setButtonState(target, state)  {
	var l = l10n.localizer;
	switch(state) {
		case constants.SUBMIT_BUTTON_STATE.DISABLED:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = l.localize('buttonStateDisabled', 'Enter payment info');
			break;
		case constants.SUBMIT_BUTTON_STATE.NORMAL:
			target.removeAttribute('disabled');
			target.innerHTML = l.localize('buttonStateNormal', 'Send payment');
			break;
		case constants.SUBMIT_BUTTON_STATE.IN_PROGRESS:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = l.localize('buttonStateInProgress', 'Confirming transaction...');
			break;
		case constants.SUBMIT_BUTTON_STATE.PAYMENT_COMPLETE:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = l.localize('buttonStatePaymentComplete', 'Payment complete');
			break;
		default:
			break;
	}
};