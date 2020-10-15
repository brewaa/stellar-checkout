# StellarCheckout

An open source javascript plug-in for the stellar.org blockchain.
```
E.g. https://www.stellarcheckout.com/demo?network=test&amount=99.97&currency=AUD&to=GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI&from=GDT34VGS4JJE7STTVN3FLYCXRDEMIPJCPDLRZS26LVC2GVRTE5UYCRCO&culture=en-AU&showNetworkSelector=0&showTicker=0
```
NOTE: Demo site had been taken down permanently


## Installation

```
npm i --save-dev stellar-checkout
```

## CDN
```
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
```
NOTE: Use a specific version when loading via CDN. The latest version may contain breaking changes.

## HTTPS
You must serve the script over HTTPS to use Ledger Wallet. Ledger wallet uses U2F which will fail without HTTPS.

## Features
- Send & receive payments in Lumens (XLM)
- Responsive, Skinnable UI
- Currency conversion support for 32 fiat currencies
- Federation client
- Ledger Wallet integration
- Multiple networks (test, public and custom)
- Simple integration options
- Demos & Documentation (WIP)
- Open source
- Available via NPM and CDN

## Options

```javascript
{
  amount: {
    type: Decimal,
    required: false
  },
  culture: {
    type: String,
    required: false,
    default: 'en',
    options: [
      'en'
    ]
  }, 
  currency: {
    type: String,
    required: false,
    default: 'USD',
    options: ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"]
  },
  id: {
    type: String,
    required: false
  },
  network: {
    type: String,
    required: false,
    default: 'test',
    options: [ 'custom', 'public', 'test' ]
  },
  networkUri: {
    type: String,
    required: [network] === 'custom'
  },
  networkPassphrase: {
    type: String,
    required: [network] === 'custom'
  },
  onSubmit: {
    type: function,
    required: false
  },
  redirectUrl: {
    type: String,
    required: false
  },
  showNetworkSelector: {
    type: Boolean,
    required: false
  },
  showTicker: {
    type: Boolean,
    required: false
  },
  stylesheet: {
    type: String,
    required: false
  }
}
```

## Reference

https://brewaa.github.io/stellar-checkout/reference/index.html

## Basic Example
See [Basic Configuration Example](https://github.com/brewaa/stellar-checkout/wiki/Basic-Configuration-Example) in the wiki.

```html
<div id="elem"></div>
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
<script>
StellarCheckout.render('#elem', {
  amount: '10',
  currency: 'GBP',
  to: 'GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI'
});
</script>
```

## Wiki

More examples can be found in the wiki. [View Examples](https://github.com/brewaa/stellar-checkout/wiki/Examples)

## Payment Verification ##
Additional verification should be implemented on the server.
The only way this can be achieved is by using the submit handler.
The submit handler will dump the entire $state of the application at the time the transaction was processed.
This data should be saved server side and verified independently.

## Disclaimer
StellarCheckout is not affiliated with nor endorsed by the Stellar Development Foundation. 
StellarCheckout is an independent open source contribution to the Stellar network.

## Tip Jar

**XLM:** GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI

<a href="#readme">
  <img alt="" src="https://raw.githubusercontent.com/brewaa/stellar-checkout/master/docs/i/stellar/not-for-profit@2x.png" />
</a>
