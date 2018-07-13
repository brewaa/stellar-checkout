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

It's a javascript plug-in for e-commerce web sites. It allows merchants to accept payments for goods and services in lumens (XLM).

It's a javascript plugin with a responsive UI so it will work on any web site in modern browsers.

NEW: Federation, Ledger Wallet Support

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
- Drop-in responsive, Skinnable UI
- Currency conversion support for 32 fiat currencies
- Localization (WIP)
- Multiple payment methods including Ledger Wallet
- Simple integration options for your web site
- Demos & Documentation (WIP)
- Open source
- Available via NPM and CDN

## Options

```javascript
{
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
  lang: {
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

## Demo
https://brewaa.github.io/stellar-checkout/demo/index.html

## Basic Example
See [Basic Configuration Example](https://github.com/brewaa/stellar-checkout/wiki/Basic-Configuration-Example) in the wiki.

```html
<div id="elem"></div>
<script type="text/javascript" src="https://unpkg.com/stellar-checkout/stellar-checkout.min.js"></script>
<script>
StellarCheckout.ui.render('#elem', {
  currency: 'GBP',
  total: '10',
  to: 'GB5L45CNNM5I56YYH3FBA7QXUZGJL5CYR2GG7PS5WLT5FK4NEHXEUH73'
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