import {common as localizationsCommon} from './localizations.common';
import constants from '../constants';
import {Localizer} from './localizer';

export var cultures = [
	'en',
	'pt-BR',
	'de-LI',
	'arn-CL',
	'zh-CN',
	'cs-CZ',
	'da-DK',
	'zh-HK',
	'hu-HU',
	'id-ID',
	'he-IL',
	'hi-IN',
	'ja-JP',
	'ko-KR',
	'es-MX',
	'ms-MY',
	'nb-NO',
	'fil-PH',
	'ur-PK',
	'pl-PL',
	'ru-RU',
	'sv-SE',
	'zh-SD',
	'th-TH',
	'tr-TR',
	'zh-TW',
	'zu-ZA'
];

export default {
	init: function(lang) {
		this.localizer = new Localizer(lang, localizationsCommon);
	}
};