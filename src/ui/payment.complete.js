import elems from './elems';
import {createElementFromHTML} from '../utils/dom';
import {paymentCompleteTemplate} from '../ui/template';

export function showPaymentComplete(obj) {
	var template = paymentCompleteTemplate();
	var compiledHtml = template(obj);
	elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));
};