# StellarCheckout

StellarCheckout integrates e-commerce web sites with the Stellar.org blockchain allowing merchants to accept payment in lumens.

It's a javascript plugin with a responsive UI so it will work on any web site in modern browsers.

## Installation

```
npm i --save-dev stellar-checkout
```

## CDN
```
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
```

## Integration
1. Add a script reference to stellar-checkout.min.js
1. Install the example code into a page on your web site
2. Configure the initialization code with:
   - currency
   - total
   - destinationKey
3. OPTIONAL: Implement one of the following:
   - redirectUrl
   - onSubmit

## Options

```javascript
{
  currency: {		// DefaultValue: USD; ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"],
  	type: String,
  	required: false
  },
  destinationKey: {	// The merchant's PublicKey/AccountID
  	type: String,
  	required: true
  },
  env: {		// DefaultValue: development; Options: [development|staging|production];
  	type: String,
  	required: false
  },
  memo: {		// A field to record additional data related to a payment. E.g. OrderID, UserID
  	type: String,
  	required: false
  },
  onSubmit: {		// Submit handler executed after a completing a transaction. Has access to error and payment data
  	type: function,
  	required: false
  },
  redirectUrl: {	// The URL to redirect the user to after a succesfully completed transaction
  	type: String,
  	required: false
  },
  total: {		// Order total in the currency specified
  	type: decimal,
  	required: true
  }
}
```

## Demo
https://brewaa.github.io/stellar-checkout/example.html

## Examples
Here are some quick examples to get you started.

### simple configuration example
The following example requests a payment of 10 USD and submits the transaction in lumens to the Stellar main network. 
The user is redirected automatically after a successful transaction.
```html
<div id="elem"></div>
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
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
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
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

## Wiki

More examples can be found in the [StellarCheckout Wiki Examples](https://github.com/brewaa/stellar-checkout/wiki/Examples) pages.

## Tip Jar

XLM: GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI