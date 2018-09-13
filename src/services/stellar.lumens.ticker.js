import constants from 'app/constants'
import options from 'app/options'
import {formatCurrency, formatDecimal7} from 'utils/formatter'
import {replace} from 'utils/string'

function calculatePriceInLumens (invoiceTotal, lumenPrice) {
  return invoiceTotal / lumenPrice
}

export function extractStellarLumensTickerData (amount, currency, data) {
  var lumenPrice = data['price_' + currency.toLowerCase()]
  var currencyConversionDescription = '1XLM = ' + replace(formatDecimal7(lumenPrice), ',', '') + '' + currency
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

export function fetchStellarLumensTickerData () {
  var url = constants.TICKERS.stellar.url
  var currency = options.currency.toLowerCase().replace('usd', '')
  return window.StellarSdk.axios.get(url, { params: { currency: currency } })
}
