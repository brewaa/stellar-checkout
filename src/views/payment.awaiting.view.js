import BaseView from './base.view';
import constants from '../constants';

import rootElems from '../ui/elems';
import {paymentAwaitingTemplate} from '../ui/template';
import QRCode from 'qrcode';
import walletFormat from '../utils/wallet.format';

var elems = {
	root: {
		elem: null,
		selector: '.stellar_checkout_payment_awaiting'
	}
};

export class PaymentAwaitingView extends BaseView {

	constructor(dto) {
		super(dto, elems, paymentAwaitingTemplate);
	}

	create() {
		super.create();
		console.log('payment.awaiting.view');
		// console.log(this.elems);
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

};