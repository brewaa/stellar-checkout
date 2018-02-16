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
		
		elems.root.elem = root;
		
		// Initialize the views
		viewState.views.push({ name: 'PaymentFormView', view: new PaymentFormView() });
		viewState.views.push({ name: 'PaymentAwaitingView', view: new PaymentAwaitingView() });
		viewState.views.push({ name: 'PaymentCompleteView', view: new PaymentCompleteView() });


		constants.DTO.invoice.total = options.total;
		constants.DTO.invoice.currency = options.currency;
		// constants.DTO.payment.amount = constants.CMCCLIENT.priceInLumens;
		//constants.DTO.payment.from = elems.publicKey.elem.value;
		constants.DTO.payment.to = options.destinationKey;

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
	};
};

 // todo: set boundaries

export function prevView() {
	if (viewState.currentView) {
		viewState.currentView.hide();
	}
	viewState.currentIndex = viewState.currentIndex <= 0 ? 0 : viewState.currentIndex--;
	viewState.currentView = viewState.views[viewState.currentIndex].view;
	viewState.currentView.show();
	console.log(viewState);
}

export function nextView() {
	if (viewState.currentView) {
		viewState.currentView.hide();
	}
	viewState.currentIndex = viewState.currentIndex >= viewState.views.length-1 ? viewState.views.length-1 : viewState.currentIndex++;
	viewState.currentView = viewState.views[viewState.currentIndex].view;
	viewState.currentView.show();
}

export function showView(viewName) {
	var vw = viewState.views.find(function(el) {
		return el.name == viewName;
	});
	if (vw) {
		if (viewState.currentView) {
			viewState.currentView.hide();
		}
		viewState.currentIndex = viewState.views.indexOf(vw);
		viewState.currentView = vw.view;
		viewState.currentView.show();
		console.log(viewState);
	}

}

export default {
	create: create,
	createSubmitHandler: createSubmitHandler,
	nextView: nextView,
	prevView: prevView,
	showView: showView
};