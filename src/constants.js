export default {
  APP: {
    domain: 'stellarcheckout.com',
    name: 'StellarCheckout'
  },
  CURRENCIES: ['AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'USD', 'ZAR'],
  ENTITY: {
    tick: '&#10003;'
  },
  NETWORK: {
    name: 'test',
    network: null,
    uri: null
  },
  STELLAR_SDK_URL: 'https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/0.8.2/stellar-sdk.js',
  TX_STATUS: {
    federation: {
      title: 'VERIFY_ADDRESS',
      desc: null
    },
    account_confirmation: {
      title: 'CONFIRM_ACCOUNT',
      desc: null
    },
    account_confirmation_loading_account: {
      title: 'LOADING_ACCOUNT',
      desc: null
    },
    payment_options: {
      title: 'CHOOSE_PAYMENT_METHOD',
      desc: null
    },
    signed: {
      title: 'TRANSACTION_SIGNED',
      desc: null
    },
    error: {
      title: 'ERROR',
      desc: null
    },
    ledger_confirmation_required: {
      title: 'WAITING_FOR_CONFIRMATION_ON_DEVICE',
      desc: null
    },
    listening_for_transaction: {
      title: 'LISTENING_FOR_TRANSACTION',
      desc: null
    },
    in_progress: {
      title: 'TRANSACTION_IN_PROGRESS',
      desc: null
    },
    complete: {
      title: 'TRANSACTION_COMPLETE',
      desc: null
    },
    redirecting: {
      title: 'REDIRECT_IN_PROGRESS',
      desc: null
    }
  },
  TICKERS: {
    stellar: {
      url: 'https://www.stellarcheckout.com/api/tickers/stellar',
      counter: 0,
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
      error: null,
      meta: {
        amount: null,
        description: null,
        lumenPrice: null,
        total: null
      },
      updated: null
    }
  }
}
