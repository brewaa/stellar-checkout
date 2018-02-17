import constants from '../constants';
import formatter from '../utils/formatter';
import {toggleValidationFeedback, validateAmount, validatePublicKey, validateTotal} from './validate';
import {replace} from '../utils/string';

export function onValidateAmount(e) {
	var amt = e.target.value;
	var formattedAmount = replace(formatter.format(formatter.FORMATS.DECIMAL7, amt), ',', '');
	constants.DTO.payment.amount = formattedAmount;
	toggleValidationFeedback(e.target, validateAmount());
};

export function onValidatePublicKey(e) {
	constants.DTO.payment.from = e.target.value;
	toggleValidationFeedback(e.target, validatePublicKey(e.target.value));
};

export function onValidateTotal(e) {
	constants.DTO.invoice.total = e.target.value;
	toggleValidationFeedback(e.target, validateTotal());
	constants.CMCCLIENT.fetch();
};