import constants from '../constants';
import {ValidationMessage} from './validationMessage';

export function toggleValidationFeedback(target, test) {
	var elemErrMsg = target.parentNode.querySelector(constants.SELECTOR.fieldErrorMessage);
	var parentNode = target.parentNode;
	if (!test.result) {
		parentNode.classList.remove(constants.CLASS.valid);
		parentNode.classList.add(constants.CLASS.error);
		elemErrMsg.innerHTML = test.errors[0].msg;
	} else {
		parentNode.classList.add(constants.CLASS.valid);
		parentNode.classList.remove(constants.CLASS.error);
		elemErrMsg.innerHTML = '';
	}
};

export function validateAmount(target) {
	var result = {
		errors: [],
		result: true
	};
	var amt = constants.DTO.payment.amount;
	if (isNaN(amt)) {
		result.errors.push(new ValidationMessage('amount is not a number', target));
		result.result = false;
	}
	if (amt <= 0) {
		result.errors.push(new ValidationMessage('amount must be greater than zero', target));
		result.result = false;
	}
	return result;
};

export function validatePublicKey(target) {
	var result = {
		errors: [],
		result: true
	};
	var key = constants.DTO.payment.from;
	if (!key || !window.StellarSdk.StrKey.isValidEd25519PublicKey(key)) {
		result.errors.push(new ValidationMessage('public key is invalid'), target);
		result.result = false;
	}
	return result;
};

export function validateTotal(target) {
	var result = {
		errors: [],
		result: true
	};
	var total = constants.DTO.invoice.total;
	if (isNaN(total)) {
		result.errors.push(new ValidationMessage('total is not a number', target));
		result.result = false;
	}
	if (total <= 0) {
		result.errors.push(new ValidationMessage('total must be greater than zero', target));
		result.result = false;
	}
	return result;
};

export function validateTransactionDto(target) {
	var result = {
		errors: [],
		result: true
	};

	var dto = constants.DTO;

	var a = validateAmount(dto.payment.amount);
	result.result = result.result && a.result;
	result.errors = [...result.errors,...a.errors];

	// asset

	// publicKey
	var b = validatePublicKey(dto.payment.from);
	result.result = result.result && b.result;
	result.errors = [...result.errors,...b.errors];

	//destinationKey
	var c = validatePublicKey(dto.payment.to);
	result.result = result.result && c.result;
	result.errors = [...result.errors,...c.errors];

	// memo

	// env

	return result;
};