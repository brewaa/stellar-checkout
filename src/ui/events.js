import constants from '../constants';
import {CoinMarketCapClient} from '../services/coinmarketcap.client';
import {toggleValidationFeedback, validateAmount, validatePrivateSeed, validatePublicKey, validateTotal} from './validate';

export function onValidateAmount(e) {
	constants.DTO.payment.amount = e.target.value;
	toggleValidationFeedback(e.target, validateAmount());
};

export function onValidatePrivateSeed(e) {
	constants.DTO.privateSeed = e.target.value;
	toggleValidationFeedback(e.target, validatePrivateSeed());
};

export function onValidatePublicKey(e) {
	constants.DTO.payment.from = e.target.value;
	toggleValidationFeedback(e.target, validatePublicKey(e.target.value));
};

export function onValidateTotal(e) {
	constants.DTO.invoice.total = e.target.value;
	toggleValidationFeedback(e.target, validateTotal());
	constants.CMCCLIENT.fetch();
};