export default {
	APP: {
		name: 'stellar-checkout.js'
	},
	CURRENCIES: ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD", "ZAR"],
	CLASS: {
		hidden: 'stellar_checkout_hidden'
	},
	CMCCLIENT: null,
	DTO: {
		env: null,
		invoice: {
			currency: 'USD',
			total: null
		},
		payment: {
			amount: null,
			asset: null,
			fee: null,
			from: null,
			memo: null,
			network: null,
			to: null
		}
	},
	MESSAGE_TYPE: {
		ERROR: 'ERROR',
		INFO: 'INFO',
		WARNING: 'WARNING'
	},
	STELLAR_CHECKOUT_API_TICKER_URL: 'https://stellarcheckout.azurewebsites.net/api/tickers/stellar',
	STELLAR_SDK_URL: 'https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/0.8.0/stellar-sdk.js',
	SUBMIT_BUTTON_STATE: {
		DISABLED: 'DISABLED',
		NORMAL: 'NORMAL',
		IN_PROGRESS: 'IN_PROGRESS',
		PAYMENT_COMPLETE: 'PAYMENT_COMPLETE'
	}
};