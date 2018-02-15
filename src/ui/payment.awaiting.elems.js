import {prevView} from './index';

export default {
	root: {
		elem: null,
		selector: '.stellar_checkout_payment_awaiting'
	},
	header: {
		selector: '.stellar_checkout_header',
		elem: null
	},
	statusElem: {
		selector: '.stellar_checkout_header .alt .status',
		elem: null
	},
	goBackLink: {
		selector: '.stellar_checkout_goback',
		elem: null,
		events: {
			click: prevView
		}
	},
	walletPicker: {
		selector: 'select.picker',
		elem: null
	},
	stellarCheckoutConfirmTo: {
		selector: '#stellarCheckoutConfirmTo',
		elem: null
	},
	stellarCheckoutConfirmFrom: {
		selector: '#stellarCheckoutConfirmFrom',
		elem: null
	},
	stellarCheckoutConfirmAmount: {
		selector: '#stellarCheckoutConfirmAmount',
		elem: null
	},
};