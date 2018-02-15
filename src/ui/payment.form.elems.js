import {onValidateAmount, onValidatePrivateSeed, onValidatePublicKey, onValidateTotal} from './events';

export default {
	root: {
		elem: null,
		selector: '.stellar_checkout_form'
	},
	header: {
		selector: '.stellar_checkout_header',
		elem: null
	},
	formPanel: {
		selector: '.stellar_checkout_form',
		elem: null
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