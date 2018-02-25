import constants from '../../constants';
import {formatDecimal7, formatDouble} from '../../utils/formatter';
import {replace} from '../../utils/string';
import {setButtonState} from '../../ui/buttons';
import {toggleValidationFeedback, validateAmount, validatePublicKey, validateTotal, validateTransactionDto} from '../../ui/validate';

import elems from './payment.form.elems';

function setFormValidButtonState(target) {
    var formIsValid = validateTransactionDto(constants.DTO);
    if (formIsValid.result) {
        setButtonState(target, constants.SUBMIT_BUTTON_STATE.NORMAL);
    } else {
        setButtonState(target, constants.SUBMIT_BUTTON_STATE.DISABLED);
    }
};

export function onValidateAmount(e) {
	var amt = e.target.value;
    var formattedAmount = replace(formatDecimal7(amt), ',', '');
	constants.DTO.payment.amount = formattedAmount;
	toggleValidationFeedback(e.target, validateAmount(e.target));
    setFormValidButtonState(elems.submitButton.elem);
};

export function onValidatePublicKey(e) {
	constants.DTO.payment.from = e.target.value;
	toggleValidationFeedback(e.target, validatePublicKey(e.target));
    setFormValidButtonState(elems.submitButton.elem);
};

export function onValidateTotal(e) {
    var total = e.target.value;
    var formattedTotal = replace(formatDouble(total), ',', '');
	constants.DTO.invoice.total = formattedTotal;
    e.target.value = formattedTotal;
	toggleValidationFeedback(e.target, validateTotal(e.target));
    setFormValidButtonState(elems.submitButton.elem);
	constants.CMCCLIENT.fetch();
};