import constants from '../constants';

export var cultures = {
	'en': {
		currency: 'USD'
	},
	'en-AU': {
		currency: 'AUD'
	}, 
	'pt-BR': {
		currency: 'BRL'
	}, 
	'en-CA': {
		currency: 'CAD'
	}, 
	'de-LI': {
		currency: 'CHF'
	}, 
	'arn-CL': {
		currency: 'CLP'
	}, 
	'zh-CN': {
		currency: 'CNY'
	}, 
	'cs-CZ': {
		currency: 'CZK'
	}, 
	'da-DK': {
		currency: 'DKK'
	}, 
	'en-GB': {
		currency: 'GBP'
	}, 
	'zh-HK': {
		currency: 'HKD'
	}, 
	'hu-HU': {
		currency: 'HUF'
	}, 
	'id-ID': {
		currency: 'IDR'
	}, 
	'he-IL': {
		currency: 'ILS'
	}, 
	'hi-IN': {
		currency: 'INR'
	}, 
	'ja-JP': {
		currency: 'JPY'
	}, 
	'ko-KR': {
		currency: 'KRW'
	}, 
	'es-MX': {
		currency: 'MXN'
	}, 
	'ms-MY': {
		currency: 'MYR'
	}, 
	'nb-NO': {
		currency: 'NOK'
	}, 
	'en-NZ': {
		currency: 'NZD'
	}, 
	'fil-PH': {
		currency: 'PHP'
	}, 
	'ur-PK': {
		currency: 'PKR'
	}, 
	'pl-PL': {
		currency: 'PLN'
	}, 
	'ru-RU': {
		currency: 'RUB'
	}, 
	'sv-SE': {
		currency: 'SEK'
	}, 
	'zh-SD': {
		currency: 'SGD'
	}, 
	'th-TH': {
		currency: 'THB'
	}, 
	'tr-TR': {
		currency: 'TRY'
	}, 
	'zh-TW': {
		currency: 'TWD'
	}, 
	'zu-ZA': {
		currency: 'ZAR'
	}
};

export class Localizer {
	constructor(cultureCode, localizations) {
		this.cultureCode = cultureCode;
		this.defaultLang = 'en';
		this.localizations = localizations;
		this.defaultValues = {};
		this.values = {};
		if (this.localizations) {
			this.defaultValues = this.localizations[this.defaultLang];
			this.values = this.localizations[this.cultureCode.toLowerCase()];
		}
	}
	localize(key, defaultValue) {
		if (this.values && this.values[key]) {
			return this.values[key];
		}
		if (this.defaultValues && this.defaultValues[key]) {
			return this.defaultValues[key];
		}
		if (defaultValue) {
			return defaultValue;
		}
		return '';
	}
};
