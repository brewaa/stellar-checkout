import rootElems from '../ui/elems';
import {createElementFromHTML} from '../utils/dom';
import {paymentErrorTemplate} from '../ui/template';

export function hidePaymentError() {
	elems.paymentErrorPanel.elem.parentNode.removeChild(elems.paymentErrorPanel.elem);
};

export function showPaymentError(error) {
	console.log(error);
	var template = paymentErrorTemplate();
	var compiledHtml = template(error);
	elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

	var errorPanel = document.querySelector(elems.paymentErrorPanel.selector);
	elems.paymentErrorPanel.elem = errorPanel;
	
	var closeElem = errorPanel.querySelector('.close');
	closeElem.addEventListener('click', hidePaymentError);
};