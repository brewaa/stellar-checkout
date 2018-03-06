import constants from '../constants';
import {createElementFromHTML} from '../utils/dom';
import rootElems from '../ui/elems';
import {Localizer} from '../utils/l10n'

export default class BaseView {

	constructor(elems, template, localizations) {
		this.dto = constants.DTO;
		this.elems = elems;
		this.template = template;
		this.localizations = localizations;
		this.l = new Localizer(constants.LANG, this.localizations);
		
		this.create();
	}

	create() {
		// Compile the mustache template
		var compiledHtml = this.template(this.dto);

		// Append the compiled HTML to the DOM
		rootElems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

		// Get a reference to all elems in this view
		for (var key in this.elems) {
			var item = this.elems[key];
			var el = item.elem = rootElems.root.elem.querySelector(item.selector);
			if (el) {
				if (item.l10nKey && this.localizations) {
					el.innerHTML = this.l.localize(item.l10nKey, el.innerHTML);
				}
				for (var ev in item.events) {
					el.addEventListener(ev, item.events[ev]);
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
			window.scrollTo(0, 0);
			this.elems.root.elem.classList.remove(constants.CLASS.hidden);
		}
	}

	update() {
		
	}

};