# StellarCheckout

A javascript plugin that allows web sites to accept payments via the Stellar blockchain.

This project aims to make it easier for web masters to integrate their web site with the Stellar.org blockchain and accept payments in lumens.

StellarCheckout is ideal for any site that has a shopping cart and it can also be used as a standalone payment form.

## Installation

```
npm i -save stellar-checkout
```

## Integration
The plugin is intended to be used as part of a shopping cart checkout process. Stellar Lumens can be listed among other accepted payment methods on your web site.
Integration typically involves setting up the StellarCheckout Drop-in UI in a dedicated web page. If a customer chooses Lumens as the payment method, you redirect them to the page that contains the Drop-in UI.
StellarCheckout can then be configured to redirect to an appropriate page, such as an order summary page, after the user has completed their transaction.
See below for simple integration examples.

## Create an API key
1. Go to https://stellarcheckout.azurewebsites.net/ and create a user account
2. Browse to https://stellarcheckout.azurewebsites.net/manage/apikeys
3. Create an API Key
4. Copy the API key into the apiKey parameter used when initializing the Drop-in UI (see examples)

## Options

```javascript
{
  apiKey: {   // Generate an API key @ https://stellarcheckout.azurewebsites.net/
    type: String,
    required: true
  }
  currency: {		// DefaultValue: USD; ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"],
  	type: String,
  	required: false
  },
  destinationKey: {	// The merchan's PublicKey/AccountID
  	type: String,
  	required: true
  },
  env: {		// DefaultValue: development; Options: [development|staging|production];
  	type: String,
  	required: false
  },
  memo: {			 // A field to record additional data related to an order. E.g. OrderID, UserID
  	type: String,
  	required: false
  },
  onSubmit: {		// Submit handler executed after a successfuly transaction with access to error and payment data
  	type: function,
  	required: false
  },
  redirectUrl: {	// The URL to redirect the user after a succesfully completed transaction
  	type: String,
  	required: false
  },
  total: {		// Order total in the currency specified
  	type: decimal,
  	required: true
  }
}
```

## Examples
Here are some quick examples to get you started.


### simple configuration example
The following example requests a payment of 10 USD and submits the transaction in lumens to the Stellar main network. 
The user is redirected automatically after a successful transaction.
```html
<div id="elem"></div>
<script type="text/javascript" src="../dist/stellar-checkout.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
  apiKey: 'YOUR_API_KEY',
  total: '10',
  env: 'production',
  destinationKey: 'GDLZR4NMRB6ZLZ7QTCQ3UVFVS53VBEJ3RSOZ56F4KINZVIS7DVOZ2V4W',
  redirectUrl: 'http://example.com/cart/order_complete'
});
</script>
```

### basic javascript example
The next example submits a test transaction to test-net in AUD and makes use of the onSubmit callback function.
```html
<div id="elem"></div>
<script type="text/javascript" src="../dist/stellar-checkout.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
  apiKey: 'YOUR_API_KEY',
  total: '249.99',
  currency: 'AUD',
  env: 'development',
  destinationKey: 'GDLZR4NMRB6ZLZ7QTCQ3UVFVS53VBEJ3RSOZ56F4KINZVIS7DVOZ2V4W',
  onSubmit: function(err, result) {
  	if (err) {
	  // handle error condition
	  console.log(err);
	  return;
  	}
  	// result contains transaction info
  	// manually handle the outcome E.g. submit a form OR display transaction details
  	console.log(result);
  }
});
</script>
```

## Tipjar

XLM: GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI