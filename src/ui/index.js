import constants from '../constants';

import css from '../assets/css/style.css';
import {createElementFromHTML} from '../utils/dom';
import elems from './elems';
import paymentFormElems from './payment.form.elems';
import fonts from './fonts';
import {mainTemplate} from './template';

import {setButtonState} from './buttons';

import {PaymentFormView} from '../views/payment.form.view';
import {PaymentAwaitingView} from '../views/payment.awaiting.view';
import {PaymentCompleteView} from '../views/payment.complete.view';

import viewState from './view.state';

function create(options) {
	return new Promise(function(resolve, reject) {
		var targetElem = elems.targetElem.elem;
		if (!targetElem) {
			return;
		}

		targetElem.classList.add(elems.targetElem.cssClass);
		
		targetElem.appendChild(createElementFromHTML('div', mainTemplate()));

		var root = targetElem.querySelector(elems.root.selector);
		
		//var header = targetElem.querySelector(elems.header.selector);
		
		elems.root.elem = root;
		
		// Initialize the views
		// for (var i = 0, len = viewState.views.length; i < len; i++) {
		// 	viewState.views[i].view = new viewState.views[i].view(constants.DTO);
		// };

		viewState.views.push({ name: 'PaymentFormView', view: new PaymentFormView() });
		viewState.views.push({ name: 'PaymentAwaitingView', view: new PaymentAwaitingView() });
		viewState.views.push({ name: 'PaymentCompleteView', view: new PaymentCompleteView() });

		// var formPanel = targetElem.querySelector(elems.formPanel.selector);
		// var goBackLink = targetElem.querySelector(elems.goBackLink.selector);
		// var total = targetElem.querySelector(elems.total.selector);
		// var amount = targetElem.querySelector(elems.amount.selector);
		// var publicKey = targetElem.querySelector(elems.publicKey.selector);
		// var submitButton = targetElem.querySelector(elems.submitButton.selector);

		// elems.header.elem = header;
		// elems.formPanel.elem = formPanel;
		// elems.goBackLink.elem = goBackLink;
		// elems.total.elem = total;
		// elems.amount.elem = amount;
		// elems.publicKey.elem = publicKey;
		// elems.submitButton.elem = submitButton;

		//constants.CMCCLIENT = new CoinMarketCapClient(elems.amount.elem, options); // todo: refactor this and the one in ./ui/events

		
		//var viewPaymentAwaiting = new PaymentAwaitingView(constants.DTO);

		/* ---- */

		// elems.total.elem.addEventListener('blur', onValidateTotal);
		// elems.total.elem.addEventListener('input', onValidateTotal);

		// elems.amount.elem.addEventListener('blur', onValidateAmount);
		// elems.amount.elem.addEventListener('input', onValidateAmount);

		// elems.publicKey.elem.addEventListener('blur', onValidatePublicKey);
		// elems.publicKey.elem.addEventListener('input', onValidatePublicKey);

		constants.DTO.invoice.total = options.total;
		constants.DTO.invoice.currency = options.currency;
		// constants.DTO.payment.amount = constants.CMCCLIENT.priceInLumens;
		//constants.DTO.payment.from = elems.publicKey.elem.value;
		constants.DTO.payment.to = options.destinationKey;

		// //todo: add a configuration check for options.total
		// var hasValidTotal = false;
		// var dtoTotal = constants.DTO.invoice.total;
		// if (dtoTotal && dtoTotal.length > 0) {
		// 	elems.total.elem.setAttribute('value', dtoTotal);
		// 	elems.total.elem.setAttribute('disabled', 'disabled');
		// 	var currencyLabel = elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.invoice.currency;
		// 	hasValidTotal = true;
		// 	elems.total.elem.dispatchEvent(new Event('input'));
		// }

		// if (hasValidTotal) {
		// 	constants.CMCCLIENT.fetch();
		// }

		nextView();

		setTimeout(function() {
			document.querySelector('.stellar_checkout_overlay').classList.add('loaded');
			document.querySelector('.stellar_checkout_form').classList.add('loaded');
		}, 1000);

		resolve();
	});
};

function createSubmitHandler(callBack) {
	var btn = paymentFormElems.submitButton.elem;
	if (btn) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			setButtonState(this, constants.SUBMIT_BUTTON_STATE.IN_PROGRESS)
			callBack.call(this);
		});
		//elems.submitButton.elem = btn;
	};
};

 // todo: set boundaries

export function prevView() {
	if (viewState.currentView) {
		viewState.currentView.hide();
	}
	viewState.currentIndex--;
	viewState.currentView = viewState.views[viewState.currentIndex].view;
	viewState.currentView.show();
}

export function nextView() {
	if (viewState.currentView) {
		viewState.currentView.hide();
	}
	viewState.currentIndex++;
	viewState.currentView = viewState.views[viewState.currentIndex].view;
	viewState.currentView.show();
}

export function showView(viewName) {
	var vw = viewState.views.find(function(el) {
		return el.name == viewName;
	});
	var idx = viewState.views.indexOf(vw);
	if (vw !== -1) {
		if (viewState.currentView) {
			viewState.currentView.hide();
		}
		viewState.currentIndex = idx;
		viewState.currentView = vw.view;
		viewState.currentView.show();
	}
}

export default {
	create: create,
	createSubmitHandler: createSubmitHandler,
	nextView: nextView,
	prevView: prevView,
	showView: showView
};