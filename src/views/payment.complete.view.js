import BaseView from './base.view';
import constants from '../constants';

import {createElementFromHTML} from '../utils/dom';

import rootElems from '../ui/elems';

import {paymentCompleteTemplate} from '../ui/template';

export class PaymentCompleteView extends BaseView {

	constructor() {
		super(null, paymentCompleteTemplate);
	}

	create() {
		super.create();
		console.log('payment.complete.view');
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