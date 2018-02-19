import constants from '../constants';
import {createElementFromHTML} from '../utils/dom';
import rootElems from '../ui/elems';

export default class BaseView {

	constructor(elems, template) {
		this.dto = constants.DTO;
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
			if (elem) {
				for (var ev in item.events) {
					item.elem.addEventListener(ev, item.events[ev]);
				}
			}
		}
	}

	destroy() {
		if (this.elems.root) {
			this.elems.root.elem.parentNode.removeChild(this.elems.root.elem);
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

	update() {
		
	}

};