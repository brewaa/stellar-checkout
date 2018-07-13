<div align="center">
  <a href="https://www.stellar.org/">
    <img alt="" src="https://raw.githubusercontent.com/brewaa/stellar-checkout/master/docs/i/stellar/stellar-rocket@2x.png?x=6" /> <br/>
    <img alt="" src="https://raw.githubusercontent.com/brewaa/stellar-checkout/master/docs/i/stellar/STELLAR-logo.png?x=3" />
  </a>
  <br/>
  <strong>a #StellarBuildChallenge entry (2018)</strong>
  <br />
  <br />
</div>

# StellarCheckout

StellarCheckout is an open source javascript plug-in for web sites. It allows merchants to accept payments for goods and services in lumens.

```
WARNING: This project is a work in progress and may contain bugs and defects. Use at your own risk. :P
```

## Installation

```
npm i --save-dev stellar-checkout
```

## CDN
```
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
```

## Features
- Drop-in responsive UI
- Skinnable
- Currency conversion support for 32 fiat currencies
- QR Codes in various formats (JSON, XDR)
- Simple integration options
- Demos & Documentation
- Available via NPM and CDN

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
  env: {		// This controls which Stellar network to use; Use 'production' for mainnet. Any value other than production will result in using test-net. Options: [production|*];
  	type: String,
  	required: false
  },
  lang: {   // Sets the culture used for localization. Supported cultures: 'en', 'cs-CZ', 'da-DK', 'de-DE', 'es-ES', 'fr-FR', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'pl-PL', 'pt-BR', 'ru-RU', 'sv-SE', 'th-TH', 'tr-TR', 'zh-CN', 'zu-ZA'; 
    type: String,
    required: false
  }, 
  memo: {   // A field to record additional data related to a payment. E.g. OrderID, UserID
    type: String,
    required: true
  },  
  onSubmit: {		// Submit handler executed after a completing a transaction. Has access to error and payment data
  	type: function,
  	required: false
  },
  redirectUrl: {	// The URL to redirect the user to after a successfully completed transaction
  	type: String,
  	required: false
  },
  stylesheet: {         // URL to a custom stylesheet
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
https://brewaa.github.io/stellar-checkout/demo.html

## Basic Example
See [Basic Configuration Example](https://github.com/brewaa/stellar-checkout/wiki/Basic-Configuration-Example) in the wiki.

```html
<div id="elem"></div>
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
  currency: 'GBP',
  total: '10',
  destinationKey: 'GB5L45CNNM5I56YYH3FBA7QXUZGJL5CYR2GG7PS5WLT5FK4NEHXEUH73'
});
</script>
```

## Wiki

More examples can be found in the wiki. [View Examples](https://github.com/brewaa/stellar-checkout/wiki/Examples)

## Tip Jar

XLM: GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI

<a href="#readme">
  <img alt="" src="https://raw.githubusercontent.com/brewaa/stellar-checkout/master/docs/i/stellar/not-for-profit@2x.png" />
</a>