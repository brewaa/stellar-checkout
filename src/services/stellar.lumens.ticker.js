import constants from 'app/constants'
import options from 'app/options'
import {formatCurrency, formatDecimal7} from 'utils/formatter'
import {replace} from 'utils/string'

function calculatePriceInLumens (invoiceTotal, lumenPrice) {
  return invoiceTotal / lumenPrice
}

export function extractStellarLumensTickerData (amount, currency, data) {
  var cur = typeof currency === 'string' ? currency : 'USD'
  var lumenPrice = data['price_' + cur.toLowerCase()]
  var currencyConversionDescription = '1XLM = ' + replace(formatDecimal7(lumenPrice), ',', '') + '' + cur
  var invoicePriceInLumens = calculatePriceInLumens(amount, lumenPrice)
  var invoicePriceInLumensFormatted = replace(formatDecimal7(invoicePriceInLumens), ',', '')
  var result = {
    amount: invoicePriceInLumensFormatted,
    description: currencyConversionDescription,
    lumenPrice: lumenPrice,
    total: formatCurrency(options.amount)
  }
  return result
}

export function fetchStellarLumensTickerData (currency) {
  var url = constants.TICKERS.stellar.url
  var cur = typeof currency === 'string' ? currency.toLowerCase().replace('usd', '') : ''
  return window.StellarSdk.axios.get(url, { params: { currency: cur } })
}
