import elems from './elems';
import {createElementFromHTML} from '../utils/dom';
import {errorTemplate} from '../ui/template';

export function hidePaymentError() {
	elems.errorPanel.elem.parentNode.removeChild(elems.paymentErrorPanel.elem);
};

export function showPaymentError(error) {
	var compiledHtml = errorTemplate(error);
	elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

	var errorPanel = document.querySelector(elems.paymentErrorPanel.selector);
	elems.paymentErrorPanel.elem = errorPanel;
	
	var closeElem = errorPanel.querySelector('.close');
	closeElem.addEventListener('click', hidePaymentError);
};