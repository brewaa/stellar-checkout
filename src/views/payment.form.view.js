import BaseView from './base.view';
import constants from '../constants';

import {CoinMarketCapClient} from '../services/coinmarketcap.client';
import {createElementFromHTML} from '../utils/dom';

import rootElems from '../ui/elems';
import thisElems from '../ui/payment.form.elems';

import {paymentFormTemplate} from '../ui/template';

export class PaymentFormView extends BaseView {

	constructor() {
		super(thisElems, paymentFormTemplate);
	}

	create() {
		super.create();
		// console.log(this.elems);

		constants.CMCCLIENT = new CoinMarketCapClient(
			thisElems.total.elem, 
			thisElems.amount.elem
		); // todo: refactor this and the one in ./ui/events

		this.elems.total.elem.dispatchEvent(new Event('input'));
		/* ---- */

		console.log(this.dto);

		// this.elems.total.elem.addEventListener('blur', onValidateTotal);
		// this.elems.total.elem.addEventListener('input', onValidateTotal);

		// this.elems.amount.elem.addEventListener('blur', onValidateAmount);
		// this.elems.amount.elem.addEventListener('input', onValidateAmount);

		// this.elems.publicKey.elem.addEventListener('blur', onValidatePublicKey);
		// this.elems.publicKey.elem.addEventListener('input', onValidatePublicKey);

		// constants.DTO.invoice.total = options.total;
		// constants.DTO.invoice.currency = options.currency;
		//constants.DTO.payment.amount = constants.CMCCLIENT.priceInLumens;
		// constants.DTO.payment.from = elems.publicKey.elem.value;
		// constants.DTO.payment.to = options.destinationKey;

		//todo: add a configuration check for options.total
		// var hasValidTotal = false;
		// var dtoTotal = constants.DTO.invoice.total;
		// if (dtoTotal && dtoTotal.length > 0) {
		// 	this.elems.total.elem.setAttribute('value', dtoTotal);
		// 	this.elems.total.elem.setAttribute('disabled', 'disabled');
		// 	var currencyLabel = this.elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.invoice.currency;
		// 	hasValidTotal = true;
		// 	this.elems.total.elem.dispatchEvent(new Event('input'));
		// }

		// if (hasValidTotal) {
		// 	//constants.CMCCLIENT.fetch();
		// }

	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();
	}

	update() {
		super.update();
	}
};