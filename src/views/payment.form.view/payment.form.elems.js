import {onValidateAmount, onValidatePrivateSeed, onValidatePublicKey, onValidateTotal} from './payment.form.events';

export default {
	root: {
		elem: null,
		selector: '#paymentFormView'
	},
	total: {
		selector: '#stellarCheckoutTotal',
		elem: null,
		events: {
			blur: onValidateTotal,
			input: onValidateTotal
		}
	},
	totalLabel: {
		selector: '#stellarCheckoutTotalLabel',
		elem: null,
		l10nKey: 'labelTotal'
	},
	amount: {
		selector: '#stellarCheckoutAmount',
		elem: null,
		events: {
			blur: onValidateAmount,
			input: onValidateAmount
		}
	},
	amountLabel: {
		selector: '#stellarCheckoutAmountLabel',
		elem: null,
		l10nKey: 'labelAmount'
	},
	currencyConversionInfo: {
		selector: '#stellarCheckoutCurrencyConversionInfo',
		elem: null
	},
	publicKey: {
		selector: '#stellarCheckoutPublicKey',
		elem: null,
		events: {
			blur: onValidatePublicKey,
			input: onValidatePublicKey
		}
	},
	publicKeyLabel: {
		selector: '#stellarCheckoutPublicKeyLabel',
		elem: null,
		l10nKey: 'labelPublicKey'
	},
	submitButton: {
		selector: '#stellarCheckoutSubmitButton',
		elem: null,
		l10nKey: 'submitButton'
	}
};