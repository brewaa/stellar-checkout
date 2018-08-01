import localizations from './localizations.default'
import merge from 'lodash.merge'

export var cultures = [
  'en'
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

export class Localizer {
  constructor (cultureCode, localizations) {
    this.cultureCode = cultureCode
    this.defaultLang = 'en'
    this.defaultValues = {}
    this.localizations = localizations || {}
    this.values = {}

    this.updateValues()
  }
  addLocalizations (loc) {
    this.localizations = merge(loc, this.localizations)
    this.updateValues()
  }
  localize (key, defaultValue) {
    if (this.values && this.values[key]) {
      return this.values[key]
    }
    if (this.defaultValues && this.defaultValues[key]) {
      return this.defaultValues[key]
    }
    if (defaultValue) {
      return defaultValue
    }
    return ''
  }
  updateValues () {
    if (this.localizations) {
      if (this.defaultLang) {
        this.defaultValues = this.localizations[this.defaultLang]
      }
      if (this.cultureCode) {
        this.values = this.localizations[this.cultureCode.toLowerCase()]
      }
    }
  }
};
