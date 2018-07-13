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
