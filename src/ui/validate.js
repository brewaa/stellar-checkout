import {setButtonState} from './buttons';
import constants from '../constants';
import elems from './elems';
import {Err} from '../utils/error';

export function toggleValidationFeedback(target, test) {
	if (!test.result) {
		target.parentNode.classList.remove('valid');
		target.parentNode.classList.add('error');
		target.parentNode.querySelector('.error_msg').innerHTML = test.errors[0].msg;
	} else {
		target.parentNode.classList.add('valid');
		target.parentNode.classList.remove('error');
		target.parentNode.querySelector('.error_msg').innerHTML = '';
	}
	var formIsValid = validateTransactionDto(constants.DTO);
	if (formIsValid.result) {
		setButtonState(elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.NORMAL);
	} else {
		setButtonState(elems.submitButton.elem, constants.SUBMIT_BUTTON_STATE.DISABLED);
	}
};

export function validateAmount() {
	var result = {
		errors: [],
		result: true
	};
	var amt = constants.DTO.payment.amount;
	if (isNaN(amt)) {
		result.errors.push(new Err('amount is not a number', elems.amount));
		result.result = false;
	}
	if (amt <= 0) {
		result.errors.push(new Err('amount must be greater than zero', elems.amount));
		result.result = false;
	}
	return result;
};

export function validatePrivateSeed() {
	var result = {
		errors: [],
		result: true
	};
	var key = constants.DTO.privateSeed;
	if (!key || !window.StellarSdk.StrKey.isValidEd25519SecretSeed(key)) {
		result.errors.push(new Err('private seed is invalid', elems.privateSeed));
		result.result = false;
	}
	return result;
};

export function validatePublicKey(key) {
	var result = {
		errors: [],
		result: true
	};
	if (!key || !window.StellarSdk.StrKey.isValidEd25519PublicKey(key)) {
		result.errors.push(new Err('public key is invalid'));
		result.result = false;
	}
	return result;
};

export function validateTotal() {
	var result = {
		errors: [],
		result: true
	};
	var total = constants.DTO.invoice.total;
	if (isNaN(total)) {
		result.errors.push(new Err('total is not a number', elems.total));
		result.result = false;
	}
	if (total <= 0) {
		result.errors.push(new Err('total must be greater than zero', elems.total));
		result.result = false;
	}
	return result;
};

export function validateTransactionDto() {
	var result = {
		errors: [],
		result: true
	};

	var dto = constants.DTO;

	var a = validateAmount(dto.payment.amount);
	result.result = result.result && a.result;
	result.errors = [...result.errors,...a.errors];

	// asset

	// publicKey OR privateSeed
	if (constants.MODE.secure) {
		var b = validatePublicKey(dto.payment.from);
		result.result = result.result && b.result;
		result.errors = [...result.errors,...b.errors];
	} else {
		var b = validatePrivateSeed(dto.privateSeed);
		result.result = result.result && b.result;
		result.errors = [...result.errors,...b.errors];
	}

	//destinationKey
	var c = validatePublicKey(dto.payment.to);
	result.result = result.result && c.result;
	result.errors = [...result.errors,...c.errors];

	// memo

	// env

	return result;
};