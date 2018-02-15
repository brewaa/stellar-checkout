import constants from '../constants';
import {toggleValidationFeedback, validateAmount, validatePrivateSeed, validatePublicKey, validateTotal} from './validate';

export function onValidateAmount(e) {
	constants.DTO.payment.amount = e.target.value;
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