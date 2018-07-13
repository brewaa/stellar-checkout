<<<<<<< HEAD
import merge from 'lodash.merge'

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
=======
import constants from '../constants';
import merge from 'lodash.merge';

export class Localizer {
	constructor(cultureCode, localizations) {
		this.cultureCode = cultureCode;
		this.defaultLang = 'en';
		this.localizations = localizations || {};
		this.defaultValues = {};
		this.values = {};

		this.updateValues();
	}
	addLocalizations(loc) {
		this.localizations = merge(loc, this.localizations);
		this.updateValues();
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
	updateValues() {
		if (this.localizations) {
			if (this.defaultLang) {
				this.defaultValues = this.localizations[this.defaultLang];
			}
			if (this.cultureCode) {
				this.values = this.localizations[this.cultureCode.toLowerCase()];
			}	
		}
	}
>>>>>>> parent of a4b59fd... no message
};
