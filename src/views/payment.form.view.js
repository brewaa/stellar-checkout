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

		constants.CMCCLIENT = new CoinMarketCapClient(
			thisElems.total.elem, 
			thisElems.amount.elem
		);

		this.elems.total.elem.dispatchEvent(new Event('input'));
		
	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();

		if (this.elems.publicKey.elem.value.length > 0) {
			this.elems.publicKey.elem.dispatchEvent(new Event('input'));	
		}
	}

	update() {
		super.update();
	}
};