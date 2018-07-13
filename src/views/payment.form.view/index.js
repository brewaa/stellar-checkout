import constants 				from '../../constants';
import {CoinMarketCapClient} 	from '../../services/coinmarketcap.client';
import {createElementFromHTML} 	from '../../utils/dom';
import rootElems 				from '../../ui/elems';

import BaseView 				from '../base.view';
import thisElems 				from './payment.form.elems';
import paymentFormL10n 			from './payment.form.l10n.js';
import paymentFormTemplate 		from './templates/payment.form.mustache.html';

export class PaymentFormView extends BaseView {

	constructor() {
		super(thisElems, paymentFormTemplate, paymentFormL10n);
	}

	create() {
		super.create();

		constants.CMCCLIENT = new CoinMarketCapClient(
			thisElems.total.elem, 
			thisElems.amount.elem,
			thisElems.currencyConversionInfo.elem
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