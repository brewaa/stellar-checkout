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
		elem: null,
		l10nKey: 'paymentAwaitingStatus'
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
	walletPickerLabel: {
		selector: '#walletPickerLabel',
		elem: null,
		l10nKey: 'qrCodeFormat'
	},
	stellarCheckoutConfirmTo: {
		selector: '#stellarCheckoutConfirmTo',
		elem: null
	},
	stellarCheckoutConfirmToLabel: {
		selector: '#stellarCheckoutConfirmToLabel',
		elem: null,
		l10nKey: 'toLabel'
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
	stellarCheckoutConfirmFromLabel: {
		selector: '#stellarCheckoutConfirmFromLabel',
		elem: null,
		l10nKey: 'fromLabel'
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
	stellarCheckoutConfirmMemoLabel: {
		selector: '#stellarCheckoutConfirmMemoLabel',
		elem: null,
		l10nKey: 'memoLabel'
	},
	stellarCheckoutConfirmMemoClipboard: {
		selector: '#stellarCheckoutConfirmMemoClipboard',
		elem: null,
		events: {
			click: onCopy
		}
	},
	stellarCheckoutConfirmMemoType: {
		selector: '#stellarCheckoutConfirmMemoType',
		elem: null
	},
	stellarCheckoutConfirmMemoTypeLabel: {
		selector: '#stellarCheckoutConfirmMemoTypeLabel',
		elem: null,
		l10nKey: 'memoTypeLabel'
	},
	stellarCheckoutConfirmAmount: {
		selector: '#stellarCheckoutConfirmAmount',
		elem: null
	},
	stellarCheckoutConfirmAmountLabel: {
		selector: '#stellarCheckoutConfirmAmountLabel',
		elem: null,
		l10nKey: 'amountLabel'
	},
	stellarCheckoutConfirmAmountClipboard: {
		selector: '#stellarCheckoutConfirmAmountClipboard',
		elem: null,
		events: {
			click: onCopy
		}
	}
};