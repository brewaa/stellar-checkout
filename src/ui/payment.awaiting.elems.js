import {prevView} from './index';
import {onCopy} from './events';

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
	qrCodeCanvas: {
		selector: '#qrCodeCanvas',
		elem: null
	},
	qrCodeSpinner: {
		selector: '#qrCodeSpinner',
		elem: null
	},
	linkShowWalletPicker: {
		selector: '#linkShowWalletPicker',
		elem: null
	},
	walletPicker: {
		selector: '#walletPicker',
		elem: null
	},
	stellarCheckoutConfirmTo: {
		selector: '#stellarCheckoutConfirmTo',
		elem: null
	},
	stellarCheckoutConfirmToClipboard: {
		selector: '#stellarCheckoutConfirmToClipboard',
		elem: null,
		events: {
			click: onCopy
		}
	},
	stellarCheckoutConfirmFrom: {
		selector: '#stellarCheckoutConfirmFrom',
		elem: null
	},
	stellarCheckoutConfirmFromClipboard: {
		selector: '#stellarCheckoutConfirmFromClipboard',
		elem: null,
		events: {
			click: onCopy
		}
	},
	stellarCheckoutConfirmMemo: {
		selector: '#stellarCheckoutConfirmMemo',
		elem: null
	},
	stellarCheckoutConfirmMemoClipboard: {
		selector: '#stellarCheckoutConfirmMemoClipboard',
		elem: null,
		events: {
			click: onCopy
		}
	},
	stellarCheckoutConfirmAmount: {
		selector: '#stellarCheckoutConfirmAmount',
		elem: null
	},
	stellarCheckoutConfirmAmountClipboard: {
		selector: '#stellarCheckoutConfirmAmountClipboard',
		elem: null,
		events: {
			click: onCopy
		}
	}
};