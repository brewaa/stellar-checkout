import constants from '../constants';
import {createElementFromHTML} from '../utils/dom';
import rootElems from '../ui/elems';

export default class BaseView {

	constructor(dto, elems, template) {
		this.dto = dto;
		this.elems = elems;
		this.template = template;
		this.create();
	}

	create() {
		// Compile the mustache template
		var template = this.template();
		var compiledHtml = template(this.dto);

		// Append the compiled HTML to the DOM
		rootElems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

		// Get a reference to all elems in this view
		for (var key in this.elems) {
			var item = this.elems[key];
			item.elem = rootElems.root.elem.querySelector(item.selector);
			for (var ev in item.events) {
				item.elem.addEventListener(ev, item.events[ev]);
			}
		}

		console.log(this.elems);
	}

	destroy() {
		var keys = Object.keys(this.elems).reverse();
		for (var key in keys) {
			this.elems[key].elem.parentNode.removeChild(this.elems[key].elem);
		}
		for (var key in keys) {
			this.elems[key].pop();
		}
	}

	hide() {
		if (this.elems.root) {
			this.elems.root.elem.classList.add(constants.CLASS.hidden);
		}
	}

	show() {
		if (this.elems.root) {
			this.elems.root.elem.classList.remove(constants.CLASS.hidden);
		}
	}

};