import {common as localizationsCommon} from './localizations.common';
import constants from '../constants';
import {Localizer} from './localizer';

export var cultures = [
	'en',
	'cs-CZ',
	'da-DK',
	'de-DE',
	'es-ES',
	'fr-FR',
	'hu-HU',
	'id-ID',
	'it-IT',
	'ja-JP',
	'ko-KR',
	'pl-PL',
	'pt-BR',
	'ru-RU',
	'sv-SE',
	'th-TH',
	'tr-TR',
	'zh-CN',
	'zu-ZA'
];

export default {
	init: function(lang) {
		this.localizer = new Localizer(lang, localizationsCommon);
	}
};