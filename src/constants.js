export default {
  APP: {
    brand: 'StellarCheckout',
    domain: 'stellarcheckout.com',
    name: 'stellar-checkout.js',
    version: ''
  },
  SETTINGS: {
    culture: 'en',
    currency: 'USD'
  },
  CURRENCIES: ['AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'USD', 'ZAR'],
  CLASS: {
    copied: 'sco_copied',
    error: 'sco_error',
    hidden: 'sco_hidden',
    loaded: 'sco_loaded',
    valid: 'sco_valid'
  },
  DTO: {
    invoice: {
      currency: 'USD',
      id: null,
      order_id: null,
      total: null
    },
    meta: {
      currencyConversionDescription: null,
      lumenPrice: null,
      invoiceTotalFormatted: null,
      invoicePriceInLumens: null
    },
    payment: {
      amount: null,
      asset: {
        code: null
      },
      fee: null,
      from: null,
      from_stellar_address: null,
      memo: null,
      memoType: null,
      to: null
    }
  },
  ENTITY: {
    tick: '&#10003;'
  },
  MESSAGE_TYPE: {
    ERROR: 'ERROR',
    INFO: 'INFO',
    WARNING: 'WARNING'
  },
  NETWORK: {
    name: 'test',
    network: null,
    uri: null
  },
  OPTIONS: {
    currency: null,
    id: null,
    lang: null,
    memo: null,
    network: null,
    onSubmit: null,
    redirectUrl: null,
    selector: null,
    stylesheet: null,
    style: {
      background: null
    },
    timeout: null,
    to: null,
    total: null
  },
  SELECTOR: {
    clipBoardInput: '.sco_txt',
    errorElem: '.sco_error_elem',
    fieldErrorMessage: '.sco_error_message',
    spinner: '.sco_spinner'
  },
  STELLAR_SDK_URL: 'https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/0.8.2/stellar-sdk.js',
  TX_STATUS: {
    empty: {
      title: null,
      desc: null
    },
    created: {
      title: 'Transaction created',
      desc: null
    },
    signed: {
      title: 'Transaction signed...',
      desc: null
    },
    error: {
      title: 'Error',
      desc: null
    },
    ledger_confirmation_required: {
      title: 'Waiting for confirmation on device...',
      desc: null
    },
    listening_for_transaction: {
      title: 'Listening for transaction...',
      desc: null
    },
    in_progress: {
      title: 'Transaction in progress...',
      desc: null
    },
    complete: {
      title: 'Transaction complete',
      desc: null
    },
    redirecting: {
      title: 'Transaction complete. You are being redirected...',
      desc: null
    }
  },
  TICKERS: {
    stellar: {
      url: 'https://stellarcheckout.azurewebsites.net/api/tickers/stellar',
      data: {
        '24h_volume_usd': null,
        'available_supply': null,
        'id': null,
        'last_updated': null,
        'market_cap_usd': null,
        'max_supply': null,
        'name': null,
        'percent_change_1h': null,
        'percent_change_24h': null,
        'percent_change_7d': null,
        'price_btc': null,
        'price_usd': null,
        'rank': null,
        'symbol': null,
        'total_supply': null
      },
      updated: null
    }
  },
  TIMEOUT: 60,
  TIMER: null
}
