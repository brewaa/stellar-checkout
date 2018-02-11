import constants from './constants';
import css from './assets/css/style.css';
import {CoinMarketCapClient} from './services/coinmarketcap.client';
import {Err} from './utils/error';
import fonts from './assets/fonts';
import {mainTemplate} from './templates/template';

import {createElementFromHTML} from './utils/dom';
import {setButtonState} from './ui/buttons';
import elems from './ui/elems';
import {onValidateAmount, onValidatePrivateSeed, onValidatePublicKey, onValidateTotal} from './ui/events';

function create(selector, options) {

	var targetElem = document.querySelector(selector);
	if (!targetElem) {
		console.log(new Err('selector not found', constants.MESSAGE_TYPE.ERROR).toString());
		return;
	}	

	targetElem.classList.add(constants.CLASS.targetParent);
	
	targetElem.appendChild(createElementFromHTML('div', mainTemplate()));

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

	constants.CMCCLIENT = new CoinMarketCapClient(elems.amount.elem, options); // todo: refactor this and the one in ./ui/events

	/* ---- */

	elems.total.elem.addEventListener('blur', onValidateTotal);
	elems.total.elem.addEventListener('input', onValidateTotal);

	elems.amount.elem.addEventListener('blur', onValidateAmount);
	elems.amount.elem.addEventListener('input', onValidateAmount);

	elems.privateSeed.elem.addEventListener('blur', onValidatePrivateSeed);
	elems.privateSeed.elem.addEventListener('input', onValidatePrivateSeed);

	elems.publicKey.elem.addEventListener('blur', onValidatePublicKey);
	elems.publicKey.elem.addEventListener('input', onValidatePublicKey);

	constants.DTO.invoice.total = options.total;
	constants.DTO.invoice.currency = options.currency;
	constants.DTO.payment.amount = constants.CMCCLIENT.priceInLumens;
	constants.DTO.payment.from = elems.publicKey.elem.value;
	constants.DTO.payment.to = options.destinationKey;
	constants.DTO.privateSeed = elems.privateSeed.elem.value; // todo:
	

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
		constants.CMCCLIENT.fetch();
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

export default {
	create: create,
	createSubmitHandler: createSubmitHandler
};