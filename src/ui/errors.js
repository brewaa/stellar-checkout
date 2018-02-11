import elems from './elems';
import {createElementFromHTML} from '../utils/dom';
import {errorTemplate} from '../templates/template';

export function hideError() {
	elems.errorPanel.elem.parentNode.removeChild(elems.errorPanel.elem);
};

export function showError(error) {
	var compiledHtml = errorTemplate(error);
	elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

	var errorPanel = document.querySelector(elems.errorPanel.selector);
	elems.errorPanel.elem = errorPanel;
	
	var closeElem = errorPanel.querySelector('.close');
	closeElem.addEventListener('click', hideError);
};