import constants from 'app/constants'
import {formatCurrency, formatDecimal7} from 'utils/formatter'
import {replace} from 'utils/string'

function calculatePriceInLumens (invoiceTotal, lumenPrice) {
  return invoiceTotal / lumenPrice
}

function extractStellarLumensTickerData (data) {
  var total = constants.OPTIONS.total
  var currency = constants.OPTIONS.currency
  var lumenPrice = data['price_' + currency.toLowerCase()]
  var currencyConversionDescription = '1XLM = ' + replace(formatDecimal7(lumenPrice), ',', '') + '' + currency
  var invoicePriceInLumens = calculatePriceInLumens(total, lumenPrice)
  var invoicePriceInLumensFormatted = replace(formatDecimal7(invoicePriceInLumens), ',', '')
  constants.TICKERS.stellar.meta.currencyConversionDescription = currencyConversionDescription
  constants.TICKERS.stellar.meta.invoicePriceInLumens = invoicePriceInLumens
  constants.TICKERS.stellar.meta.invoicePriceInLumensFormatted = invoicePriceInLumensFormatted
  constants.TICKERS.stellar.meta.invoiceTotalFormatted = formatCurrency(constants.OPTIONS.total)
  constants.TICKERS.stellar.meta.lumenPrice = lumenPrice
  constants.OPTIONS.amount = formatDecimal7(invoicePriceInLumens)
  return constants.DTO
}

export function fetchStellarLumensTickerData () {
  var url = constants.TICKERS.stellar.url
  var currency = constants.OPTIONS.currency.toLowerCase().replace('usd', '')
  return window.StellarSdk.axios.get(url, { params: { currency: currency } })
}

export function syncStellarLumensTickerData () {
  return fetchStellarLumensTickerData()
    .then(response => {
      var data = response.data
      if (data.length > 0) {
        constants.TICKERS.stellar.counter++
        constants.TICKERS.stellar.data = data[0]
        constants.TICKERS.stellar.updated = new Date(Date.now())
        extractStellarLumensTickerData(data[0])
      }
      return data
    }).catch(e => {
      constants.TICKERS.stellar.error = e.message
    })
}
