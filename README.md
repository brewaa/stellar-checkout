# StellarCheckout

An open source javascript plug-in for the stellar.org blockchain.

## Installation

```
npm i --save-dev stellar-checkout
```

## CDN
```
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
```

## Features
- Drop-in responsive, Skinnable UI
- Currency conversion support for 32 fiat currencies
- Federation client
- Ledger Wallet integration
- Localization (WIP)
- Simple integration options for your web site
- Demos & Documentation (WIP)
- Open source
- Available via NPM and CDN

## Options

```javascript
{
  culture: {
    type: String,
    required: false,
    default: 'en',
    options: [
      'en',
      'es-ES',
      'ja-JP',
      'ko-KR',
      'ru-RU',
      'zh-CN'
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
  memo: {
    type: String,
    required: false
  },  
  network: {
    type: String,
    required: false
    default: 'test',
    options: ['public', 'test']
  },
  onSubmit: {
    type: function,
    required: false
  },
  redirectUrl: {
    type: String,
    required: false
  },
  stylesheet: {
    type: String,
    required: false
  },
  to: {
    type: String,
    required: true
  },
  total: {
    type: decimal,
    required: true
  }
}
```

## Reference Documentation

[https://brewaa.github.io/stellar-checkout/reference/index.html](https://brewaa.github.io/stellar-checkout/reference/index.html)

## Demo
[https://brewaa.github.io/stellar-checkout/demo/index.html](https://brewaa.github.io/stellar-checkout/demo/index.html)

## Basic Example
See [Basic Configuration Example](https://github.com/brewaa/stellar-checkout/wiki/Basic-Configuration-Example) in the wiki.

```html
<div id="elem"></div>
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
  currency: 'GBP',
  total: '10',
  to: 'GBBADTX7GN4ENDZ55HIFEBSZH4NSKWABTM7LRX7AFZW3SZXULHTKB7XI'
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