<<<<<<< HEAD
import localizations from './localizations.common'
import {Localizer} from './localizer'

export var cultures = [
  'en',
  'es-ES',
  'ja-JP',
  'ko-KR',
  'ru-RU',
  'zh-CN'
]

export default {
  init: function (lang) {
    var self = this
    return new Promise(function (resolve) {
      self.localizer = new Localizer(lang, localizations)
      resolve(self.localizer)
    })
  }
}
=======
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
>>>>>>> parent of a4b59fd... no message
