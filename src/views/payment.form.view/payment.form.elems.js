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
	amount: {
		selector: '#stellarCheckoutAmount',
		elem: null,
		events: {
			blur: onValidateAmount,
			input: onValidateAmount
		}
	},
	publicKey: {
		selector: '#stellarCheckoutPublicKey',
		elem: null,
		events: {
			blur: onValidatePublicKey,
			input: onValidatePublicKey
		}
	},
	submitButton: {
		selector: '#stellarCheckoutSubmitButton',
		elem: null
	}
};