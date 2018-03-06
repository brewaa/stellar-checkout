import constants 				from '../../constants';
import {createElementFromHTML} 	from '../../utils/dom';
import rootElems 				from '../../ui/elems';

import BaseView 				from '../base.view';
import thisElems 				from './payment.complete.elems';
import paymentCompleteL10n 		from './payment.complete.l10n.js';
import paymentCompleteTemplate 	from './templates/payment.complete.mustache.html';

export class PaymentCompleteView extends BaseView {

	constructor() {
		super(thisElems, paymentCompleteTemplate, paymentCompleteL10n);
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