import {prevView} from '../../ui/index';
import {onCopy} from './payment.awaiting.events';

export default {
	xdrTest: {
		elem: null,
		selector: '#xdrTest'
	},
	root: {
		elem: null,
		selector: '#paymentAwaitingView'
	},
	statusElem: {
		selector: '#paymentAwaitingStatus',
		elem: null
	},
	goBackLink: {
		selector: '#paymentAwaitingGoBack',
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