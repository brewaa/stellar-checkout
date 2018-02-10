import constants from '../constants';
import formatter from '../utils/formatter';
import http from '../utils/http';
import {replace} from '../utils/string';

export function CoinMarketCapClient(targetElem, options) {
	this.targetElem = targetElem;
	this.url = constants.STELLAR_CHECKOUT_API_TICKER_URL,
	this.options = options;
	this.data = [];
	this.priceInLumens = null;
	this.spinner = targetElem.parentNode.querySelector('.spinner');
}

CoinMarketCapClient.prototype.fetch = function() {
	var self = this;
	self.showProgress();
	return http.request('GET', self.url, { convert: self.options.currency }, '', true)
	.then(function(response) {
		if (response) {
			var data = JSON.parse(response);
			if (data.length > 0) {
				var lumenPrice = data[0]['price_' + constants.DTO.currency.toLowerCase()];
				if (lumenPrice) {
					self.priceInLumens = self.calcPriceInLumens(constants.DTO.total, lumenPrice);
					var formattedPrice = replace(formatter.format(formatter.FORMATS.DECIMAL7, self.priceInLumens), ',', '');
					self.targetElem.setAttribute('value', formattedPrice);
					self.targetElem.setAttribute('disabled', 'disabled');
					self.targetElem.dispatchEvent(new Event('input'));
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