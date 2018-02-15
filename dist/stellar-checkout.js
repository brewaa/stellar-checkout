(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StellarCheckout"] = factory();
	else
		root["StellarCheckout"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	targetElem: {
		cssClass: 'stellar_checkout_container',
		elem: null,
		selector: ''
	},
	root: {
		selector: '.stellar_checkout',
		elem: null
	}
	// header: {
	// 	selector: '.stellar_checkout_header',
	// 	elem: null
	// },
	// formPanel: {
	// 	selector: '.stellar_checkout_form',
	// 	elem: null
	// },
	// paymentAwaitingPanel: {
	// 	selector: '.stellar_checkout_payment_awaiting',
	// 	elem: null
	// },
	// paymentErrorPanel: {
	// 	selector: '.stellar_checkout_error',
	// 	elem: null
	// },
	// // paymentCompletePanel: {
	// // 	selector: '.stellar_checkout_complete',
	// // 	elem: null
	// // },
	// goBackLink: {
	// 	selector: '.stellar_checkout_goback',
	// 	elem: null
	// },
	// total: {
	// 	selector: '#stellarCheckoutTotal',
	// 	elem: null
	// },
	// amount: {
	// 	selector: '#stellarCheckoutAmount',
	// 	elem: null
	// },
	// publicKey: {
	// 	selector: '#stellarCheckoutPublicKey',
	// 	elem: null
	// },
	// submitButton: {
	// 	selector: '#stellarCheckoutSubmitButton',
	// 	elem: null
	// }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Version = __webpack_require__(20)
var Regex = __webpack_require__(21)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!Version.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElementFromHTML;

function createElementFromHTML(tagName, htmlString) {
  var div = document.createElement(tagName);
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mainTemplate;
/* harmony export (immutable) */ __webpack_exports__["b"] = paymentAwaitingTemplate;
/* harmony export (immutable) */ __webpack_exports__["c"] = paymentCompleteTemplate;
/* harmony export (immutable) */ __webpack_exports__["d"] = paymentErrorTemplate;
/* harmony export (immutable) */ __webpack_exports__["e"] = paymentFormTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_main_template_html__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_main_template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__templates_main_template_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_payment_awaiting_mustache_html__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_payment_awaiting_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__templates_payment_awaiting_mustache_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_payment_complete_mustache_html__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_payment_complete_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__templates_payment_complete_mustache_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_payment_error_mustache_html__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_payment_error_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__templates_payment_error_mustache_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_payment_form_mustache_html__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_payment_form_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__templates_payment_form_mustache_html__);






function mainTemplate() {
	return __WEBPACK_IMPORTED_MODULE_0__templates_main_template_html___default.a;
};

function paymentAwaitingTemplate() {
	return __WEBPACK_IMPORTED_MODULE_1__templates_payment_awaiting_mustache_html___default.a;
};

function paymentCompleteTemplate() {
	return __WEBPACK_IMPORTED_MODULE_2__templates_payment_complete_mustache_html___default.a;
};

function paymentErrorTemplate() {
	return __WEBPACK_IMPORTED_MODULE_3__templates_payment_error_mustache_html___default.a;
};

function paymentFormTemplate() {
	return __WEBPACK_IMPORTED_MODULE_4__templates_payment_form_mustache_html___default.a;
};

/* unused harmony default export */ var _unused_webpack_default_export = ({
	main: __WEBPACK_IMPORTED_MODULE_0__templates_main_template_html___default.a,
	paymentAwaiting: __WEBPACK_IMPORTED_MODULE_1__templates_payment_awaiting_mustache_html___default.a,
	paymentComplete: __WEBPACK_IMPORTED_MODULE_2__templates_payment_complete_mustache_html___default.a,
	paymentError: __WEBPACK_IMPORTED_MODULE_3__templates_payment_error_mustache_html___default.a,
	paymentForm: __WEBPACK_IMPORTED_MODULE_4__templates_payment_form_mustache_html___default.a
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(13)

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__(42);
Hogan.Template = __webpack_require__(43).Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


var _network;

function createDto(options) {

	_network = setNetwork(options.env);

	var dto = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO;
	dto.env = options.env;
	dto.invoice.currency = options.currency;
	dto.invoice.total = options.total;
	dto.payment.asset = StellarSdk.Asset.native();
	dto.payment.fee = .00001;
	dto.payment.memo = options.memo;
	dto.payment.network = _network.network;
	dto.payment.to = options.destinationKey;

	return dto;
};

function buildTransaction(dto) {
	var server = new StellarSdk.Server(_network.uri);
	var destinationId = dto.payment.to;
	var transaction;

	return server.loadAccount(destinationId)
	.catch(StellarSdk.NotFoundError, function (error) {
		throw new Error('The destination account does not exist!');
	})
	.then(function() {
		return server.loadAccount(dto.payment.from);
	})
	.then(function(sourceAccount) {
		var builder = new StellarSdk
		.TransactionBuilder(sourceAccount)
		.addOperation(StellarSdk.Operation.payment({
			destination: destinationId,
			asset: dto.payment.asset,
			amount: dto.payment.amount
		}));
		if (dto.payment.memo) {
			builder.addMemo(StellarSdk.Memo.text(dto.payment.memo));	
		}
		transaction = builder.build();
		return transaction;
	});
};

function receivePayment(dto, callback) {
	var server = new StellarSdk.Server(_network.uri);
	var accountId = dto.payment.to;
	var payments = server
		.payments()
		.forAccount(accountId)
		.cursor('now');

	var closeStream = payments.stream({
	  onmessage: function(payment) {
	  	console.log(payment);
	    if (payment.to !== accountId) {
	      return;
	    }
	    var asset = (payment.asset_type === 'native') ? 'lumens' : payment.asset_code + ':' + payment.asset_issuer;
	    var result = verifyPayment(dto, payment);
	    if (result) {
	    	callback.call(this, null, payment);	
	    	closeStream();
	    }
	  },
	  onerror: function(error) {
	    console.error('Error in payment stream');
	  }
	});
};

function setNetwork(env) {
	var uri;
	var network = window.StellarSdk.Network;
	if (typeof env === 'string' && env.toLowerCase() === 'production') {
		uri = 'https://horizon.stellar.org';
		network.usePublicNetwork();
	} else {
		uri = 'https://horizon-testnet.stellar.org';
		network.useTestNetwork();
	}
	return  {
		network: network.current(),
		uri: uri
	};
};

function verifyPayment(dto, payment) {
	var amountIsEqual = dto.payment.amount === payment.amount;
	var publicKeyIsEqual = dto.payment.from === payment.from;
	var result = amountIsEqual && publicKeyIsEqual;
	return result;
};

/* harmony default export */ __webpack_exports__["a"] = ({
	buildTransaction: buildTransaction,
	createDto: createDto,
	receivePayment: receivePayment
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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BBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB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Vqz51fe8QoAAAQIEsgsMZA8VSYAAAQIECBDoX4FbbvrfTc974UvvqyXJXyS12sD/XTQuXTyy5t4jP33phQ/2r4yREyBAgEC7BOK/MR4ECBAgQIAAAQJZBWYcNWfapCm1X1+zad2tX7700s1ZjxNHgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTGK1AbbwOOJ0CgvQL1en3i9OnTzxweHj573rx5P29v61ojQIAAAQIECBAgQKCsAhPKmpi8CPSrQBTnp9RqteOnTJny3WXLlv1VvzoYNwECBAgQIECAAIF+E7CC3m8zbrylFjj33HN/f8KECSsjyYEdEj1/1apVx8fK+pYdXvMjAQIECBAgQIAAAQI9JqBA77EJNZzqCpxxxhkHxeOmGMFTdx5Fmqa3NZvNN8yePfs7O7/ndwIECBAgQIAAAQIEekPAFvfemEej6AGBxzzmMefFMJ66q6HElvdnDwwMfDNW2N8dK+n+3u4KyWsECBAgQIAAAQIEKi5gBb3iEyj93hCIwvvo2Np+QZbRxGr6tWNjY2+eO3fuvVnixRAgQIAAAQIECBAgUA0BK3HVmCdZ9rDAkiVLDovifEGOIb584sSJv5YjXigBAgQIECBAgAABAhUQmFiBHKVIoGcFZsyYMRDF9mUxwAOzDjK2u586c+bMb2aNF0eAAAECBAgQIECAQDUErKBXY55k2aMCRxxxxKkxtN/NMbyvXXPNNR/OES+UAAECBAgQIECAAIGKCFhBr8hESbP3BJYuXfq7sRp+UtaRxbnnG4aHh984ODjYyHqMOAIECBAgQIAAAQIEqiNgBb06cyXTHhI488wzD4zzzltb23e83/keRxgF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Z3pEkfv1a6+99kOZggsMWrBgwVOj+XOzdhF5j8XjyDhnflPWY8QRIECAAAECBAgQIECgHQIK9HYo9ngbcd5565Zkp2QdZhS5GxqNxhsHBwcbWY8pIm7GjBkD++2332XxxcJjsrYfudfnzp37razx4ggQIECAAAECBAgQINAuAQV6uyR7tJ2zzjrrgChwL49nngsKzpozZ85d3SY54ogj3ht5vyxrHlGcX7dy5cozssaLI0CAAAECBAgQIECAQDsFFOjt1OzBth71qEctjiL3GVmHFkXulccee2zrauldfcR55y+NBN6fI4kHWxe06/aqf458hRIgQIAAAQIECBAg0GMCCvQem9B2Die2tv9tXBjubTna/Mnw8PDMHPGFhJ555pkHRsOtre2ZV/3ji4Vj44J29xSSkEYJECBAgAABAgQIECCQQSBzAZOhLSE9JDB//vwnRXH+saxDigI3FqCbb5o3b976rMcUFXfggQcuieL8aTnavyxW/S/PES+UAAECBAgQIECAAAECbRewgt520p5osLb//vtfEiN5fI7RnBEr0F/NEV9IaNyr/XVRnL8lR+N3j46OHpsjXigBAgQIECBAgAABAgQKEbCCXghrtRuN87dPiBG8KusoYvX8f2+66aZ61vii4mJL/pOjOD8vR/uNuKXaG+Oq7RtyHCOUAAECBAgQIECAAAEChQgo0AthrW6jUeQeHkXu6VlHEMX55liBPnLFihWjWY8pIq5er8eO/AmfiLYfl7X92JL/4bja/NeyxosjQIAAAQIECBAgQIBAkQK2uBepW7G247zz/aM4b52LPTlr6lGgHxePO7LGFxUXBXozcvnXeG7N0kfEXb969epTs8SKIUCAAAECBAgQIECAQCcEFOidUK5IH1OmTDknCvTfzJHu1bNmzfp4jvhCQ+NCb+fGlvUXRic376mjKM43RdyRUdSP7SnOewQIECBAgAABAgQIEOikgAK9k9ol7mv58uWvieI88y3S0q1w4AAACoZJREFUosi9r9FovL1sQ4rzyW9ZtWrViyO/+ZFbuqv84r05EffjXb3nNQIECBAgQIAAAQIECHRLoNatjvVbHoGFCxceMnny5O9FgT4tY1ZR46Z/HCvW/5UxvithcbG7V0fHl8S4Dn04gch7MPJ+3cO/+5MAAQIECBAgQIAAAQJlEbCCXpaZ6GIeUZxfnKM4T6LIPafsxXmLs5VjXAjut+PHq7fz3ht//vP2n/1BgAABAgQIECBAgACBUglYQS/VdHQ+mdjaPjd6XZS15yjObxoaGnpJnL89kvWYMsTF1enfHsX6HXHV9pVlyEcOBAgQIECAAAECBAgQ2FlAgb6zSB/9HsX5c2O4/xvPKVmGHcX51tZF2FrneWeJF0OAAAECBAgQIECAAAEC2QVscc9u1VORixcv3i8G1LqlWqbivDX4KNBPUJy3JDwIECBAgAABAgQIECDQfgEFevtNK9HixIkTz4hEn5c12SjOvxC3VFuWNV4cAQIECBAgQIAAAQIECOQTUKDn8+qJ6Dgf+4/jonDH5RjMqoh/W454oQQIECBAgAABAgQIECCQU0CBnhOs6uFnn3321AkTJlwc48h8/YFYPT9q5syZQ1Ufu/wJECBAgAABAgQIECBQZgEFeplnp4DcDjjggAui2SdmbTqK8yVxu7IvZo0XR4AAAQIECBAgQIAAAQL7JqBA3ze3Sh4VW9tb9wD/66zJR3H+g7il2ruzxosjQIAAAQIECBAgQIAAgX0XyLzNed+7cGQZBJYtW/bsOI/8O5HLo7LkE8X5cMS9OFbPv5slXgwBAgQIECBAgAABAgQIjE/ACvr4/Cpx9DHHHDMpivPWLdUyFeetQUWB/i+K80pMryQJECBAgAABAgQIEOgRAQV6j0zknobxghe84PR4/3f2FLPTe/8Zt1RbuNNrfiVAgAABAgQIECBAgACBAgUU6AXilqHpOO/8iFgNPyFHLmu2bdv2lohPcxwjlAABAgQIECBAgAABAgTGKeAc9HEClvnwOO/8cbG1vXUO+a9lzTOK+dfG1vbPZo0XR4AAAQIECBAgQIAAAQLtEbCC3h7HsrZyfiSWpzhfoTgv61TKiwABAgQIECBAgACBXhdQoPfoDMfW9rfG6vmMrMOLlfPb45Zq87LGiyNAgAABAgQIECBAgACB9goo0NvrWZrWJkyY8OQoupsZExqNuDfU6/UtGeOFESBAgAABAgQIECBAgECbBRTobQYtS3MzZ848rdFovCqK9J9myOkDsbX92xnihBAgQIAAAQIECBAgQIBAQQIK9IJgy9DsnDlzVkYez4/np/aQz8pVq1Z9dA/ve4sAAQIECBAgQIAAAQIEOiDgKu4dQC5DF3FF97fEOelLIpcDH84nVtfXxfP5cc/zLKvsDx/mTwIECBAgQIAAAQIECBAoQMAKegGoZWwytrBfEsX44fH85sP5NZvNdyjOH9bwJwECBAgQIECAAAECBLorMNDd7vXeSYEvfOEL6170ohddcsABB7S6/VEU5x/pZP/6IkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ6B2B/x9mSpdihC5I0AAAAABJRU5ErkJggg=="

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = ({
	root: {
		elem: null,
		selector: '.stellar_checkout_form'
	},
	header: {
		selector: '.stellar_checkout_header',
		elem: null
	},
	formPanel: {
		selector: '.stellar_checkout_form',
		elem: null
	},
	total: {
		selector: '#stellarCheckoutTotal',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__events__["c" /* onValidateTotal */],
			input: __WEBPACK_IMPORTED_MODULE_0__events__["c" /* onValidateTotal */]
		}
	},
	amount: {
		selector: '#stellarCheckoutAmount',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__events__["a" /* onValidateAmount */],
			input: __WEBPACK_IMPORTED_MODULE_0__events__["a" /* onValidateAmount */]
		}
	},
	publicKey: {
		selector: '#stellarCheckoutPublicKey',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__events__["b" /* onValidatePublicKey */],
			input: __WEBPACK_IMPORTED_MODULE_0__events__["b" /* onValidatePublicKey */]
		}
	},
	submitButton: {
		selector: '#stellarCheckoutSubmitButton',
		elem: null
	}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setButtonState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


function setButtonState(target, state)  {
	switch(state) {
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.DISABLED:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = 'Enter payment info';
			break;
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.NORMAL:
			target.removeAttribute('disabled');
			target.innerHTML = 'Send payment';
			break;
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.IN_PROGRESS:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = 'Confirming transaction...';
			break;
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.PAYMENT_COMPLETE:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = 'Payment complete';
			break;
		default:
			break;
	}
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_elems__ = __webpack_require__(1);




class BaseView {

	constructor(elems, template) {
		this.dto = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO;
		this.elems = elems;
		this.template = template;
		this.create();
	}

	create() {
		// Compile the mustache template
		var template = this.template();
		var compiledHtml = template(this.dto);

		// Append the compiled HTML to the DOM
		__WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].root.elem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["a" /* createElementFromHTML */])('div', compiledHtml));

		// Get a reference to all elems in this view
		for (var key in this.elems) {
			var item = this.elems[key];
			item.elem = __WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].root.elem.querySelector(item.selector);
			for (var ev in item.events) {
				item.elem.addEventListener(ev, item.events[ev]);
			}
		}

		console.log(this.elems);
	}

	destroy() {
		// var keys = Object.keys(this.elems).reverse();
		// for (var key in keys) {
		// 	this.elems[key].elem.parentNode.removeChild(this.elems[key].elem);
		// }
		// for (var key in keys) {
		// 	this.elems[key].pop();
		// }
		if (this.elems.root) {
			this.elems.root.elem.parentNode.removeChild(this.elems.root.elem);
		}
	}

	hide() {
		if (this.elems.root) {
			this.elems.root.elem.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
		}
	}

	show() {
		if (this.elems.root) {
			this.elems.root.elem.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
		}
	}

	update() {
		
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseView;
;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = prevView;
/* unused harmony export nextView */
/* unused harmony export showView */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_style_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_form_elems__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fonts__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buttons__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_payment_form_view__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_payment_awaiting_view__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_payment_complete_view__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_state__ = __webpack_require__(23);

















function create(options) {
	return new Promise(function(resolve, reject) {
		var targetElem = __WEBPACK_IMPORTED_MODULE_3__elems__["a" /* default */].targetElem.elem;
		if (!targetElem) {
			return;
		}

		targetElem.classList.add(__WEBPACK_IMPORTED_MODULE_3__elems__["a" /* default */].targetElem.cssClass);
		
		targetElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* createElementFromHTML */])('div', Object(__WEBPACK_IMPORTED_MODULE_6__template__["a" /* mainTemplate */])()));

		var root = targetElem.querySelector(__WEBPACK_IMPORTED_MODULE_3__elems__["a" /* default */].root.selector);
		
		//var header = targetElem.querySelector(elems.header.selector);
		
		__WEBPACK_IMPORTED_MODULE_3__elems__["a" /* default */].root.elem = root;
		
		// Initialize the views
		// for (var i = 0, len = viewState.views.length; i < len; i++) {
		// 	viewState.views[i].view = new viewState.views[i].view(constants.DTO);
		// };

		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentFormView', view: new __WEBPACK_IMPORTED_MODULE_8__views_payment_form_view__["a" /* PaymentFormView */]() });
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentAwaitingView', view: new __WEBPACK_IMPORTED_MODULE_9__views_payment_awaiting_view__["a" /* PaymentAwaitingView */]() });
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentCompleteView', view: new __WEBPACK_IMPORTED_MODULE_10__views_payment_complete_view__["a" /* PaymentCompleteView */]() });

		// var formPanel = targetElem.querySelector(elems.formPanel.selector);
		// var goBackLink = targetElem.querySelector(elems.goBackLink.selector);
		// var total = targetElem.querySelector(elems.total.selector);
		// var amount = targetElem.querySelector(elems.amount.selector);
		// var publicKey = targetElem.querySelector(elems.publicKey.selector);
		// var submitButton = targetElem.querySelector(elems.submitButton.selector);

		// elems.header.elem = header;
		// elems.formPanel.elem = formPanel;
		// elems.goBackLink.elem = goBackLink;
		// elems.total.elem = total;
		// elems.amount.elem = amount;
		// elems.publicKey.elem = publicKey;
		// elems.submitButton.elem = submitButton;

		//constants.CMCCLIENT = new CoinMarketCapClient(elems.amount.elem, options); // todo: refactor this and the one in ./ui/events

		
		//var viewPaymentAwaiting = new PaymentAwaitingView(constants.DTO);

		/* ---- */

		// elems.total.elem.addEventListener('blur', onValidateTotal);
		// elems.total.elem.addEventListener('input', onValidateTotal);

		// elems.amount.elem.addEventListener('blur', onValidateAmount);
		// elems.amount.elem.addEventListener('input', onValidateAmount);

		// elems.publicKey.elem.addEventListener('blur', onValidatePublicKey);
		// elems.publicKey.elem.addEventListener('input', onValidatePublicKey);

		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = options.total;
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency = options.currency;
		// constants.DTO.payment.amount = constants.CMCCLIENT.priceInLumens;
		//constants.DTO.payment.from = elems.publicKey.elem.value;
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.to = options.destinationKey;

		// //todo: add a configuration check for options.total
		// var hasValidTotal = false;
		// var dtoTotal = constants.DTO.invoice.total;
		// if (dtoTotal && dtoTotal.length > 0) {
		// 	elems.total.elem.setAttribute('value', dtoTotal);
		// 	elems.total.elem.setAttribute('disabled', 'disabled');
		// 	var currencyLabel = elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.invoice.currency;
		// 	hasValidTotal = true;
		// 	elems.total.elem.dispatchEvent(new Event('input'));
		// }

		// if (hasValidTotal) {
		// 	constants.CMCCLIENT.fetch();
		// }

		nextView();

		setTimeout(function() {
			document.querySelector('.stellar_checkout_overlay').classList.add('loaded');
			document.querySelector('.stellar_checkout_form').classList.add('loaded');
		}, 1000);

		resolve();
	});
};

function createSubmitHandler(callBack) {
	var btn = __WEBPACK_IMPORTED_MODULE_4__payment_form_elems__["a" /* default */].submitButton.elem;
	if (btn) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			Object(__WEBPACK_IMPORTED_MODULE_7__buttons__["a" /* setButtonState */])(this, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.IN_PROGRESS)
			callBack.call(this);
		});
		//elems.submitButton.elem = btn;
	};
};

 // todo: set boundaries

function prevView() {
	if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
	}
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex--;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views[__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex].view;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
}

function nextView() {
	if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
	}
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex++;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views[__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex].view;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
}

function showView(viewName) {
	var vw = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.find(function(el) {
		return el.name == viewName;
	});
	var idx = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.indexOf(vw);
	if (vw !== -1) {
		if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
			__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
		}
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex = idx;
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = vw.view;
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	create: create,
	createSubmitHandler: createSubmitHandler,
	nextView: nextView,
	prevView: prevView,
	showView: showView
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleValidationFeedback;
/* harmony export (immutable) */ __webpack_exports__["b"] = validateAmount;
/* harmony export (immutable) */ __webpack_exports__["c"] = validatePublicKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = validateTotal;
/* harmony export (immutable) */ __webpack_exports__["e"] = validateTransactionDto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_form_elems__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validationMessage__ = __webpack_require__(33);





function toggleValidationFeedback(target, test) {
	if (!test.result) {
		target.parentNode.classList.remove('valid');
		target.parentNode.classList.add('error');
		target.parentNode.querySelector('.error_msg').innerHTML = test.errors[0].msg;
	} else {
		target.parentNode.classList.add('valid');
		target.parentNode.classList.remove('error');
		target.parentNode.querySelector('.error_msg').innerHTML = '';
	}
	var formIsValid = validateTransactionDto(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].DTO);
	if (formIsValid.result) {
		Object(__WEBPACK_IMPORTED_MODULE_0__buttons__["a" /* setButtonState */])(__WEBPACK_IMPORTED_MODULE_2__payment_form_elems__["a" /* default */].submitButton.elem, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].SUBMIT_BUTTON_STATE.NORMAL);
	} else {
		Object(__WEBPACK_IMPORTED_MODULE_0__buttons__["a" /* setButtonState */])(__WEBPACK_IMPORTED_MODULE_2__payment_form_elems__["a" /* default */].submitButton.elem, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].SUBMIT_BUTTON_STATE.DISABLED);
	}
};

function validateAmount() {
	var result = {
		errors: [],
		result: true
	};
	var amt = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].DTO.payment.amount;
	if (isNaN(amt)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_3__validationMessage__["a" /* ValidationMessage */]('amount is not a number', __WEBPACK_IMPORTED_MODULE_2__payment_form_elems__["a" /* default */].amount));
		result.result = false;
	}
	if (amt <= 0) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_3__validationMessage__["a" /* ValidationMessage */]('amount must be greater than zero', __WEBPACK_IMPORTED_MODULE_2__payment_form_elems__["a" /* default */].amount));
		result.result = false;
	}
	return result;
};

function validatePublicKey(key) {
	var result = {
		errors: [],
		result: true
	};
	if (!key || !window.StellarSdk.StrKey.isValidEd25519PublicKey(key)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_3__validationMessage__["a" /* ValidationMessage */]('public key is invalid'));
		result.result = false;
	}
	return result;
};

function validateTotal() {
	var result = {
		errors: [],
		result: true
	};
	var total = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].DTO.invoice.total;
	if (isNaN(total)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_3__validationMessage__["a" /* ValidationMessage */]('total is not a number', __WEBPACK_IMPORTED_MODULE_2__payment_form_elems__["a" /* default */].total));
		result.result = false;
	}
	if (total <= 0) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_3__validationMessage__["a" /* ValidationMessage */]('total must be greater than zero', __WEBPACK_IMPORTED_MODULE_2__payment_form_elems__["a" /* default */].total));
		result.result = false;
	}
	return result;
};

function validateTransactionDto() {
	var result = {
		errors: [],
		result: true
	};

	var dto = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].DTO;

	var a = validateAmount(dto.payment.amount);
	result.result = result.result && a.result;
	result.errors = [...result.errors,...a.errors];

	// asset

	// publicKey
	var b = validatePublicKey(dto.payment.from);
	result.result = result.result && b.result;
	result.errors = [...result.errors,...b.errors];

	//destinationKey
	var c = validatePublicKey(dto.payment.to);
	result.result = result.result && c.result;
	result.errors = [...result.errors,...c.errors];

	// memo

	// env

	return result;
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export redirect */
/* harmony export (immutable) */ __webpack_exports__["b"] = useRedirectUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = toQueryString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(18);


function redirect(url, qs) {
	if (window) {
		window.location.href = url + qs;	
	}
};

function useRedirectUrl(options, result) {
	if (options.redirectUrl) {
		var url = options.redirectUrl;
		var qs = {
			hash: result.hash ? result.hash : result.transaction_hash ? result.transaction_hash : ''
		};
		qs = toQueryString(qs);
		if (url.indexOf('?') !== -1) {
			qs = Object(__WEBPACK_IMPORTED_MODULE_0__string__["a" /* replace */])(qs, '\\?', '&');
		}
		redirect(url, qs);
	}
};

function toQueryString(params) {
	var s = '';
	for (var p in params) {
		s += s.length === 0 ? '?' : '&';
		s += p + '=' + encodeURIComponent(params[p]);
	}
	return s;
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = replace;
function replace(text, search, replacement) {
    return text.replace(new RegExp(search, 'g'), replacement);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__(14)

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2)
var ECCode = __webpack_require__(19)
var ECLevel = __webpack_require__(14)
var Mode = __webpack_require__(3)
var isArray = __webpack_require__(13)

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!exports.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!exports.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ').)+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	currentIndex: -1,
	currentView: null,
	views: []
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_checker__ = __webpack_require__(82);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].APP.name,
	ui: {
		render: function(selector, opts) {
			this.selector = selector;
			this.options = {};
			this.options.selector = selector;
			this.options.currency = opts.currency;
			this.options.destinationKey = opts.destinationKey;
			this.options.env = opts.env || 'development';
			this.options.memo = opts.memo;
			this.options.redirectUrl = opts.redirectUrl;
			this.options.onSubmit = opts.onSubmit;
			this.options.stylesheet = opts.stylesheet;
			this.options.total = opts.total;

			var self = this;

			// window.addEventListener('error', function(e) {
			// });

			// window.addEventListener('unhandledrejection', function(ev) {
			// 	console.log(ev);
			// });

			document.addEventListener('DOMContentLoaded', function() {

				Object(__WEBPACK_IMPORTED_MODULE_2__utils_config_checker__["a" /* validateConfig */])(self.options)
				.then(function() {
					Object(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* init */])(self.options);
				});

			});
		}
	}
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_stellarsdk_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_url__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_validate__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_buttons__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_payment_error__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_payment_complete__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_view_state__ = __webpack_require__(23);










// import {createPaymentAwaitingTemplate, showPaymentAwaitingProgress} from './ui/payment.awaiting';


function init(options) {

	var dto = __WEBPACK_IMPORTED_MODULE_2__utils_stellarsdk_helper__["a" /* default */].createDto(options);

	__WEBPACK_IMPORTED_MODULE_3__ui__["a" /* default */].create(options)
	.then(function() {

		__WEBPACK_IMPORTED_MODULE_3__ui__["a" /* default */].createSubmitHandler(function(e) {

			// Final sanity check for valid form
			var isValid = Object(__WEBPACK_IMPORTED_MODULE_5__ui_validate__["e" /* validateTransactionDto */])(dto);
			if (!isValid.result) {
				Object(__WEBPACK_IMPORTED_MODULE_6__ui_buttons__["a" /* setButtonState */])(__WEBPACK_IMPORTED_MODULE_1__ui_elems__["a" /* default */].submitButton.elem, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.DISABLED);
				return;
			}

			// 	// Show the awaiting payment page
			// 	createPaymentAwaitingTemplate(dto);
			__WEBPACK_IMPORTED_MODULE_3__ui__["a" /* default */].nextView('PaymentAwaitingView');


			// Watch for transactions sent to the destinationKey
			__WEBPACK_IMPORTED_MODULE_2__utils_stellarsdk_helper__["a" /* default */].receivePayment(dto, function(err, result) {
				// Handle error
				if (err) {
					// Pass error to onSubmit callback
					if (options.onSubmit && typeof options.onSubmit === 'function') {
						options.onSubmit.call(this, err);
					}
					return;	
				}
				// Show payment verification feedback
				__WEBPACK_IMPORTED_MODULE_9__ui_view_state__["a" /* default */].currentView.showProgress(result)
				.then(function() {
					if (options.redirectUrl) {
						// Use redirectUrl if configured
						Object(__WEBPACK_IMPORTED_MODULE_4__utils_url__["b" /* useRedirectUrl */])(options, result);
					}
					else if (options.onSubmit && typeof options.onSubmit === 'function') {
						// Call the onSubmit callback
						options.onSubmit.call(this, null, result);
					}
					else {
						// Show the payment complete page
						//showPaymentComplete();
						__WEBPACK_IMPORTED_MODULE_3__ui__["a" /* default */].showView('PaymentCompleteView');
					}
				});
			});
			
		});

	});

};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(30)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(28);
exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "/* STELLAR CHECKOUT */\r\n\r\n.stellar_checkout_container {\r\n    height: 98vh; /* todo: ugh vh */\r\n}\r\n\r\n.stellar_checkout {\r\n    position: relative;\r\n    font-family: monospace, monospace;\r\n\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/** OVERLAYS */\r\n\r\n.stellar_checkout_overlay,\r\n.stellar_checkout_payment_complete {\r\n    background-image: url(" + escape(__webpack_require__(9)) + ");\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    background-size: 50%;\r\n    background-repeat: no-repeat;\r\n    background-color: #fff;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: .4s;\r\n    top: 0;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout_overlay.loaded {\r\n    opacity: 0;\r\n    transform: scale3d(0, 0, 0);\r\n}\r\n\r\n.stellar_checkout_payment_complete {\r\n    background-position-y: 36%;\r\n}\r\n\r\n.stellar_checkout_payment_complete .message {\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 50%;\r\n    margin-left: -25%;\r\n    width: 50%;\r\n    font-weight: bold;\r\n    color: green;\r\n    text-transform: uppercase;\r\n    font-size: 2.4rem;\r\n    height: 25%;\r\n    margin-top: -12.5%;\r\n}\r\n\r\n/** ERRORS */\r\n\r\n.stellar_checkout_error {\r\n    position: absolute;\r\n    height: 100%;\r\n    transition: .4s;\r\n    top: 0;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, .76);\r\n}\r\n\r\n.stellar_checkout_error .inner {\r\n    background: #fff;\r\n    border-radius: .2rem;\r\n    border: .125rem solid #f80000;\r\n    color: #f80000;\r\n    display: flex;\r\n    height: 12rem;\r\n    margin-top: -4rem;\r\n    padding: .8rem;\r\n    position: absolute;\r\n    transition: .4s;\r\n    top: 48%;\r\n    width: 92%;\r\n    margin-left: 4%;\r\n}\r\n\r\n.stellar_checkout_error .close {\r\n    position: absolute;\r\n    top: .6rem;\r\n    right: 1.2rem;\r\n}\r\n\r\n.stellar_checkout_error .error_message {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n/** HEADER */\r\n\r\n.stellar_checkout_header {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: monospace, monospace;\r\n    justify-content: center;\r\n    padding: .8rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_goback {\r\n    font-size: 2rem;\r\n    left: 1.2rem;\r\n    position: absolute;\r\n    top: 1.2rem;\r\n}\r\n\r\n.stellar_checkout_header .alt {\r\n    /*display: none;*/\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout_header.payment_awaiting .alt > div {\r\n    flex-basis: 50%;\r\n    align-items: center;\r\n    display: flex;\r\n    font-family: monospace, monospace;\r\n    justify-content: center;\r\n}\r\n\r\n.stellar_checkout_header .qr_wrap,\r\n.stellar_checkout_header .status {\r\n}\r\n\r\n.stellar_checkout_header.payment_awaiting .alt {\r\n    display: flex;\r\n}\r\n\r\n    @media screen and (min-device-width: 636px) {\r\n        .stellar_checkout_header {\r\n            flex-direction: row;\r\n        }\r\n        .stellar_checkout_header .logo {\r\n            flex-basis: 33%;\r\n        }\r\n        .stellar_checkout_header .alt {\r\n            flex-grow: 1;\r\n            width: auto;\r\n        }\r\n        .stellar_checkout_header .alt > div {\r\n            flex-basis: 50%;\r\n        }\r\n    }\r\n\r\n.stellar_checkout_header .qr_wrap .qrcode {\r\n    max-height: 10rem;\r\n    max-width: 10rem;\r\n}\r\n\r\n.stellar_checkout_header .status {\r\n    background: #f8f8f8;\r\n    margin: .8rem .8rem .8rem 0;\r\n    text-transform: uppercase;\r\n    transition: .4s;\r\n}\r\n\r\n.stellar_checkout_header .status > span {\r\n    line-height: 1.6;\r\n    width: 50%;\r\n}\r\n\r\n.stellar_checkout_header .logo .rocket {\r\n    background: #fff;\r\n    border: .0625rem solid #eee;\r\n    border-radius: .4rem;\r\n    font-family: monospace, monospace;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    padding: .4rem;\r\n    width: 5.6rem;\r\n}\r\n\r\n.stellar_checkout_header .logo .app_name {\r\n    display: block;\r\n    padding: .4rem;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-family: monospace, monospace;\r\n}\r\n\r\n/* FORM */\r\n\r\n.stellar_checkout_form {\r\n    display: none;\r\n}\r\n\r\n.stellar_checkout_form.loaded {\r\n    display: block;\r\n}\r\n\r\n/* FORM FIELDS */\r\n\r\n.stellar_checkout .field {\r\n\tpadding: .8rem .4rem;\r\n    position: relative;\r\n\ttext-align: left;\r\n}\r\n\r\n.stellar_checkout .spinner {\r\n    position: absolute;\r\n    top: 30%;\r\n    right: .8rem;\r\n}\r\n\r\n.stellar_checkout .field label {\r\n\tcolor: #a0a0a0;\r\n    display: block;\r\n    font-size: .8rem;\r\n    letter-spacing: .075rem;\r\n    padding: .4rem .2rem;\r\n    text-transform: uppercase;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout .field .txtwrap {\r\n\tbackground: #f8f8f8;\r\n    border: .0625rem solid #eee;\r\n    border-radius: .2rem;\r\n    color: #000;\r\n    font-family: monospace, monospace;\r\n    height: 4rem;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout .field .txtwrap textarea {\r\n    overflow: hidden;\r\n    resize: none;\r\n}\r\n\r\n.stellar_checkout .field .currency {\r\n\tborder-right: .0625rem solid #ddd;\r\n    color: #a0a0a0;\r\n\tdisplay: block;\r\n    height: 100%;\r\n    line-height: 2.6;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 4rem;\r\n}\r\n\r\n.stellar_checkout .field .txtwrap--input {\r\n\theight: 2.8rem;\r\n}\r\n\r\n.stellar_checkout .field .txt {\r\n\tbackground: transparent;\r\n\tborder: 0;\r\n    font-family: monospace, monospace;\r\n\tfont-size: 1.25rem;\r\n    height: 100%;\r\n    outline: 0;\r\n    padding: .6rem .8rem;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.stellar_checkout .field .picker {\r\n    background: transparent;\r\n    border: 0;\r\n    font-size: 1rem;\r\n    height: 100%;\r\n    outline: 0;\r\n    padding: .6rem .8rem;\r\n    width: 99%;\r\n}\r\n\r\n.stellar_checkout .field textarea.txt {\r\n    font-size: 1.5rem;\r\n    padding: .6rem .4rem;\r\n    text-align: left;\r\n}\r\n\r\n.stellar_checkout .field .error {\r\n    border: 0.0625rem solid #f80000;\r\n    border-radius: .2rem;\r\n}\r\n\r\n.stellar_checkout .field .valid {\r\n    border: 0.0625rem solid #05ff05;\r\n    border-radius: .2rem;\r\n}\r\n\r\n.stellar_checkout .field .error_msg {\r\n    border-radius: .4rem;\r\n    left: 0;\r\n    padding: .4rem .4rem;\r\n    position: absolute;\r\n    transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n.stellar_checkout .field .error .error_msg {\r\n    color: #f80000;\r\n    top: 2.55rem;\r\n}\r\n\r\n/* BUTTONS */\r\n\r\n.stellar_checkout .button_row {\r\n\tpadding: .8rem .4rem;\r\n}\r\n\r\n.stellar_checkout .button_row button {\r\n\tbackground: #08b5e5;\r\n    border-color: #08b5e5;\r\n    border-radius: 3px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    min-height: 28px;\r\n    line-height: 26px;\r\n    outline: none;\r\n    overflow: hidden;\r\n    padding: .4rem .8rem;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    transition: .4s;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout textarea[disabled],\r\n.stellar_checkout textarea:disabled {\r\n    color: #000;\r\n}\r\n\r\n.stellar_checkout button[disabled],\r\n.stellar_checkout button:disabled {\r\n    opacity: 0.5;\r\n}\r\n\r\n/* PAYMENT AWAITING */\r\n\r\n.stellar_checkout_payment_awaiting .transaction_info {\r\n    line-height: 1.2;\r\n    color: #a0a0a0;\r\n    font-family: monospace, monospace;\r\n    font-size: .9rem;\r\n    padding: 0 .4rem;\r\n}\r\n\r\n.stellar_checkout_hidden {\r\n    display: none!important;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(31);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onValidateAmount;
/* harmony export (immutable) */ __webpack_exports__["b"] = onValidatePublicKey;
/* harmony export (immutable) */ __webpack_exports__["c"] = onValidateTotal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate__ = __webpack_require__(16);



function onValidateAmount(e) {
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.amount = e.target.value;
	Object(__WEBPACK_IMPORTED_MODULE_1__validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_1__validate__["b" /* validateAmount */])());
};

function onValidatePublicKey(e) {
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.from = e.target.value;
	Object(__WEBPACK_IMPORTED_MODULE_1__validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_1__validate__["c" /* validatePublicKey */])(e.target.value));
};

function onValidateTotal(e) {
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = e.target.value;
	Object(__WEBPACK_IMPORTED_MODULE_1__validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_1__validate__["d" /* validateTotal */])());
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CMCCLIENT.fetch();
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidationMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


function ValidationMessage(msg, elem, msgType) {
	this.elem = elem;
	this.msg = msg;
	this.msgType = msgType || __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].MESSAGE_TYPE.ERROR;
};

ValidationMessage.prototype.toString = function() {
	var messageType = this.msgType ? ' ' + this.msgType : '';
	return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + messageType + ' ' + this.msg;
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faSpinner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faSpinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faSpinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faChevronCircleLeft__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faChevronCircleLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faChevronCircleLeft__);




__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faChevronCircleLeft___default.a);
__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faSpinner___default.a);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export config */
/* unused harmony export icon */
/* unused harmony export noAuto */
/* unused harmony export layer */
/* unused harmony export text */
/* unused harmony export library */
/* unused harmony export dom */
/* unused harmony export parse */
/* unused harmony export findIconDefinition */
/*!
 * Font Awesome Free 5.0.5 by @fontawesome - http://fontawesome.com
 * License - http://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var domready = function (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;


  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.5"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

'use strict';



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;


var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;


  var mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

var styleParser = function (node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function (node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;


  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;


  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  return auto(false);
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;


      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;


  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? children = args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  layer: layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

var config = api$1.config;


/* harmony default export */ __webpack_exports__["a"] = (api$1);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(36)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'spinner', icon: [512, 512, [], "f110", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"] };

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'chevron-circle-left', icon: [512, 512, [], "f137", "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"] };

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div class=\"stellar_checkout\">\r\n\t<div class=\"stellar_checkout_overlay\"></div>\r\n</div>";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(41)
var H = __webpack_require__(7);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"stellar_checkout_payment_awaiting stellar_checkout_hidden\">\r\n\t<div class=\"stellar_checkout_header\">\r\n\t\t<span class=\"stellar_checkout_goback\">\r\n\t\t\t<i class=\"fas fa-chevron-circle-left\"></i>\r\n\t\t</span>\r\n\t\t<div class=\"logo\">\r\n\t\t\t<img alt=\"\" class=\"rocket\" src=\"" + __webpack_require__(9) + "\" />\r\n\t\t\t<span class=\"app_name\">stellar checkout</span>\r\n\t\t</div>\r\n\t\t<div class=\"alt\">\r\n\t\t\t<div class=\"qr_wrap\">\r\n\t\t\t\t<canvas class=\"qrcode\"></canvas>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"status\">\r\n\t\t\t\t<span>Awaiting Payment</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"transaction_info\">Complete this transaction by sending a payment with the following information:</div>\r\n\t<div class=\"field\">\r\n\t\t<label for=\"stellarCheckoutConfirmTo\">QR Code Format</label>\r\n\t\t<div class=\"txtwrap\">\r\n\t\t\t<select id=\"walletPicker\" class=\"picker\">\r\n\t\t\t\t<option value=\"destinationkey\">Merchant's Account ID (Public Key)</option>\r\n\t\t\t\t<option value=\"envelopexdr\">Envelope XDR</option>\r\n\t\t\t\t<option value=\"stargazer\">Stargazer Wallet</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"field\">\r\n\t\t<label for=\"stellarCheckoutConfirmTo\">To</label>\r\n\t\t<div class=\"txtwrap\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmTo\" class=\"txt\" type=\"text\" disabled>{{payment.to}}</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"field\">\r\n\t\t<label for=\"stellarCheckoutConfirmFrom\">From</label>\r\n\t\t<div class=\"txtwrap\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmFrom\" class=\"txt\" type=\"text\" disabled>{{payment.from}}</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"field\">\r\n\t\t<label for=\"stellarCheckoutConfirmAmount\">Amount</label>\r\n\t\t<div class=\"txtwrap txtwrap--input\">\r\n\t\t\t<input id=\"stellarCheckoutConfirmAmount\" class=\"txt\" type=\"text\" value=\"{{payment.amount}}\" disabled></input>\r\n\t\t\t<span class=\"currency\">XLM</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : Hogan);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : Hogan);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(45)
var H = __webpack_require__(7);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div class=\"stellar_checkout_payment_complete stellar_checkout_hidden\">\r\n<div class=\"message\">Payment complete</div>\r\n</div>";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(47)
var H = __webpack_require__(7);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div class=\"stellar_checkout_error\">\r\n\t<div class=\"inner\">\r\n\t\t<div class=\"error_message\">\r\n\t\t\t<a class=\"close\" href=\"#\">close</a>\r\n\t\t\t<div class=\"message\">{{message}}\r\n\t\t\t\t{{data.extras.result_codes.transaction}}<br />\r\n\t\t\t\t{{#data.extras.result_codes.operations}}\r\n\t\t\t\t\t<span>{{.}}</span>\r\n\t\t\t\t{{/data.extras.result_codes.operations}}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(49)
var H = __webpack_require__(7);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"stellar_checkout_form\">\r\n\t<div class=\"stellar_checkout_header\">\r\n\t\t<div class=\"logo\">\r\n\t\t\t<img alt=\"\" class=\"rocket\" src=\"" + __webpack_require__(9) + "\" />\r\n\t\t\t<span class=\"app_name\">stellar checkout</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_form_wrap\">\r\n\t\t<div class=\"field\">\r\n\t\t\t<label for=\"stellarCheckoutTotal\">Total</label>\r\n\t\t\t<div class=\"txtwrap txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutTotal\" class=\"txt\" type=\"text\" autocomplete=\"off\" value=\"{{invoice.total}}\" disabled></input>\r\n\t\t\t\t<span class=\"currency\">{{invoice.currency}}</span>\r\n\t\t\t\t<span class=\"error_msg\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"field\">\r\n\t\t\t<label for=\"stellarCheckoutAmount\">Amount</label>\r\n\t\t\t<div class=\"txtwrap txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutAmount\" class=\"txt\" type=\"text\" autocomplete=\"off\" value=\"{{payment.amount}}\" disabled></input>\r\n\t\t\t\t<span class=\"currency\">XLM</span>\r\n\t\t\t\t<span class=\"error_msg\"></span>\r\n\t\t\t\t<span class=\"spinner\"><i class=\"fas fa-spinner fa-spin\"></i></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"field\">\r\n\t\t\t<label for=\"stellarCheckoutPublicKey\">Your Public Key</label>\r\n\t\t\t<div class=\"txtwrap txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutPublicKey\" class=\"txt\" type=\"text\" autocomplete=\"off\" required></input>\r\n\t\t\t\t<span class=\"error_msg\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"button_row\">\r\n\t\t\t<button id=\"stellarCheckoutSubmitButton\" disabled>Enter payment info</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coinmarketcap_client__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_payment_form_elems__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_template__ = __webpack_require__(5);











class PaymentFormView extends __WEBPACK_IMPORTED_MODULE_0__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_5__ui_payment_form_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__ui_template__["e" /* paymentFormTemplate */]);
	}

	create() {
		super.create();
		// console.log(this.elems);

		__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].CMCCLIENT = new __WEBPACK_IMPORTED_MODULE_2__services_coinmarketcap_client__["a" /* CoinMarketCapClient */](
			__WEBPACK_IMPORTED_MODULE_5__ui_payment_form_elems__["a" /* default */].total.elem, 
			__WEBPACK_IMPORTED_MODULE_5__ui_payment_form_elems__["a" /* default */].amount.elem
		); // todo: refactor this and the one in ./ui/events

		this.elems.total.elem.dispatchEvent(new Event('input'));
		/* ---- */

		console.log(this.dto);

		// this.elems.total.elem.addEventListener('blur', onValidateTotal);
		// this.elems.total.elem.addEventListener('input', onValidateTotal);

		// this.elems.amount.elem.addEventListener('blur', onValidateAmount);
		// this.elems.amount.elem.addEventListener('input', onValidateAmount);

		// this.elems.publicKey.elem.addEventListener('blur', onValidatePublicKey);
		// this.elems.publicKey.elem.addEventListener('input', onValidatePublicKey);

		// constants.DTO.invoice.total = options.total;
		// constants.DTO.invoice.currency = options.currency;
		//constants.DTO.payment.amount = constants.CMCCLIENT.priceInLumens;
		// constants.DTO.payment.from = elems.publicKey.elem.value;
		// constants.DTO.payment.to = options.destinationKey;

		//todo: add a configuration check for options.total
		// var hasValidTotal = false;
		// var dtoTotal = constants.DTO.invoice.total;
		// if (dtoTotal && dtoTotal.length > 0) {
		// 	this.elems.total.elem.setAttribute('value', dtoTotal);
		// 	this.elems.total.elem.setAttribute('disabled', 'disabled');
		// 	var currencyLabel = this.elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.invoice.currency;
		// 	hasValidTotal = true;
		// 	this.elems.total.elem.dispatchEvent(new Event('input'));
		// }

		// if (hasValidTotal) {
		// 	//constants.CMCCLIENT.fetch();
		// }

	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();
	}

	update() {
		super.update();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentFormView;
;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CoinMarketCapClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatter__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_string__ = __webpack_require__(18);





function CoinMarketCapClient(totalElem, amountElem) {
	this.totalElem = totalElem;
	this.amountElem = amountElem;
	this.url = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].STELLAR_CHECKOUT_API_TICKER_URL,
	this.currency = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency;
	this.total = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total;
	this.data = [];
	this.priceInLumens = null;
	this.spinner = amountElem.parentNode.querySelector('.spinner');

	//var hasValidTotal = false;
	//if (this.total && this.total.length > 0) {
		//this.elems.total.elem.setAttribute('value', this.total);
		//this.elems.total.elem.setAttribute('disabled', 'disabled');
		//var currencyLabel = this.elems.total.elem.parentNode.querySelector('.currency').innerHTML = constants.DTO.invoice.currency;
		//hasValidTotal = true;
		//this.elems.total.elem.dispatchEvent(new Event('input'));
	//}

	if (this.total && this.total.length > 0) {
		this.fetch();
	}
}

CoinMarketCapClient.prototype.fetch = function() {
	var self = this;
	self.showProgress();
	return __WEBPACK_IMPORTED_MODULE_2__utils_http__["a" /* default */].request('GET', self.url, { currency: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency }, '', true)
	.then(function(response) {
		if (response) {
			var data = JSON.parse(response);
			if (data.length > 0) {
				var lumenPrice = data[0]['price_' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency.toLowerCase()];
				if (lumenPrice) {
					self.priceInLumens = self.calcPriceInLumens(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total, lumenPrice);
					var formattedPrice = Object(__WEBPACK_IMPORTED_MODULE_3__utils_string__["a" /* replace */])(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["a" /* default */].format(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["a" /* default */].FORMATS.DECIMAL7, self.priceInLumens), ',', '');
					self.amountElem.setAttribute('value', formattedPrice);
					self.amountElem.setAttribute('disabled', 'disabled');
					self.amountElem.dispatchEvent(new Event('input'));
					__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.total = self.priceInLumens;
				}
				self.data = data;
			}
			self.hideProgress();	
		}
		else {

		}
	});
};

CoinMarketCapClient.prototype.calcPriceInLumens = function(invoiceTotal, lumenPrice) {
	return invoiceTotal / lumenPrice;
};

CoinMarketCapClient.prototype.hideProgress = function() {
	this.spinner.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
};

CoinMarketCapClient.prototype.showProgress = function() {
	this.spinner.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const FORMATS = {
    CURRENCY: 'CURRENCY',
    CURRENCY_NO_FRACTION: 'CURRENCY_NO_FRACTION',
    DECIMAL: 'DECIMAL',
    DECIMAL7: 'DECIMAL7',
    DOUBLE: 'DOUBLE',
    PERCENT: 'PERCENT'
};

var formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

var formatCurrencyNoFraction = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

var formatDecimal = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 8,
    maximumFractionDigits: 8
});

var formatDecimal7 = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 7
});

var formatDouble = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function format(theFormat, num) {
    if (theFormat) {
        switch (theFormat) {
            case FORMATS.CURRENCY:
                return formatCurrency.format(num);
            case FORMATS.CURRENCY_NO_FRACTION:
                return formatCurrencyNoFraction.format(num);
            case FORMATS.DECIMAL:
                return formatDecimal.format(num);
            case FORMATS.DECIMAL7:
                return formatDecimal7.format(num);
            case FORMATS.DOUBLE:
                return formatDouble.format(num);
            case FORMATS.PERCENT:
                return formatDouble.format(num) + '%';
            default:
                break;
        }
    }
    return num;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    FORMATS: FORMATS,
    format: format,
    formatCurrency: formatCurrency,
    formatCurrencyNoFraction: formatCurrencyNoFraction,
    formatDecimal: formatDecimal,
    formatDecimal7: formatDecimal7,
    formatDouble: formatDouble
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url__ = __webpack_require__(17);


/* harmony default export */ __webpack_exports__["a"] = ({

	request: function httpRequest(method, url, params, body, accessToken) {
		method = method || 'GET';
		url = url || '';
		params = params || '';
		accessToken = accessToken;
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.addEventListener('load', function() {
				if (xhr.readyState === 4 && xhr.status === 200) {
					resolve(xhr.response);
				}  else {
					reject(Error(xhr.statusText));
				}
			});
			xhr.addEventListener('error', function() {
				reject(Error('http request failed (XHR error)'));						
			});
			if (typeof params === 'object') {
				params = Object(__WEBPACK_IMPORTED_MODULE_0__url__["a" /* toQueryString */])(params);
			}
			xhr.open(method, url+params);
			if (accessToken) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);	
			}
			xhr.send(body || '');
		}).catch(function(err) {
			console.log(err);
		})
	}

});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_template__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qrcode__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_wallet_format__ = __webpack_require__(78);









class PaymentAwaitingView extends __WEBPACK_IMPORTED_MODULE_0__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__ui_template__["b" /* paymentAwaitingTemplate */]);
	}

	create() {
		super.create();
		//if (!thisElems.root.elem) {
			// Load the mustache template
			//var template = paymentAwaitingTemplate();
			//var compiledHtml = template(dto);

			// Append to DOM
			//elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

			// Add the element to elems
			//var paymentAwaitingPanel = document.querySelector(elems.paymentAwaitingPanel.selector);
			//elems.paymentAwaitingPanel.elem = paymentAwaitingPanel;	
		

			// QR Code
			var qrCodeCanvas = __WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__["a" /* default */].root.elem.querySelector('.qrcode');

			__WEBPACK_IMPORTED_MODULE_5_qrcode___default.a.toCanvas(qrCodeCanvas, this.dto.payment.to, function (error) { // todo: standardized format that popular wallets use for payment data
				if (error) {
					console.error(error);
				}
			});

			var self = this;

			// Wallet picker
			var walletPicker = __WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__["a" /* default */].root.elem.querySelector('#walletPicker');
			walletPicker.addEventListener('change', function(e) {
				var el = e.target;
				var data = self.dto.payment.to;
				var format = el.options[el.selectedIndex].value;
				if (format) {
					__WEBPACK_IMPORTED_MODULE_6__utils_wallet_format__["a" /* default */][format](self.dto).then(function(result) {
						__WEBPACK_IMPORTED_MODULE_5_qrcode___default.a.toCanvas(qrCodeCanvas, JSON.stringify(result), function (error) {
							if (error) {
								console.error(error);
							}
						});
					});
				}
			});

			// Add the goBackLink event handler
			//thisElems.goBackLink.elem.addEventListener('click', function() {
				//hidePaymentAwaitingTemplate.call(this);
			//	self.hide()
			//});
		//}
		
		// Show the payment await page	
		//showPaymentAwaitingTemplate();
	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();
		this.update();
	}

	update() {
		super.update();
		__WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmTo.elem.value = this.dto.payment.to;
		__WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmFrom.elem.value = this.dto.payment.from;
		__WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmAmount.elem.value = this.dto.payment.amount;
	}

	showProgress() {
		return new Promise(function(resolve) {
			// var statusElem = thisElems.header.elem.querySelector('.status');
			var statusMsgs = [
				'transaction received',
				'processing transaction',
				'verifying transaction',
				'payment complete'
			];
			var i = 0,
			increment = 2000,
			interval = setInterval(function() {
				console.log(statusMsgs[i]);
				__WEBPACK_IMPORTED_MODULE_3__ui_payment_awaiting_elems__["a" /* default */].statusElem.elem.innerHTML = statusMsgs[i];
				if (i == statusMsgs.length-1) {
					clearInterval(interval);
					resolve();
				}
				i++;
			}, increment);
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentAwaitingView;
;

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["a"] = ({
	root: {
		elem: null,
		selector: '.stellar_checkout_payment_awaiting'
	},
	header: {
		selector: '.stellar_checkout_header',
		elem: null
	},
	statusElem: {
		selector: '.stellar_checkout_header .alt .status',
		elem: null
	},
	goBackLink: {
		selector: '.stellar_checkout_goback',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* prevView */]
		}
	},
	walletPicker: {
		selector: 'select.picker',
		elem: null
	},
	stellarCheckoutConfirmTo: {
		selector: '#stellarCheckoutConfirmTo',
		elem: null
	},
	stellarCheckoutConfirmFrom: {
		selector: '#stellarCheckoutConfirmFrom',
		elem: null
	},
	stellarCheckoutConfirmAmount: {
		selector: '#stellarCheckoutConfirmAmount',
		elem: null
	},
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var canPromise = __webpack_require__(57)
var QRCode = __webpack_require__(60)
var CanvasRenderer = __webpack_require__(76)
var SvgRenderer = __webpack_require__(77)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var G = __webpack_require__(58)

module.exports = function() {
  return (
    typeof G.Promise === 'function' &&
    typeof G.Promise.prototype.then === 'function'
  )
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
module.exports = (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6)
var Utils = __webpack_require__(2)
var ECLevel = __webpack_require__(14)
var BitBuffer = __webpack_require__(61)
var BitMatrix = __webpack_require__(62)
var AlignmentPattern = __webpack_require__(63)
var FinderPattern = __webpack_require__(64)
var MaskPattern = __webpack_require__(65)
var ECCode = __webpack_require__(19)
var ReedSolomonEncoder = __webpack_require__(66)
var Version = __webpack_require__(20)
var FormatInfo = __webpack_require__(69)
var Mode = __webpack_require__(3)
var Segments = __webpack_require__(70)
var isArray = __webpack_require__(13)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (!maskPattern) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),
/* 61 */
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6)

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__(2).getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__(2).getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6)
var Polynomial = __webpack_require__(67)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6)
var GF = __webpack_require__(68)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6)

var EXP_TABLE = new Buffer(512)
var LOG_TABLE = new Buffer(256)

/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2)

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)
var NumericData = __webpack_require__(71)
var AlphanumericData = __webpack_require__(72)
var ByteData = __webpack_require__(73)
var KanjiData = __webpack_require__(74)
var Regex = __webpack_require__(21)
var Utils = __webpack_require__(2)
var dijkstra = __webpack_require__(75)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6)
var Mode = __webpack_require__(3)

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)
var Utils = __webpack_require__(2)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(22)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(22)

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + '>' + bg + path + '</svg>'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_stellarsdk_helper__ = __webpack_require__(8);



function toDestinationKey(dto) {
	return new Promise(function(resolve) {
		resolve(dto.payment.to);
	});
};

function toEnvelopeXdr(dto) {
	return new Promise(function(resolve) {
		__WEBPACK_IMPORTED_MODULE_1__utils_stellarsdk_helper__["a" /* default */].buildTransaction(dto)
		.then(function(result) {
			resolve(result.toEnvelope().toXDR('base64'));	
		});
	});
};

function toStarGazer(dto) {
	return new Promise(function(resolve) {
		var result = {
			"stellar": {
		        "payment": {
		            "destination":  dto.payment.to,
		            "network":      getHash(dto.payment.network._networkPassphrase),
		            "amount":       dto.payment.amount,
		            "asset": {
		                "code":     dto.payment.asset.code,
		                "issuer":   dto.payment.asset.issuer
		            }
		        }
		    }
		};
	    if (dto.payment.memo) {
	    	result.stellar.payment.memo = {
                "type":     'MemoText',
                "value":    dto.payment.memo
            };
	    }
		resolve(result);
	});
};

function getHash(passphrase) {
    return new StellarSdk.Network(passphrase)
    .networkId().toString('hex').slice(0, 8);
};

/* harmony default export */ __webpack_exports__["a"] = ({
	destinationkey: toDestinationKey,
	envelopexdr: toEnvelopeXdr,
	stargazer: toStarGazer
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_template__ = __webpack_require__(5);









class PaymentCompleteView extends __WEBPACK_IMPORTED_MODULE_0__base_view__["a" /* default */] {

	constructor() {
		super(null, __WEBPACK_IMPORTED_MODULE_4__ui_template__["c" /* paymentCompleteTemplate */]);
	}

	create() {
		super.create();
		console.log('payment.complete.view');
	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();
	}

	update() {
		super.update();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentCompleteView;
;

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hidePaymentError */
/* unused harmony export showPaymentError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(5);




function hidePaymentError() {
	__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.elem.parentNode.removeChild(__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.elem);
};

function showPaymentError(error) {
	console.log(error);
	var template = Object(__WEBPACK_IMPORTED_MODULE_2__template__["d" /* paymentErrorTemplate */])();
	var compiledHtml = template(error);
	__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].root.elem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["a" /* createElementFromHTML */])('div', compiledHtml));

	var errorPanel = document.querySelector(__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.selector);
	__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.elem = errorPanel;
	
	var closeElem = errorPanel.querySelector('.close');
	closeElem.addEventListener('click', hidePaymentError);
};

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export showPaymentComplete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_template__ = __webpack_require__(5);





function showPaymentComplete(obj) {
	// Load the mustache template
	var template = Object(__WEBPACK_IMPORTED_MODULE_3__ui_template__["c" /* paymentCompleteTemplate */])();
	var compiledHtml = template(obj);

	// Append to the DOM
	__WEBPACK_IMPORTED_MODULE_1__elems__["a" /* default */].root.elem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* createElementFromHTML */])('div', compiledHtml));

	// Hide other panels
	__WEBPACK_IMPORTED_MODULE_1__elems__["a" /* default */].formPanel.elem.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
	__WEBPACK_IMPORTED_MODULE_1__elems__["a" /* default */].paymentAwaitingPanel.elem.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stellarsdk_helper__ = __webpack_require__(8);





function checkCurrency(currency) {
	return new Promise(function(resolve, reject) {
		if (!currency) {
			reject(new Error('currency is required'));
		}
		if (typeof currency !== 'string') {
			reject(new Error('currency must be a string'));
		}
		if (currency === '') {
			reject(new Error('currency is required'));
		}
		if (__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CURRENCIES.indexOf(currency) === -1) {
			reject(new Error('currency not supported. allowed currencies: ' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CURRENCIES.join(', ') + ';'));
		}
		resolve(true);
	});
};

function checkDestinationKey(destinationKey) {
	return new Promise(function(resolve, reject) {
		if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(destinationKey)) {
			reject(new Error('destinationKey is invalid'));
		}
		resolve(true);
	});
};

function checkMemo(memo) {
	return new Promise(function(resolve, reject) {
		// todo: workout validation of memo field
		resolve(true);
	});
};

function checkOnSubmit(onSubmit) {
	return new Promise(function(resolve, reject) {
		if (onSubmit && typeof onSubmit !== 'function') {
			reject(new Error('onSubmit must be a function'));
		}
		resolve(true);
	});
};

function checkSelector(selector) {
	return new Promise(function(resolve, reject) {
		var targetElem = document.querySelector(selector);
		if (!targetElem) {
			reject(new Error('selector not found'));
			return;
		}
		__WEBPACK_IMPORTED_MODULE_1__ui_elems__["a" /* default */].targetElem.elem = targetElem;
		__WEBPACK_IMPORTED_MODULE_1__ui_elems__["a" /* default */].targetElem.selector = selector;
		resolve(true);
	});
};

function checkStyleSheet(stylesheet) {
	return new Promise(function(resolve, reject) {
		if (stylesheet && typeof stylesheet !== 'string') {
			reject(new Error('stylesheet must be a string'));
		}
		if (stylesheet) {
			return new __WEBPACK_IMPORTED_MODULE_2__loader__["a" /* default */].css(stylesheet);
		}
		resolve(true);
	});
};

function checkTotal(total) {
	return new Promise(function(resolve, reject) {
		if (!total) {
			reject(new Error('total is required'));
		}
		if (isNaN(total)) {
			reject(new Error('total must be numeric'));
		}
		if (total <= 0) {
			reject(new Error('total must be greater than zero'));
		}
		resolve(true);
	});
};

function validateConfig(options) {
	return __WEBPACK_IMPORTED_MODULE_2__loader__["a" /* default */].js(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].STELLAR_SDK_URL)
		.then(checkStyleSheet(options.stylesheet))
		.then(function() {
		return Promise.all([
			checkSelector(options.selector),
			checkCurrency(options.currency),
			checkDestinationKey(options.destinationKey),
			checkMemo(options.memo),
			checkOnSubmit(options.onSubmit),
			checkTotal(options.total)
		]);
	});
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _load(tag) {
  return function(url) {
    // This promise will be used by Promise.all to determine success or failure
    return new Promise(function(resolve, reject) {
      var element = document.createElement(tag);
      var parent = 'body';
      var attr = 'src';

      // Important success and error for the promise
      element.onload = function() {
        resolve(url);
      };
      element.onerror = function(err) {
        reject(new Error('could not load url: ' + url));
      };

      // Need to set different attributes depending on tag type
      switch(tag) {
        case 'script':
          element.async = true;
          break;
        case 'link':
          element.type = 'text/css';
          element.rel = 'stylesheet';
          attr = 'href';
          parent = 'head';
      }

      // Inject into document to kick off loading
      element[attr] = url;
      document[parent].appendChild(element);
    });
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  css: _load('link'),
  js: _load('script'),
  img: _load('img')
});

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=stellar-checkout.js.map