import constants from '../constants';
import formatter from '../utils/formatter';
import http from '../utils/http';
import {replace} from '../utils/string';

export function CoinMarketCapClient(totalElem, amountElem) {
	this.totalElem = totalElem;
	this.amountElem = amountElem;
	this.url = constants.STELLAR_CHECKOUT_API_TICKER_URL,
	this.currency = constants.DTO.invoice.currency;
	this.total = constants.DTO.invoice.total;
	this.data = [];
	this.priceInLumens = null;
	this.spinner = amountElem.parentNode.querySelector('.spinner');

	//var hasValidTotal = false;
	//if (this.total && this.total.length > 0) {
		//this.elems.total.elem.setAttribute('value', this.total);
		//this.elems.total.elem.setAttribute('disabled', 'disabled');
		//var currencyLabel = this.elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.invoice.currency;
		//hasValidTotal = true;
		//this.elems.total.elem.dispatchEvent(new Event('input'));
	//}

	if (this.total && this.total.length > 0) {
		this.fetch();
	}
}

CoinMarketCapClient.prototype.fetch = function() {
	var self = this;
	self.showProgress();
	return http.request('GET', self.url, { currency: constants.DTO.invoice.currency }, '', true)
	.then(function(response) {
		if (response) {
			var data = JSON.parse(response);
			if (data.length > 0) {
				var lumenPrice = data[0]['price_' + constants.DTO.invoice.currency.toLowerCase()];
				if (lumenPrice) {
					self.priceInLumens = self.calcPriceInLumens(constants.DTO.invoice.total, lumenPrice);
					var formattedPrice = replace(formatter.format(formatter.FORMATS.DECIMAL7, self.priceInLumens), ',', '');
					self.amountElem.setAttribute('value', formattedPrice);
					self.amountElem.setAttribute('disabled', 'disabled');
					self.amountElem.dispatchEvent(new Event('input'));
					constants.DTO.payment.total = self.priceInLumens;
				}
				self.data = data;
			}
			self.hideProgress();	
		}
		else {

		}
	});
};

CoinMarketCapClient.prototype.calcPriceInLumens = function(invoiceTotal, lumenPrice) {
	return invoiceTotal / lumenPrice;
};

CoinMarketCapClient.prototype.hideProgress = function() {
	this.spinner.classList.add(constants.CLASS.hidden);
};

CoinMarketCapClient.prototype.showProgress = function() {
	this.spinner.classList.remove(constants.CLASS.hidden);
};