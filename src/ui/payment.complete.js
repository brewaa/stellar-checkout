import constants from '../constants';
import elems from './elems';
import {createElementFromHTML} from '../utils/dom';
import {paymentCompleteTemplate} from '../ui/template';

export function showPaymentComplete(obj) {
	// Load the mustache template
	var template = paymentCompleteTemplate();
	var compiledHtml = template(obj);

	// Append to the DOM
	elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

	// Hide other panels
	elems.formPanel.elem.classList.add(constants.CLASS.hidden);
	elems.paymentAwaitingPanel.elem.classList.add(constants.CLASS.hidden);
};