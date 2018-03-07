import {common as localizationsCommon} from './localizations.common';
import constants from '../constants';
import {Localizer} from './localizer';

export var cultures = [
	'en',
	'de-DE',
	'es-ES',
	'it-IT',
	'fr-FR',
	'ja-JP',
	'ko-KR',
	'pt-BR',
	'ru-RU',
	'th-TH',
	'zh-CN',
	'zu-ZA'
	// 'arn-CL',
	// 'cs-CZ',
	// 'da-DK',
	// 'zh-HK',
	// 'hu-HU',
	// 'id-ID',
	// 'he-IL',
	// 'hi-IN',
	// 'es-MX',
	// 'ms-MY',
	// 'nb-NO',
	// 'fil-PH',
	// 'ur-PK',
	// 'pl-PL',
	// 'sv-SE',
	// 'zh-SD',
	// 'tr-TR',
	// 'zh-TW'
];

export default {
	init: function(lang) {
		this.localizer = new Localizer(lang, localizationsCommon);
	}
};