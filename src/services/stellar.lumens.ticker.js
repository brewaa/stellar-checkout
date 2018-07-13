import constants from 'app/constants'
import {formatCurrency, formatDecimal7} from 'utils/formatter'
import {replace} from 'utils/string'

function calculatePriceInLumens (invoiceTotal, lumenPrice) {
  return invoiceTotal / lumenPrice
}

function extractStellarLumensTickerData (data) {
  var lumenPrice = data['price_' + constants.SETTINGS.currency.toLowerCase()]
  var currencyConversionDescription = '1XLM = ' + replace(formatDecimal7(lumenPrice), ',', '') + '' + constants.SETTINGS.currency
  var invoicePriceInLumens = calculatePriceInLumens(constants.DTO.invoice.total, lumenPrice)
  var invoicePriceInLumensFormatted = replace(formatDecimal7(invoicePriceInLumens), ',', '')
  constants.DTO.meta.currencyConversionDescription = currencyConversionDescription
  constants.DTO.meta.invoicePriceInLumens = invoicePriceInLumens
  constants.DTO.meta.invoicePriceInLumensFormatted = invoicePriceInLumensFormatted
  constants.DTO.meta.invoiceTotalFormatted = formatCurrency(constants.DTO.invoice.total)
  constants.DTO.meta.lumenPrice = lumenPrice
  constants.DTO.payment.amount = formatDecimal7(invoicePriceInLumens)
  return constants.DTO
}

export function fetchStellarLumensTickerData () {
  var url = constants.TICKERS.stellar.url
  var currency = constants.SETTINGS.currency.toLowerCase().replace('usd', '')
  return window.StellarSdk.axios.get(url, { params: { currency: currency } })
}

export function syncStellarLumensTickerData () {
  return fetchStellarLumensTickerData()
    .then(response => {
      var data = response.data
      if (data.length > 0) {
        constants.TICKERS.stellar.data = data[0]
        constants.TICKERS.stellar.updated = new Date(Date.now())
        extractStellarLumensTickerData(data[0])
      }
      return response.data
    })
}
