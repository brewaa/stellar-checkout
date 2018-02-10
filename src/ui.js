import constants from './constants';
import css from './assets/css/style.css';
import {CoinMarketCapClient} from './services/coinmarketcap.client';
import {Err, ErrObject} from './utils/error';
import friendBotSvg from './assets/i/FriendBot_favicon.svg';
import fonts from './assets/fonts';
import QRCode from 'qrcode';
import template from './templates/template';

var _cmcClient;

var elems = {
	targetElem: {
		selector: '',
		elem: null
	},
	root: {
		selector: '.stellar_checkout',
		elem: null
	},
	header: {
		selector: '.stellar_checkout .header',
		elem: null
	},
	formPanel: {
		selector: '.stellar_checkout_form',
		elem: null
	},
	progressPanel: {
		selector: '.stellar_checkout_progress',
		elem: null
	},
	errorPanel: {
		selector: '.stellar_checkout_error',
		elem: null
	},
	total: {
		selector: '#stellarCheckoutTotal',
		elem: null
	},
	amount: {
		selector: '#stellarCheckoutAmount',
		elem: null
	},
	privateSeed: {
		selector: '#stellarCheckoutPrivateSeed',
		elem: null
	},
	publicKey: {
		selector: '#stellarCheckoutPublicKey',
		elem: null
	},
	submitButton: {
		selector: '#stellarCheckoutSubmitButton',
		elem: null
	}
};

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
};


function create(selector, options) {

	var targetElem = document.querySelector(selector);
	if (!targetElem) {
		console.log(Err('selector not found', constants.MESSAGE_TYPE.ERROR));
	}	

	if (constants.CONFIG.error) {
		var divConfigError = document.createElement('div');
		divConfigError.innerHTML = constants.APP_NAME + ':error:' + constants.CONFIG.message;
		targetElem.appendChild(divConfigError);
		return;
	}

	targetElem.classList.add(constants.CLASS.targetParent);
	
	targetElem.appendChild(createElementFromHTML(template.main));

	var root = document.querySelector(elems.root.selector);
	var header = document.querySelector(elems.header.selector);
	var formPanel = document.querySelector(elems.formPanel.selector);
	var total = document.querySelector(elems.total.selector);
	var amount = document.querySelector(elems.amount.selector);
	var privateSeed = document.querySelector(elems.privateSeed.selector);
	var publicKey = document.querySelector(elems.publicKey.selector);
	var submitButton = document.querySelector(elems.submitButton.selector);
	
	elems.targetElem.elem = targetElem;
	elems.root.elem = root;
	elems.header.elem = header;
	elems.formPanel.elem = formPanel;;
	elems.total.elem = total;
	elems.amount.elem = amount;
	elems.privateSeed.elem = privateSeed;
	elems.publicKey.elem = publicKey;
	elems.submitButton.elem = submitButton;

	_cmcClient = new CoinMarketCapClient(elems.amount.elem, options);

	/* ---- */

	elems.total.elem.addEventListener('blur', onValidateTotal);
	elems.total.elem.addEventListener('input', onValidateTotal);

	elems.amount.elem.addEventListener('blur', onValidateAmount);
	elems.amount.elem.addEventListener('input', onValidateAmount);

	elems.privateSeed.elem.addEventListener('blur', onValidatePrivateSeed);
	elems.privateSeed.elem.addEventListener('input', onValidatePrivateSeed);

	elems.publicKey.elem.addEventListener('blur', onValidatePublicKey);
	elems.publicKey.elem.addEventListener('input', onValidatePublicKey);

	constants.DTO.payment.total = options.total;
	constants.DTO.payment.amount = _cmcClient.priceInLumens;
	constants.DTO.invoice.currency = options.currency;
	constants.DTO.payment.to = options.destinationKey;
	constants.DTO.privateSeed = elems.privateSeed.elem.value; // todo:
	constants.DTO.payment.from = elems.publicKey.elem.value;

	//todo: add a configuration check for options.total
	var hasValidTotal = false;
	var dtoTotal = constants.DTO.invoice.total;
	if (dtoTotal && dtoTotal.length > 0) {
		elems.total.elem.setAttribute('value', dtoTotal);
		elems.total.elem.setAttribute('disabled', 'disabled');
		var currencyLabel = elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.invoice.currency;
		hasValidTotal = true;
		elems.total.elem.dispatchEvent(new Event('input'));
	}

	if (hasValidTotal) {
		_cmcClient.fetch();
	}

	var toggleKeys = document.querySelectorAll('.toggle_keys');
	for (var i = 0, len = toggleKeys.length; i < len; i++) {
		toggleKeys[i].addEventListener('click', function(e) {
			e.preventDefault();
			if (constants.MODE.secure) {
				elems.privateSeed.elem.parentNode.parentNode.classList.remove(constants.CLASS.hidden);
				elems.publicKey.elem.parentNode.parentNode.classList.add(constants.CLASS.hidden);
				constants.MODE.secure = false;
			} else {
				elems.privateSeed.elem.parentNode.parentNode.classList.add(constants.CLASS.hidden);
				elems.publicKey.elem.parentNode.parentNode.classList.remove(constants.CLASS.hidden);
				constants.MODE.secure = true;
			}
		});
	};

	document.querySelector('.reveal_seed_link').addEventListener('click', function(e) {
		e.preventDefault();
		var elem = elems.privateSeed.elem;
		var typ = elem.getAttribute('type');
		if (typ === 'password') {
			elem.setAttribute('type', 'text');
		} else {
			elem.setAttribute('type', 'password');
		}
	});

	setTimeout(function() {
		document.querySelector('.stellar_checkout_overlay').classList.add('loaded');;
		document.querySelector('.stellar_checkout_form').classList.add('loaded');;
	}, 1000);

	return root;
};

function createProgressHtml(dto) {
	var compiledHtml = template.progress(dto)
	elems.root.elem.appendChild(createElementFromHTML(compiledHtml));

	var progressPanel = document.querySelector(elems.progressPanel.selector);
	elems.progressPanel.elem = progressPanel;

	var qrCodeCanvas = elems.root.elem.querySelector('.qrcode');

	QRCode.toCanvas(qrCodeCanvas, dto.payment.to, function (error) { // todo: standardized format that popular wallets use for payment data
		if (error) {
			console.error(error);
		}
	});

	elems.header.elem.classList.add('progress');

	showProgressHtml();

	return progressPanel;
}

function createSubmitHandler(callBack) {
	var btn = elems.submitButton.elem;
	if (btn) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			setButtonState(this, constants.SUBMIT_BUTTON_STATE.IN_PROGRESS)
			callBack.call(this);
		});
		elems.submitButton.elem = btn;
	};
};



function onValidateAmount(e) {
	constants.DTO.payment.amount = e.target.value;
	toggleValidationFeedback(e.target, validateAmount());
};

function onValidatePrivateSeed(e) {
	constants.DTO.privateSeed = e.target.value;
	toggleValidationFeedback(e.target, validatePrivateSeed());
};

function onValidatePublicKey(e) {
	constants.DTO.payment.from = e.target.value;
	toggleValidationFeedback(e.target, validatePublicKey(e.target.value));
};

function onValidateTotal(e) {
	constants.DTO.invoice.total = e.target.value;
	toggleValidationFeedback(e.target, validateTotal());
	_cmcClient.fetch();
};

function setButtonState(target, state)  {
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

function hideError() {
	elems.errorPanel.elem.parentNode.removeChild(elems.errorPanel.elem);
};

function showError(error) {
	error.friendBotSvg = friendBotSvg;
	var compiledHtml = template.error(error);
	elems.root.elem.appendChild(createElementFromHTML(compiledHtml));
	var errorPanel = document.querySelector(elems.errorPanel.selector);
	elems.errorPanel.elem = errorPanel;
	var closeElem = errorPanel.querySelector('.close');
	closeElem.addEventListener('click', hideError);
	errorPanel;	
};

function showSuccess(obj) {
	var compiledHtml = template.success(obj);
	elems.root.elem.appendChild(createElementFromHTML(compiledHtml));
};

function showProgressHtml() {
	elems.formPanel.elem.classList.add(constants.CLASS.hidden);
	elems.progressPanel.elem.classList.remove(constants.CLASS.hidden);
};

function toggleValidationFeedback(target, test) {
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

function updateProgressHtml() {
	return new Promise(function(resolve) {
		var statusElem = elems.header.elem.querySelector('.status');
		var statusMsgs = [
			'transaction received',
			'processing transaction',
			'verifying transaction',
			'payment complete'
		];
		var i = 0,
		increment = 2000,
		interval = setInterval(function() {
			statusElem.innerHTML = statusMsgs[i];
			if (i == statusMsgs.length-1) {
				clearInterval(interval);
				resolve();
			}
			i++;
		}, increment);
	});
}

function validateAmount() {
	var result = {
		errors: [],
		result: true
	};
	var amt = constants.DTO.payment.amount;
	if (isNaN(amt)) {
		result.errors.push(new ErrObject('amount is not a number', elems.amount));
		result.result = false;
	}
	if (amt <= 0) {
		result.errors.push(new ErrObject('amount must be greater than zero', elems.amount));
		result.result = false;
	}
	return result;
};

function validatePrivateSeed() {
	var result = {
		errors: [],
		result: true
	};
	var key = constants.DTO.privateSeed;
	if (!key || !window.StellarSdk.StrKey.isValidEd25519SecretSeed(key)) {
		result.errors.push(new ErrObject('private seed is invalid', elems.privateSeed));
		result.result = false;
	}
	return result;
};

function validatePublicKey(key) {
	var result = {
		errors: [],
		result: true
	};
	if (!key || !window.StellarSdk.StrKey.isValidEd25519PublicKey(key)) {
		result.errors.push(new ErrObject('public key is invalid'));
		result.result = false;
	}
	return result;
};

function validateTotal() {
	var result = {
		errors: [],
		result: true
	};
	var total = constants.DTO.invoice.total;
	if (isNaN(total)) {
		result.errors.push(new ErrObject('total is not a number', elems.total));
		result.result = false;
	}
	if (total <= 0) {
		result.errors.push(new ErrObject('total must be greater than zero', elems.total));
		result.result = false;
	}
	return result;
};

function validateTransactionDto() {
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

export default {
	elems: elems,
	create: create,
	createProgressHtml: createProgressHtml,
	createSubmitHandler: createSubmitHandler,
	setButtonState: setButtonState,
	showError: showError,
	showSuccess: showSuccess,
	updateProgressHtml: updateProgressHtml,
	validatePublicKey: validatePublicKey,
	validateTransactionDto: validateTransactionDto
};