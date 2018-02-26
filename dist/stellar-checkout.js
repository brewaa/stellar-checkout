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
		copied: 'stellar_checkout_copied',
		error: 'stellar_checkout_error',
		hidden: 'stellar_checkout_hidden',
		loaded: 'stellar_checkout_loaded',
		valid: 'stellar_checkout_valid'
	},
	CMCCLIENT: null,
	DTO: {
		env: null,
		invoice: {
			currency: 'USD',
			id: null,
			total: null
		},
		payment: {
			amount: null,
			asset: null,
			fee: null,
			from: null,
			memo: null,
			memoType: null,
			network: null,
			to: null
		}
	},
	MESSAGE_TYPE: {
		ERROR: 'ERROR',
		INFO: 'INFO',
		WARNING: 'WARNING'
	},
	SELECTOR: {
		clipBoardInput: '.stellar_checkout_txt',
		fieldErrorMessage: '.stellar_checkout_error_message',
		spinner: '.stellar_checkout_spinner'
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
		selector: '#stellarCheckoutRoot',
		elem: null
	}
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElementFromHTML;
function createElementFromHTML(tagName, htmlString) {
  var div = document.createElement(tagName);
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
};

/***/ }),
/* 6 */
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

var Hogan = __webpack_require__(47);
Hogan.Template = __webpack_require__(48).Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generator__ = __webpack_require__(26);



var _network;

function createDto(options) {

	_network = setNetwork(options.env);

	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.env = options.env;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency = options.currency;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = options.total;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.asset = StellarSdk.Asset.native();
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.fee = .00001;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.memo = options.memo || Object(__WEBPACK_IMPORTED_MODULE_1__generator__["a" /* randomId */])(28);
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.memoType = StellarSdk.MemoHash;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.network = _network.network;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.to = options.destinationKey;

	return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO;
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
			var memo = dto.payment.memo;
			memo = StellarSdk.hash(memo);
			builder.addMemo(StellarSdk.Memo.hash(memo));	
		}
		transaction = builder.build();
		return transaction;
	});
};

function receivePayment(dto, callback) {
	var server = new StellarSdk.Server(_network.uri);
	var accountId = dto.payment.to;
	var now = new Date();
	var ledgerHeight;

	server.payments()
	.limit(1)
	.order('desc')
	.call()
	.then(function(response) {
		return response.records[0].transaction();
	})
	.then(function(lastTransaction) {
		ledgerHeight = lastTransaction.ledger_attr;

		var payments = server
		.payments()
		.forAccount(accountId)
		.cursor('now');

		return payments;

	}).then(function(payments) {

		var closeStream = payments.stream({
		  onmessage: function(payment) {
		  	if (payment.to !== accountId) {
		      return;
		    }
		    var asset = (payment.asset_type === 'native') ? 'lumens' : payment.asset_code + ':' + payment.asset_issuer;
		    
		    verifyPayment(now, ledgerHeight, dto, payment)
		    .then(function(result) {
		    	if (result) {
		    		callback.call(this, null, payment);	
		    		closeStream();
		    	}
	    		else {
	    			throw new Error('payment received. it wasn\'t our payment though...');
	    		}
		    });
		  },
		  onerror: function(error) {
		    console.error('Error in payment stream');
		  }
		});

		return closeStream;
	});
};

function setNetwork(env) {
	var uri;
	var network = StellarSdk.Network;
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

function verifyPayment(now, ledgerHeight, dto, payment) {
	var amountIsEqual = false;
	var ledgerHeightIsGood = false;
	var destinationKeyIsEqual = false;
	var memoIsEqual = false;
	var publicKeyIsEqual = false;
	var timeLooksGood = false;
	var server = new StellarSdk.Server(_network.uri);

	return server.transactions()
	.transaction(payment.transaction_hash)
	.call()
	.then(function (result) {
		amountIsEqual = parseFloat(dto.payment.amount) === parseFloat(payment.amount);
		ledgerHeightIsGood = result.ledger_attr > ledgerHeight;
		destinationKeyIsEqual = dto.payment.to === payment.to;
		memoIsEqual = StellarSdk.hash(dto.payment.memo).toString('base64') === result.memo;
		publicKeyIsEqual = dto.payment.from && payment.from === result.source_account;
		timeLooksGood = Date.parse(result.created_at) >= now.getTime();
		var result = amountIsEqual && ledgerHeightIsGood && destinationKeyIsEqual && memoIsEqual && publicKeyIsEqual && timeLooksGood;
		return result;
	})
	.catch(function (err) {
		console.log(err)
	})
};

/* harmony default export */ __webpack_exports__["a"] = ({
	buildTransaction: buildTransaction,
	createDto: createDto,
	receivePayment: receivePayment
});

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiAhkFKwnJ7tx6AAAgAElEQVR42uzdd3gV1boG8HfN7NkpJEBIAgkt9N57EQTEgkoRCSUBC2ogQYFgvccG9gahaIJgQY8kaGzHhooKoghIE0LvTVoSILQks2dm3T9Q9HiUzE7bJe/veXiec72zJ3t/U7751qwCEBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER2TN13jwGgWwTDAERUfH06dMHy5Yt+5//PiphQrhQnTFCoKaUIkoIGQ2JCECESYEwIVEFAkEAggDp/O1WLAFZKCHOQyJXCHlYSmyV0voqY+6sHYw2MaETEZWyEQkTqqmqsyWAJgCaCCGa/Pa/6wEILvU/KHFGCuu+9NSZ80fdOQkZr83iQSAmdCKifzJgwD1YvHjOpf97eOLkcIcUnaCITgJoI4HWAJp76sYpJb5KT5tx3T+1DBATOhFRhRc/fnI1KOJKaYneUNBTSHT2xjuklPLV9LSU8TxixIRORBXSoLFj8ckbb1z6v+OSpnSHJXsLRfQG0Adl0VReRjRNu6JJy9Yr/pUwmgeWmNCJqALp10/EN213gxTyRgHRH0BDX/45gYGBOa/PeCaSB5aY0InI78UlJneHwI0CYiAuvvv2G5ZloXHTZmNqVK/xzoT4m3iwiQmdiHxbn9tuw7IFCwAAo8ZNaSQUa7AQykAAV/r7bw+PiDg0+4l/1eVZQEzoROSblfe4iUh/dfbF/z0++QohMFIKESeAsIoUB8uyMHTE8A71Q50bOnXqxBODmNCJyPuNHD8Zi+bOBADEJ04ZBCHHAGKYL/0GKeX//IMEJOQfN2QhIISAw+Gwtb/omrXemP7ofXfwDCEAcDAEROSNYm+/B5lvXhwTrghxbXzSlDsAxHpjLWJZ1qV/UkqE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"

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_form_events__ = __webpack_require__(40);


/* harmony default export */ __webpack_exports__["a"] = ({
	root: {
		elem: null,
		selector: '#paymentFormView'
	},
	total: {
		selector: '#stellarCheckoutTotal',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["c" /* onValidateTotal */],
			input: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["c" /* onValidateTotal */]
		}
	},
	amount: {
		selector: '#stellarCheckoutAmount',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["a" /* onValidateAmount */],
			input: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["a" /* onValidateAmount */]
		}
	},
	publicKey: {
		selector: '#stellarCheckoutPublicKey',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["b" /* onValidatePublicKey */],
			input: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["b" /* onValidatePublicKey */]
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
/* harmony export (immutable) */ __webpack_exports__["a"] = replace;
function replace(text, search, replacement) {
    return text.replace(new RegExp(search, 'g'), replacement);
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(5);
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
		var compiledHtml = this.template(this.dto);

		// Append the compiled HTML to the DOM
		__WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].root.elem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["a" /* createElementFromHTML */])('div', compiledHtml));

		// Get a reference to all elems in this view
		for (var key in this.elems) {
			var item = this.elems[key];
			item.elem = __WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].root.elem.querySelector(item.selector);
			if (elem) {
				for (var ev in item.events) {
					item.elem.addEventListener(ev, item.events[ev]);
				}
			}
		}
	}

	destroy() {
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
			window.scrollTo(0, 0);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fonts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_main_template_html__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_main_template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__templates_main_template_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_payment_form_view_payment_form_elems__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_payment_form_view__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_payment_awaiting_view__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_payment_complete_view__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_state__ = __webpack_require__(23);
















function create(options) {
	return new Promise(function(resolve, reject) {
		// Get the target elem
		var targetElem = __WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].targetElem.elem;
		if (!targetElem) {
			return;
		}
		targetElem.classList.add(__WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].targetElem.cssClass);
		targetElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom__["a" /* createElementFromHTML */])('div', __WEBPACK_IMPORTED_MODULE_6__templates_main_template_html___default.a));

		// Get the stellar checkout root elements from main template html
		var root = targetElem.querySelector(__WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].root.selector);
		__WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].root.elem = root;
		
		// Initialize the views
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentFormView', view: new __WEBPACK_IMPORTED_MODULE_8__views_payment_form_view__["a" /* PaymentFormView */]() });
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentAwaitingView', view: new __WEBPACK_IMPORTED_MODULE_9__views_payment_awaiting_view__["a" /* PaymentAwaitingView */]() });
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentCompleteView', view: new __WEBPACK_IMPORTED_MODULE_10__views_payment_complete_view__["a" /* PaymentCompleteView */]() });

		// Set initial DTO state
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = options.total;
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency = options.currency;
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.to = options.destinationKey;

		// Show the first view
		showView('PaymentFormView');

		// Hide the overlay
		setTimeout(function() {
			document.querySelector('.stellar_checkout_overlay').classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.loaded);
			document.querySelector('.stellar_checkout_form').classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.loaded);
		}, 1000);

		resolve();
	});
};

function createSubmitHandler(callBack) {
	var btn = __WEBPACK_IMPORTED_MODULE_7__views_payment_form_view_payment_form_elems__["a" /* default */].submitButton.elem;
	if (btn) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			Object(__WEBPACK_IMPORTED_MODULE_1__buttons__["a" /* setButtonState */])(this, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.IN_PROGRESS)
			callBack.call(this);
		});
	};
};

function prevView() {
	if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
	}
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex <= 0 ? 0 : __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex-1;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views[__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex].view;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
}

function nextView() {
	if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
	}
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex >= __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.length-1 ? __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.length-1 : __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex+1;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views[__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex].view;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
}

function showView(viewName) {
	var vw = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.find(function(el) {
		return el.name == viewName;
	});
	if (vw) {
		if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
			__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
		}
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.indexOf(vw);
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
/* unused harmony export _locale */
/* harmony export (immutable) */ __webpack_exports__["b"] = formatDouble;
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDecimal7;
var _locale = 'en-US';

function formatDouble(num, locale) {
    locale = locale || _locale;
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
};

function formatDecimal7(num, locale) {
    locale = locale || _locale;
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 7
    }).format(num);
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleValidationFeedback;
/* harmony export (immutable) */ __webpack_exports__["b"] = validateAmount;
/* harmony export (immutable) */ __webpack_exports__["c"] = validatePublicKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = validateTotal;
/* harmony export (immutable) */ __webpack_exports__["e"] = validateTransactionDto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validationMessage__ = __webpack_require__(41);



function toggleValidationFeedback(target, test) {
	var elemErrMsg = target.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SELECTOR.fieldErrorMessage);
	var parentNode = target.parentNode;
	if (!test.result) {
		parentNode.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.valid);
		parentNode.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.error);
		elemErrMsg.innerHTML = test.errors[0].msg;
	} else {
		parentNode.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.valid);
		parentNode.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.error);
		elemErrMsg.innerHTML = '';
	}
};

function validateAmount(target) {
	var result = {
		errors: [],
		result: true
	};
	var amt = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.amount;
	if (isNaN(amt)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */]('amount is not a number', target));
		result.result = false;
	}
	if (amt <= 0) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */]('amount must be greater than zero', target));
		result.result = false;
	}
	return result;
};

function validatePublicKey(target) {
	var result = {
		errors: [],
		result: true
	};
	var key = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.from;
	if (!key || !window.StellarSdk.StrKey.isValidEd25519PublicKey(key)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */]('public key is invalid'), target);
		result.result = false;
	}
	return result;
};

function validateTotal(target) {
	var result = {
		errors: [],
		result: true
	};
	var total = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total;
	if (isNaN(total)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */]('total is not a number', target));
		result.result = false;
	}
	if (total <= 0) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */]('total must be greater than zero', target));
		result.result = false;
	}
	return result;
};

function validateTransactionDto(target) {
	var result = {
		errors: [],
		result: true
	};

	var dto = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO;

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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export redirect */
/* harmony export (immutable) */ __webpack_exports__["b"] = useRedirectUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = toQueryString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(11);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_checker__ = __webpack_require__(86);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_stellarsdk_helper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_url__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_validate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_buttons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_payment_error__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_view_state__ = __webpack_require__(23);











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

			// Show the awaiting payment page
			__WEBPACK_IMPORTED_MODULE_3__ui__["a" /* default */].showView('PaymentAwaitingView');

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
				__WEBPACK_IMPORTED_MODULE_8__ui_view_state__["a" /* default */].currentView.showProgress(result)
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
						__WEBPACK_IMPORTED_MODULE_3__ui__["a" /* default */].showView('PaymentCompleteView');
					}
				});
			});
			
		});

	});

};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = randomId;
function randomId(length) {
	var result = "";
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var i = 0, 
	len = !isNaN(length) ? length : 8;
	for (; i < len; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(28);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(31)(content, options);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(29);
exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, "/* STELLAR CHECKOUT */\r\n\r\n.stellar_checkout_container {\r\n    height: 98vh; /* todo: ugh vh */\r\n}\r\n\r\n.stellar_checkout {\r\n    position: relative;\r\n    font-family: monospace, monospace;\r\n\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* OVERLAYS */\r\n\r\n.stellar_checkout_overlay,\r\n.stellar_checkout_payment_complete {\r\n    background-image: url(" + escape(__webpack_require__(9)) + ");\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    background-size: 50%;\r\n    background-repeat: no-repeat;\r\n    background-color: #fff;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: .4s;\r\n    top: 0;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout_overlay.stellar_checkout_loaded {\r\n    opacity: 0;\r\n    transform: scale3d(0, 0, 0);\r\n}\r\n\r\n/** HEADER */\r\n\r\n.stellar_checkout_header {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: monospace, monospace;\r\n    justify-content: center;\r\n    padding: .8rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_goback {\r\n    font-size: 1.2rem;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 1rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_logo .stellar_checkout_rocket {\r\n    background: #fff;\r\n    border: .0625rem solid #eee;\r\n    border-radius: .4rem;\r\n    font-family: monospace, monospace;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    padding: .4rem;\r\n    width: 5.6rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_logo .stellar_checkout_app_name {\r\n    display: block;\r\n    padding: .4rem;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-family: monospace, monospace;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_header_alt {\r\n    display: flex;\r\n    min-height: 10rem;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_header_alt > div {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-basis: 50%;\r\n    font-family: monospace, monospace;\r\n    justify-content: center;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_qr_wrap,\r\n.stellar_checkout_header .stellar_checkout_status {\r\n}\r\n\r\n    @media screen and (min-device-width: 636px) {\r\n        .stellar_checkout_header {\r\n            flex-direction: row;\r\n        }\r\n        .stellar_checkout_header .stellar_checkout_logo {\r\n            flex-basis: 33%;\r\n        }\r\n        .stellar_checkout_header .stellar_checkout_header_alt {\r\n            flex-grow: 1;\r\n            width: auto;\r\n        }\r\n        .stellar_checkout_header .stellar_checkout_header_alt > div {\r\n            flex-basis: 50%;\r\n        }\r\n    }\r\n\r\n.stellar_checkout_header .stellar_checkout_qr_wrap .stellar_checkout_qrcode {\r\n    max-height: 10rem;\r\n    max-width: 10rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_qr_wrap .stellar_checkout_spinner {\r\n    font-size: 2rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_status {\r\n    background: #f8f8f8;\r\n    margin: .8rem .8rem .8rem 0;\r\n    text-transform: uppercase;\r\n    transition: .4s;\r\n}\r\n\r\n.stellar_checkout_header .status > span {\r\n    line-height: 1.6;\r\n    width: 50%;\r\n}\r\n\r\n/* COMPLETE */\r\n\r\n.stellar_checkout_payment_complete {\r\n    background-position-y: 36%;\r\n}\r\n\r\n.stellar_checkout_payment_complete .stellar_checkout_message {\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 50%;\r\n    margin-left: -25%;\r\n    width: 50%;\r\n    font-weight: bold;\r\n    color: green;\r\n    text-transform: uppercase;\r\n    font-size: 2.4rem;\r\n    height: 25%;\r\n    margin-top: -12.5%;\r\n}\r\n\r\n/** ERRORS */\r\n\r\n.stellar_checkout_error {\r\n    position: absolute;\r\n    height: 100%;\r\n    transition: .4s;\r\n    top: 0;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, .76);\r\n}\r\n\r\n.stellar_checkout_error .stellar_checkout_inner {\r\n    background: #fff;\r\n    border-radius: .2rem;\r\n    border: .125rem solid #f80000;\r\n    color: #f80000;\r\n    display: flex;\r\n    height: 12rem;\r\n    margin-top: -4rem;\r\n    padding: .8rem;\r\n    position: absolute;\r\n    transition: .4s;\r\n    top: 48%;\r\n    width: 92%;\r\n    margin-left: 4%;\r\n}\r\n\r\n.stellar_checkout_error .stellar_checkout_error_close {\r\n    position: absolute;\r\n    top: .6rem;\r\n    right: 1.2rem;\r\n}\r\n\r\n.stellar_checkout_error .stellar_checkout_error_message {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n/* FORM */\r\n\r\n.stellar_checkout_form {\r\n    display: none;\r\n}\r\n\r\n.stellar_checkout_form.stellar_checkout_loaded {\r\n    display: block;\r\n}\r\n\r\n/* FORM FIELDS */\r\n\r\n.stellar_checkout .stellar_checkout_field {\r\n\tpadding: .8rem .4rem;\r\n    position: relative;\r\n\ttext-align: left;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field label {\r\n\tcolor: #a0a0a0;\r\n    display: block;\r\n    font-size: .8rem;\r\n    letter-spacing: .075rem;\r\n    padding: .4rem .2rem;\r\n    text-transform: uppercase;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap {\r\n\tbackground: #f8f8f8;\r\n    border: .0625rem solid #eee;\r\n    border-radius: .2rem;\r\n    color: #000;\r\n    font-family: monospace, monospace;\r\n    height: 4rem;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_txtwrap .spinner {\r\n    position: absolute;\r\n    top: 30%;\r\n    right: .8rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap--clipboard {\r\n    display: flex;\r\n    height: 5.2rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap--input {\r\n    height: 2.8rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap--picker {\r\n    height: 2.4rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_clipboard {\r\n    align-items: center;\r\n    display: flex;\r\n    border-left: .0625rem solid #ddd;\r\n    flex-basis: 4rem;\r\n    font-size: 1rem;\r\n    justify-content: center;\r\n    position: relative;;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_clipboard_click {\r\n    background: transparent;\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 2;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap textarea {\r\n    overflow: hidden;\r\n    resize: none;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field input[type=text],\r\n.stellar_checkout .stellar_checkout_field textarea {\r\n    background: transparent;\r\n    border: 0;\r\n    font-family: monospace, monospace;\r\n    font-size: 1.25rem;\r\n    height: 100%;\r\n    outline: 0;\r\n    padding: .6rem .4rem;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field textarea {\r\n    text-align: left;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_currency {\r\n\tborder-right: .0625rem solid #ddd;\r\n    color: #a0a0a0;\r\n\tdisplay: block;\r\n    height: 100%;\r\n    line-height: 2.6;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 4rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_picker {\r\n    background: transparent;\r\n    border: 0;\r\n    font-size: 1rem;\r\n    height: 100%;\r\n    outline: 0;\r\n    padding: .4rem;\r\n    width: 99%;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_error {\r\n    border: 0.0625rem solid #f80000;\r\n    border-radius: .2rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_valid {\r\n    border: 0.0625rem solid #05ff05;\r\n    border-radius: .2rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_error_message {\r\n    border-radius: .4rem;\r\n    left: 0;\r\n    padding: .4rem .4rem;\r\n    position: absolute;\r\n    transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_error .stellar_checkout_error_message {\r\n    color: #f80000;\r\n    top: 2.55rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_copied {\r\n    position: absolute;\r\n    top: .4rem;\r\n    right: .4rem;\r\n    background: #f8f8f8;\r\n    padding: .4rem;\r\n    border-radius: .2rem;\r\n    font-size: .8rem;\r\n    border: .0625rem solid #eee;\r\n}\r\n\r\n/* BUTTONS */\r\n\r\n.stellar_checkout .stellar_checkout_button_row {\r\n\tpadding: .8rem .4rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_button_row button {\r\n\tbackground: #08b5e5;\r\n    border-color: #08b5e5;\r\n    border-radius: 3px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    min-height: 28px;\r\n    line-height: 26px;\r\n    outline: none;\r\n    overflow: hidden;\r\n    padding: .4rem .8rem;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    transition: .4s;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout textarea[disabled],\r\n.stellar_checkout textarea:disabled {\r\n    color: #000;\r\n}\r\n\r\n.stellar_checkout button[disabled],\r\n.stellar_checkout button:disabled {\r\n    opacity: 0.5;\r\n}\r\n\r\n/* PAYMENT AWAITING */\r\n\r\n.stellar_checkout_payment_awaiting .stellar_checkout_transaction_info {\r\n    line-height: 1.2;\r\n    color: #a0a0a0;\r\n    font-family: monospace, monospace;\r\n    font-size: .9rem;\r\n    padding: 0 .4rem;\r\n}\r\n\r\n.stellar_checkout_hidden {\r\n    display: none!important;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 29 */
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
/* 30 */
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
/* 31 */
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

var	fixUrls = __webpack_require__(32);

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
/* 32 */
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner__);





__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft___default.a);
__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy___default.a);
__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner___default.a);

/***/ }),
/* 34 */
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(35)))

/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'chevron-circle-left', icon: [512, 512, [], "f137", "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"] };

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'copy', icon: [448, 512, [], "f0c5", "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"] };

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'spinner', icon: [512, 512, [], "f110", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"] };

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div id=\"stellarCheckoutRoot\" class=\"stellar_checkout\">\r\n\t<div class=\"stellar_checkout_overlay\"></div>\r\n</div>";

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onValidateAmount;
/* harmony export (immutable) */ __webpack_exports__["b"] = onValidatePublicKey;
/* harmony export (immutable) */ __webpack_exports__["c"] = onValidateTotal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_string__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_buttons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_validate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_form_elems__ = __webpack_require__(10);








function setFormValidButtonState(target) {
    var formIsValid = Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["e" /* validateTransactionDto */])(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO);
    if (formIsValid.result) {
        Object(__WEBPACK_IMPORTED_MODULE_3__ui_buttons__["a" /* setButtonState */])(target, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.NORMAL);
    } else {
        Object(__WEBPACK_IMPORTED_MODULE_3__ui_buttons__["a" /* setButtonState */])(target, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.DISABLED);
    }
};

function onValidateAmount(e) {
	var amt = e.target.value;
    var formattedAmount = Object(__WEBPACK_IMPORTED_MODULE_2__utils_string__["a" /* replace */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["a" /* formatDecimal7 */])(amt), ',', '');
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.amount = formattedAmount;
	Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["b" /* validateAmount */])(e.target));
    setFormValidButtonState(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].submitButton.elem);
};

function onValidatePublicKey(e) {
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.from = e.target.value;
	Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["c" /* validatePublicKey */])(e.target));
    setFormValidButtonState(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].submitButton.elem);
};

function onValidateTotal(e) {
    var total = e.target.value;
    var formattedTotal = Object(__WEBPACK_IMPORTED_MODULE_2__utils_string__["a" /* replace */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["b" /* formatDouble */])(total), ',', '');
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = formattedTotal;
    e.target.value = formattedTotal;
	Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["d" /* validateTotal */])(e.target));
    setFormValidButtonState(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].submitButton.elem);
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CMCCLIENT.fetch();
};

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_coinmarketcap_client__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_form_elems__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_payment_form_mustache_html__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_payment_form_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__templates_payment_form_mustache_html__);









class PaymentFormView extends __WEBPACK_IMPORTED_MODULE_4__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__templates_payment_form_mustache_html___default.a);
	}

	create() {
		super.create();

		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CMCCLIENT = new __WEBPACK_IMPORTED_MODULE_1__services_coinmarketcap_client__["a" /* CoinMarketCapClient */](
			__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].total.elem, 
			__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].amount.elem
		);

		this.elems.total.elem.dispatchEvent(new Event('input'));
	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();

		if (this.elems.publicKey.elem.value.length > 0) {
			this.elems.publicKey.elem.dispatchEvent(new Event('input'));	
		}
	}

	update() {
		super.update();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentFormView;
;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CoinMarketCapClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_string__ = __webpack_require__(11);





function CoinMarketCapClient(totalElem, amountElem) {
	this.totalElem = totalElem;
	this.amountElem = amountElem;
	this.url = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].STELLAR_CHECKOUT_API_TICKER_URL,
	this.currency = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency;
	this.total = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total;
	this.data = [];
	this.priceInLumens = null;
	this.spinner = amountElem.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SELECTOR.spinner);
	if (this.total && this.total.length > 0) {
		this.fetch();
	}
}

CoinMarketCapClient.prototype.fetch = function() {
	var self = this;
	self.showProgress();
	return Object(__WEBPACK_IMPORTED_MODULE_2__utils_http__["a" /* httpRequest */])('GET', self.url, { currency: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency })
	.then(function(response) {
		if (response) {
			var data = JSON.parse(response);
			if (data.length > 0) {
				var lumenPrice = data[0]['price_' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency.toLowerCase()];
				if (lumenPrice) {
					self.priceInLumens = self.calcPriceInLumens(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total, lumenPrice);
					var formattedPrice = Object(__WEBPACK_IMPORTED_MODULE_3__utils_string__["a" /* replace */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["a" /* formatDecimal7 */])(self.priceInLumens), ',', '');
					self.amountElem.setAttribute('value', formattedPrice);
					self.amountElem.setAttribute('disabled', 'disabled');
					self.amountElem.dispatchEvent(new Event('input'));
					__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.total = self.priceInLumens;
				}
				self.data = data;
			}
			self.hideProgress();	
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpRequest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url__ = __webpack_require__(18);


function httpRequest(method, url, params, body, accessToken) {
	method = method || 'GET';
	url = url || '';
	params = params || '';
	body = body || '';
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
		xhr.send(body);
	}).catch(function(err) {
		console.log(err);
	})
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(46)
var H = __webpack_require__(6);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div id=\"paymentFormView\" class=\"stellar_checkout_form\">\r\n\t<div class=\"stellar_checkout_header\">\r\n\t\t<div class=\"stellar_checkout_logo\">\r\n\t\t\t<img alt=\"\" class=\"stellar_checkout_rocket\" src=\"" + __webpack_require__(9) + "\" />\r\n\t\t\t<span class=\"stellar_checkout_app_name\">stellar checkout</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_form_wrap\">\r\n\t\t<div class=\"stellar_checkout_field\">\r\n\t\t\t<label for=\"stellarCheckoutTotal\">Total</label>\r\n\t\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutTotal\" class=\"stellar_checkout_txt\" type=\"text\" autocomplete=\"off\" value=\"{{invoice.total}}\" disabled></input>\r\n\t\t\t\t<span class=\"stellar_checkout_currency\">{{invoice.currency}}</span>\r\n\t\t\t\t<span class=\"stellar_checkout_error_message\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_field\">\r\n\t\t\t<label for=\"stellarCheckoutAmount\">Amount</label>\r\n\t\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutAmount\" class=\"stellar_checkout_txt\" type=\"text\" autocomplete=\"off\" value=\"{{payment.amount}}\" disabled></input>\r\n\t\t\t\t<span class=\"stellar_checkout_currency\">XLM</span>\r\n\t\t\t\t<span class=\"stellar_checkout_error_message\"></span>\r\n\t\t\t\t<span class=\"stellar_checkout_spinner\"><i class=\"fas fa-spinner fa-spin\"></i></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_field\">\r\n\t\t\t<label for=\"stellarCheckoutPublicKey\">Your Public Key</label>\r\n\t\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutPublicKey\" class=\"stellar_checkout_txt\" type=\"text\" autocomplete=\"off\" required></input>\r\n\t\t\t\t<span class=\"stellar_checkout_error_message\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_button_row\">\r\n\t\t\t<button id=\"stellarCheckoutSubmitButton\" disabled>Enter payment info</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_wallet_format__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qrcode__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_payment_awaiting_mustache_html__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_payment_awaiting_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__templates_payment_awaiting_mustache_html__);



// import {paymentAwaitingTemplate} from '../ui/template';




class PaymentAwaitingView extends __WEBPACK_IMPORTED_MODULE_3__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__templates_payment_awaiting_mustache_html___default.a);
		this.isQrGenerated = false;
	}

	create() {
		super.create();

		var self = this;

		// Show Wallet Picker
		__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].linkShowWalletPicker.elem.addEventListener('click', function(e) {
			e.preventDefault();
			__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].walletPicker.elem.parentNode.parentNode.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
			__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].walletPicker.elem.focus();
		});

		// Wallet picker
		__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].walletPicker.elem.addEventListener('change', function(e) {
			__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].qrCodeSpinner.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
			__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].qrCodeCanvas.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
			var el = e.target;
			var format = el.options[el.selectedIndex].value;
			if (format) {
				self.generateQrCode(format);
			}
		});

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
		if (!this.isQrGenerated) {
			this.generateQrCode('envelopexdr');
		}
	}

	update() {
		super.update();
		__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmTo.elem.value = this.dto.payment.to;
		__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmFrom.elem.value = this.dto.payment.from;
		__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmAmount.elem.value = this.dto.payment.amount;
	}

	generateQrCode(format) {
		var self = this;
		__WEBPACK_IMPORTED_MODULE_1__utils_wallet_format__["a" /* default */][format](this.dto).then(function(result) {
			__WEBPACK_IMPORTED_MODULE_2_qrcode___default.a.toCanvas(__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].qrCodeCanvas.elem, result, function (error) {
				if (error) {
					console.error(error);
				}
				self.isQrGenerated = true;
				__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].qrCodeSpinner.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
				__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].qrCodeCanvas.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
				__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].walletPicker.elem.parentNode.parentNode.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);

				__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].xdrTest.elem.value = result;
			});
		});
	}

	showProgress() {
		return new Promise(function(resolve) {
			var statusMsgs = [
				'transaction received',
				'processing transaction',
				'verifying transaction',
				'payment complete'
			];
			var i = 0,
			increment = 2000,
			interval = setInterval(function() {
				__WEBPACK_IMPORTED_MODULE_4__payment_awaiting_elems__["a" /* default */].statusElem.elem.innerHTML = statusMsgs[i];
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_stellarsdk_helper__ = __webpack_require__(7);



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
                "type":     'MemoHash',
                "value":    dto.payment.memo
            };
	    }
		resolve(JSON.stringify(result));
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var canPromise = __webpack_require__(52)
var QRCode = __webpack_require__(55)
var CanvasRenderer = __webpack_require__(71)
var SvgRenderer = __webpack_require__(72)

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var G = __webpack_require__(53)

module.exports = function() {
  return (
    typeof G.Promise === 'function' &&
    typeof G.Promise.prototype.then === 'function'
  )
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
module.exports = (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(4)
var Utils = __webpack_require__(2)
var ECLevel = __webpack_require__(14)
var BitBuffer = __webpack_require__(56)
var BitMatrix = __webpack_require__(57)
var AlignmentPattern = __webpack_require__(58)
var FinderPattern = __webpack_require__(59)
var MaskPattern = __webpack_require__(60)
var ECCode = __webpack_require__(19)
var ReedSolomonEncoder = __webpack_require__(61)
var Version = __webpack_require__(20)
var FormatInfo = __webpack_require__(64)
var Mode = __webpack_require__(3)
var Segments = __webpack_require__(65)
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(4)

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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(4)
var Polynomial = __webpack_require__(62)

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(4)
var GF = __webpack_require__(63)

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(4)

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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)
var NumericData = __webpack_require__(66)
var AlphanumericData = __webpack_require__(67)
var ByteData = __webpack_require__(68)
var KanjiData = __webpack_require__(69)
var Regex = __webpack_require__(21)
var Utils = __webpack_require__(2)
var dijkstra = __webpack_require__(70)

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
/* 66 */
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
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(4)
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__ = __webpack_require__(74);



/* harmony default export */ __webpack_exports__["a"] = ({
	xdrTest: {
		elem: null,
		selector: '#xdrTest'
	},
	root: {
		elem: null,
		selector: '#paymentAwaitingView'
	},
	statusElem: {
		selector: '#paymentAwaitingStatus',
		elem: null
	},
	goBackLink: {
		selector: '#paymentAwaitingGoBack',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_0__ui_index__["b" /* prevView */]
		}
	},
	qrCodeCanvas: {
		selector: '#qrCodeCanvas',
		elem: null
	},
	qrCodeSpinner: {
		selector: '#qrCodeSpinner',
		elem: null
	},
	linkShowWalletPicker: {
		selector: '#linkShowWalletPicker',
		elem: null
	},
	walletPicker: {
		selector: '#walletPicker',
		elem: null
	},
	stellarCheckoutConfirmTo: {
		selector: '#stellarCheckoutConfirmTo',
		elem: null
	},
	stellarCheckoutConfirmToClipboard: {
		selector: '#stellarCheckoutConfirmToClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopy */]
		}
	},
	stellarCheckoutConfirmFrom: {
		selector: '#stellarCheckoutConfirmFrom',
		elem: null
	},
	stellarCheckoutConfirmFromClipboard: {
		selector: '#stellarCheckoutConfirmFromClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopy */]
		}
	},
	stellarCheckoutConfirmMemo: {
		selector: '#stellarCheckoutConfirmMemo',
		elem: null
	},
	stellarCheckoutConfirmMemoClipboard: {
		selector: '#stellarCheckoutConfirmMemoClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopy */]
		}
	},
	stellarCheckoutConfirmAmount: {
		selector: '#stellarCheckoutConfirmAmount',
		elem: null
	},
	stellarCheckoutConfirmAmountClipboard: {
		selector: '#stellarCheckoutConfirmAmountClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopy */]
		}
	}
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onCopy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_clipboard__ = __webpack_require__(75);



let isCopying = false;

function onCopy(e) {
    if (isCopying) {
        return;
    }
    isCopying = true;
    var copied = __WEBPACK_IMPORTED_MODULE_1__utils_clipboard__["a" /* copy */].call(this, e.target.parentNode.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SELECTOR.clipBoardInput));
    if (copied) {
        var elem = document.createElement('span');
        elem.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.copied);
        elem.innerHTML = 'copied';
        e.target.blur();
        e.target.parentNode.parentNode.parentNode.appendChild(elem);
        setTimeout(function() {
            e.target.parentNode.parentNode.parentNode.removeChild(elem);
            isCopying = false;
        }, 400);
    }
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
function copy(target) {
    var result = false;
    if (target) {
        try {
            target.select();
            var copied = document.execCommand('copy');
            if (copied) {
                result = true;
            } else {
                result = false;
            }
            target.setSelectionRange(0, 0);
        } catch(err) {
            console.log(err);
        }
    }
    return result;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(77)
var H = __webpack_require__(6);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div id=\"paymentAwaitingView\" class=\"stellar_checkout_payment_awaiting stellar_checkout_hidden\">\r\n\t<div class=\"stellar_checkout_header\">\r\n\t\t<span id=\"paymentAwaitingGoBack\" class=\"stellar_checkout_goback\">\r\n\t\t\t<i class=\"fas fa-chevron-circle-left\"></i>\r\n\t\t</span>\r\n\t\t<div class=\"stellar_checkout_logo\">\r\n\t\t\t<img alt=\"\" class=\"stellar_checkout_rocket\" src=\"" + __webpack_require__(9) + "\" />\r\n\t\t\t<span class=\"stellar_checkout_app_name\">stellar checkout</span>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_header_alt\">\r\n\t\t\t<div class=\"stellar_checkout_qr_wrap\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<span id=\"qrCodeSpinner\" class=\"stellar_checkout_spinner\"><i class=\"fas fa-spinner fa-spin\"></i></span>\r\n\t\t\t\t\t<canvas id=\"qrCodeCanvas\" class=\"stellar_checkout_qrcode stellar_checkout_hidden\"></canvas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"paymentAwaitingStatus\" class=\"stellar_checkout_status\">\r\n\t\t\t\t<span>Awaiting Payment</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<textarea id=\"xdrTest\" class=\"stellar_checkout_hidden\"></textarea>\r\n\t<div class=\"stellar_checkout_transaction_info\">Complete this transaction by scanning the QR code. The QR code contains a ready to be signed XDR envelope (<a id=\"linkShowWalletPicker\" href=\"#\">change qrcode format</a>). Alternatively, manually create a payment with the following information:</div>\r\n\t<div class=\"stellar_checkout_field stellar_checkout_hidden\">\r\n\t\t<label for=\"stellarCheckoutConfirmTo\">QRCode Format</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--picker\">\r\n\t\t\t<select id=\"walletPicker\" class=\"stellar_checkout_picker\">\r\n\t\t\t\t<option value=\"envelopexdr\">XDR</option>\r\n\t\t\t\t<option value=\"destinationkey\">Destination Public Key</option>\r\n\t\t\t\t<option value=\"stargazer\">Stargazer Wallet</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label for=\"stellarCheckoutConfirmTo\">To</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmTo\" class=\"stellar_checkout_txt\" readonly>{{payment.to}}</textarea>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmToClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label for=\"stellarCheckoutConfirmFrom\">From</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmFrom\" class=\"stellar_checkout_txt\" readonly>{{payment.from}}</textarea>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmFromClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label for=\"stellarCheckoutConfirmMemo\">Memo</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmMemo\" class=\"stellar_checkout_txt\" readonly>{{payment.memo}}</textarea>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmMemoClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label for=\"stellarCheckoutConfirmMemoType\">Memo Type</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--picker\">\r\n\t\t\t<select id=\"stellarCheckoutConfirmMemoType\" class=\"stellar_checkout_picker\" disabled>\r\n\t\t\t\t<option value=\"hash\" selected>MemoHash</option>\r\n\t\t\t\t<option value=\"id\">MemoID</option>\r\n\t\t\t\t<option value=\"none\">MemoNone</option>\r\n\t\t\t\t<option value=\"return\">MemoReturn</option>\r\n\t\t\t\t<option value=\"text\">MemoText</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label for=\"stellarCheckoutConfirmAmount\">Amount</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<input id=\"stellarCheckoutConfirmAmount\" class=\"stellar_checkout_txt\" type=\"text\" value=\"{{payment.amount}}\" readonly></input>\r\n\t\t\t<span class=\"stellar_checkout_currency\">XLM</span>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmAmountClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_complete_elems__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_payment_complete_mustache_html__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_payment_complete_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__templates_payment_complete_mustache_html__);








class PaymentCompleteView extends __WEBPACK_IMPORTED_MODULE_3__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_4__payment_complete_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__templates_payment_complete_mustache_html___default.a);
	}

	create() {
		super.create();
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	root: {
		elem: null,
		selector: '#paymentCompleteView'
	}
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(81)
var H = __webpack_require__(6);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<div id=\"paymentCompleteView\" class=\"stellar_checkout_payment_complete stellar_checkout_hidden\">\r\n\t<div class=\"stellar_checkout_message\">Payment complete</div>\r\n</div>";

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hidePaymentError */
/* unused harmony export showPaymentError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(83);




function hidePaymentError() {
	__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.elem.parentNode.removeChild(__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.elem);
};

function showPaymentError(error) {
	console.log(error);
	var template = Object(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* paymentErrorTemplate */])();
	var compiledHtml = template(error);
	__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].root.elem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["a" /* createElementFromHTML */])('div', compiledHtml));

	var errorPanel = document.querySelector(__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.selector);
	__WEBPACK_IMPORTED_MODULE_0__elems__["a" /* default */].paymentErrorPanel.elem = errorPanel;
	
	var closeElem = errorPanel.querySelector('.close');
	closeElem.addEventListener('click', hidePaymentError);
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mainTemplate */
/* harmony export (immutable) */ __webpack_exports__["a"] = paymentErrorTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_payment_error_mustache_html__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_payment_error_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__templates_payment_error_mustache_html__);
// import main from '../templates/main.template.html';
// import paymentAwaiting from '../templates/payment.awaiting.mustache.html';
// import paymentComplete from '../templates/payment.complete.mustache.html';

// import paymentForm from '../templates/payment.form.mustache.html';

function mainTemplate() {
	return main;
};

// export function paymentAwaitingTemplate() {
// 	return paymentAwaiting;
// };

// export function paymentCompleteTemplate() {
// 	return paymentComplete;
// };

function paymentErrorTemplate() {
	return __WEBPACK_IMPORTED_MODULE_0__templates_payment_error_mustache_html___default.a;
};

// export function paymentFormTemplate() {
// 	return paymentForm;
// };

/* unused harmony default export */ var _unused_webpack_default_export = ({
	// main: main,
	// paymentAwaiting: paymentAwaiting,
	// paymentComp?lete: paymentComplete,
	paymentError: __WEBPACK_IMPORTED_MODULE_0__templates_payment_error_mustache_html___default.a
	// ,
	// paymentForm: paymentForm
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(85)
var H = __webpack_require__(6);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<div class=\"stellar_checkout_error\">\r\n\t<div class=\"stellar_checkout_error_inner\">\r\n\t\t<div class=\"stellar_checkout_error_message\">\r\n\t\t\t<a class=\"stellar_checkout_error_close\" href=\"#\">close</a>\r\n\t\t\t<div class=\"stellar_checkout_error_message\">{{message}}\r\n\t\t\t\t{{data.extras.result_codes.transaction}}<br />\r\n\t\t\t\t{{#data.extras.result_codes.operations}}\r\n\t\t\t\t\t<span>{{.}}</span>\r\n\t\t\t\t{{/data.extras.result_codes.operations}}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_elems__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stellarsdk_helper__ = __webpack_require__(7);





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
		if (memo && typeof memo !== 'string') {
			reject('memo field must be a string');
		}
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
/* 87 */
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