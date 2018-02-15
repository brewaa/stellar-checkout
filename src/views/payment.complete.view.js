import BaseView from './base.view';
import constants from '../constants';
import {createElementFromHTML} from '../utils/dom';
import {paymentCompleteTemplate} from '../ui/template';
import rootElems from '../ui/elems';
import thisElems from '../ui/payment.complete.elems';

export class PaymentCompleteView extends BaseView {

	constructor() {
		super(thisElems, paymentCompleteTemplate);
	}

	create() {
		super.create();
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