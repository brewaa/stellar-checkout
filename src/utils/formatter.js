export let CURRENCY = 'USD'
export let CULTURE = 'en-US'

export function formatAssetCode (objBalance) {
  return ((objBalance.asset_type === 'native') ? 'XLM' : objBalance.asset_code)
}

export function formatBalance (objBalance) {
  return formatDecimal7(objBalance.balance) + formatAssetCode(objBalance)
}

export function formatCurrency (num, locale, currency, appendCurrency) {
  locale = locale || CULTURE
  currency = currency || CURRENCY
  return new Intl.NumberFormat(locale, {
    currency: currency,
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num) + (appendCurrency ? ' ' + currency : '')
}

export function formatDate (date, locale) {
  locale = locale || CULTURE
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short'
  }).format(date)
}

export function formatDecimal (num, locale, minimumFractionDigits, maximumFractionDigits) {
  locale = locale || CULTURE
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: minimumFractionDigits || 2,
    maximumFractionDigits: maximumFractionDigits || 2
  }).format(num)
}

export function formatDecimal7 (num, locale) {
  return formatDecimal(num, locale, 0, 7)
}

export function formatDecimal8 (num, locale) {
  return formatDecimal(num, locale, 0, 8)
}

export function formatPublicKey (key, len1, len2) {
  var s = ''
  var e = ''
  len1 = len1 || 8
  len2 = len2 || 4
  s = key.substring(0, len1)
  e = key.substring(key.length - len2)
  return s + '...' + e
}

export function formatPublicKeyHyperlink (key, len1, len2) {
  var url = 'https://stellar.expert/explorer/public/account/' + key
  return '<a href="' + url + '" target=_blank>' + formatPublicKey(key, len1, len2) + '</a>'
}

export function formatStellarExpertHyperlink (key) {
  var url = 'https://stellar.expert/explorer/public/account/' + key
  return '<a href="' + url + '" target=_blank>' + key + '</a>'
}

export function formatNiceNumber (num, style, currency, withCurrencyMoniker) {
  currency = currency || CURRENCY
  var total = num
  var unit = ''
  if (num >= 10000) {
    total = num / 10000
    unit = 'K'
  }
  if (num >= 1000000) {
    total = num / 1000000
    unit = 'M'
  }
  if (num >= 1000000000) {
    total = num / 1000000000
    unit = 'B'
  }
  if (num >= 1000000000000) {
    total = num / 1000000000000
    unit = 'T'
  }
  var opts = {
    style: style,
    minimumFractionDigits: 2,
    maximumFractionDigits: typeof style === 'string' && style.toLowerCase() === 'percent' ? 2 : num < 1 ? 6 : 2
  }
  if (currency) {
    opts.currency = currency
  }
  var f = new Intl.NumberFormat(CULTURE, opts)
  return f.format(total) + unit
}
