import constants from './constants';
import css from './assets/css/style.css';
import formatter from './formatter';
import friendBotSvg from './assets/i/FriendBot_favicon.svg';
import fontawesome from '@fortawesome/fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import html from './assets/template.html';
import progressTemplate from './assets/templates/progress.mustache.html';
import errorTemplate from './assets/templates/error.mustache.html';
import successTemplate from './assets/templates/success.mustache.html';
import QRCode from 'qrcode';
import * as utils from './utils';

const CSS_CLASS_HIDDEN = 'stellar_checkout_hidden';
const CSS_CLASS_TARGET_PARENT = 'stellar_checkout_container';

fontawesome.library.add(faSpinner);

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

function CoinMarketCapClient(targetElem, options) {
	this.targetElem = targetElem;
	this.url = constants.STELLAR_CHECKOUT_API_TICKER_URL,
	this.options = options;
	this.data = [];
	this.priceInLumens = null;
	this.spinner = targetElem.parentNode.querySelector('.spinner');
}

CoinMarketCapClient.prototype.fetch = function() {
	var self = this;
	self.showProgress();
	return utils.httpRequest('GET', self.url, { convert: self.options.currency }, '', true)
	.then(function(response) {
		var data = JSON.parse(response);
		if (data.length > 0) {
			var lumenPrice = data[0]['price_' + constants.DTO.currency.toLowerCase()];
			if (lumenPrice) {
				self.priceInLumens = self.calcPriceInLumens(constants.DTO.total, lumenPrice);
				var formattedPrice = utils.replace(formatter.format(formatter.FORMATS.DECIMAL7, self.priceInLumens), ',', '');
				self.targetElem.setAttribute('value', formattedPrice);
				self.targetElem.setAttribute('disabled', 'disabled');
				self.targetElem.dispatchEvent(new Event('input'));
			}
			self.data = data;
		}
		self.hideProgress();
	});
};

CoinMarketCapClient.prototype.calcPriceInLumens = function(invoiceTotal, lumenPrice) {
	return invoiceTotal / lumenPrice;
};

CoinMarketCapClient.prototype.hideProgress = function() {
	this.spinner.classList.add(CSS_CLASS_HIDDEN);
};

CoinMarketCapClient.prototype.showProgress = function() {
	this.spinner.classList.remove(CSS_CLASS_HIDDEN);
};


function create(selector, options) {

	var targetElem = document.querySelector(selector);
	if (!targetElem) {
		console.log(utils._err('selector not found', constants.MESSAGE_TYPE.ERROR));
	}	

	if (constants.CONFIG.error) {
		var divConfigError = document.createElement('div');
		divConfigError.innerHTML = constants.APP_NAME + ':error:' + constants.CONFIG.message;
		targetElem.appendChild(divConfigError);
		return;
	}

	targetElem.classList.add(CSS_CLASS_TARGET_PARENT);
	
	targetElem.appendChild(createElementFromHTML(html));

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

	constants.DTO.total = options.total;
	constants.DTO.totalMin = options.totalMin;
	constants.DTO.amount = _cmcClient.priceInLumens;
	constants.DTO.currency = options.currency;
	constants.DTO.destinationKey = options.destinationKey;
	constants.DTO.privateSeed = elems.privateSeed.elem.value;
	constants.DTO.publicKey = elems.publicKey.elem.value;

	//todo: add a configuration check for options.total
	var hasValidTotal = false;
	if (constants.DTO.total && constants.DTO.total.length > 0) {
		elems.total.elem.setAttribute('value', constants.DTO.total);
		if (!constants.DTO.totalMin) {
			elems.total.elem.setAttribute('disabled', 'disabled');	
		}
		var currencyLabel = elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.currency;
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
				elems.privateSeed.elem.parentNode.parentNode.classList.remove(CSS_CLASS_HIDDEN);
				elems.publicKey.elem.parentNode.parentNode.classList.add(CSS_CLASS_HIDDEN);
				constants.MODE.secure = false;
			} else {
				elems.privateSeed.elem.parentNode.parentNode.classList.add(CSS_CLASS_HIDDEN);
				elems.publicKey.elem.parentNode.parentNode.classList.remove(CSS_CLASS_HIDDEN);
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
	var compiledHtml = progressTemplate(dto)
	elems.root.elem.appendChild(createElementFromHTML(compiledHtml));

	var progressPanel = document.querySelector(elems.progressPanel.selector);
	elems.progressPanel.elem = progressPanel;

	var qrCodeCanvas = elems.root.elem.querySelector('.qrcode');

	QRCode.toCanvas(qrCodeCanvas, dto.destinationKey, function (error) {
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

function ErrObject(msg, elem) {
	return {
		elem: elem,
		msg: msg
	}
};

function onValidateAmount(e) {
	constants.DTO.amount = e.target.value;
	toggleValidationFeedback(e.target, validateAmount());
};

function onValidatePrivateSeed(e) {
	constants.DTO.privateSeed = e.target.value;
	toggleValidationFeedback(e.target, validatePrivateSeed());
};

function onValidatePublicKey(e) {
	constants.DTO.publicKey = e.target.value;
	toggleValidationFeedback(e.target, validatePublicKey(e.target.value));
};

function onValidateTotal(e) {
	var val = e.target.value;
	if (constants.DTO.totalMin) {
		if (val && val >= constants.DTO.total) {
			constants.DTO.total = e.target.value;
		} else {
			e.target.value = constants.DTO.totalMin;
			constants.DTO.total = constants.DTO.totalMin;
		}
	} else {
		constants.DTO.total = e.target.value;
	}
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
	var compiledHtml = errorTemplate(error);
	elems.root.elem.appendChild(createElementFromHTML(compiledHtml));
	var errorPanel = document.querySelector(elems.errorPanel.selector);
	elems.errorPanel.elem = errorPanel;
	var closeElem = errorPanel.querySelector('.close');
	closeElem.addEventListener('click', hideError);
	errorPanel;	
};

function showSuccess(obj) {
	var compiledHtml = successTemplate(obj);
	elems.root.elem.appendChild(createElementFromHTML(compiledHtml));
};

function showProgressHtml() {
	elems.formPanel.elem.classList.add(CSS_CLASS_HIDDEN);
	elems.progressPanel.elem.classList.remove(CSS_CLASS_HIDDEN);
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
		}
		i++;
	}, increment);
}

function validateAmount() {
	var result = {
		errors: [],
		result: true
	};
	var amt = constants.DTO.amount;
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
	var total = constants.DTO.total;
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

	var a = validateAmount(dto.amount);
	result.result = result.result && a.result;
	result.errors = [...result.errors,...a.errors];

	// asset

	// publicKey OR privateSeed
	if (constants.MODE.secure) {
		var b = validatePublicKey(dto.publicKey);
		result.result = result.result && b.result;
		result.errors = [...result.errors,...b.errors];
	} else {
		var b = validatePrivateSeed(dto.privateSeed);
		result.result = result.result && b.result;
		result.errors = [...result.errors,...b.errors];
	}

	//destinationKey
	var c = validatePublicKey(dto.destinationKey);
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