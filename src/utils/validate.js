import constants from 'app/constants'
import l10n from 'l10n'

export function ValidationMessage (msg, elem, msgType) {
  this.elem = elem
  this.msg = msg
  this.msgType = msgType || constants.MESSAGE_TYPE.ERROR
}

ValidationMessage.prototype.toString = function () {
  var messageType = this.msgType ? ' ' + this.msgType : ''
  return constants.APP.name + messageType + ' ' + this.msg
}

export function ValidationTest (errors, result) {
  this.errors = errors || []
  this.result = result || true
}

ValidationTest.prototype.addError = function (err) {
  this.errors.push(err)
  this.result = false
}

export function validateAmount (target) {
  var result = new ValidationTest()
  var l = l10n.localizer
  var amt = constants.DTO.payment.amount
  if (isNaN(amt)) {
    result.addError(new ValidationMessage(l.localize('validateAmountNaN', 'amount is not a number'), target))
  }
  if (amt <= 0) {
    result.addError(new ValidationMessage(l.localize('validateAmountGreaterThanZero', 'amount must be greater than zero'), target))
  }
  return result
}

export function validatePublicKey (target, publicKey) {
  var result = new ValidationTest()
  var l = l10n.localizer
  var key = publicKey || constants.DTO.payment.from
  if (!key || !window.StellarSdk.StrKey.isValidEd25519PublicKey(key)) {
    result.addError(new ValidationMessage(l.localize('validatePublicKeyInvalid', 'public key is invalid'), target))
  }
  return result
}

export function validateStellarAddress (target) {
  var result = new ValidationTest()
  var l = l10n.localizer
  var val = target.value
  if (val.length === 0) {
    result.addError(new ValidationMessage(l.localize('validateStellarAddressIsEmpty', 'stellar address is required'), target))
  }
  if (val.indexOf('*') !== -1) {
    // todo: further validation of a federated stellar address, a regex perhaps
  }
  if (val.substring(0, 1).toLowerCase() === 'g' && !window.StellarSdk.StrKey.isValidEd25519PublicKey(val)) {
    result.addError(new ValidationMessage(l.localize('validateStellarAddressInvalid', 'public key is invalid'), target))
  }
  if (val.indexOf('*') === -1 && val.substring(0, 1).toLowerCase() !== 'g') {
    result.addError(new ValidationMessage(l.localize('validateStellarAddressInvalid', 'stellar address is invalid'), target))
  }
  return result
}

export function validateTotal (target) {
  var result = new ValidationTest()
  var l = l10n.localizer
  var total = constants.DTO.invoice.total
  if (isNaN(total)) {
    result.addError(new ValidationMessage(l.localize('validateTotalNaN', 'total is not a number'), target))
  }
  if (total <= 0) {
    result.addError(new ValidationMessage(l.localize('validateTotalGreaterThanZero', 'total must be greater than zero'), target))
  }
  return result
}

export function validateTransactionDto (target) {
  var result = new ValidationTest()

  var dto = constants.DTO

  var a = validateAmount(dto.payment.amount)
  result.result = result.result && a.result
  result.errors = [...result.errors, ...a.errors]

  // asset

  // publicKey
  var b = validatePublicKey(dto.payment.from)
  result.result = result.result && b.result
  result.errors = [...result.errors, ...b.errors]

  // destinationKey
  var c = validatePublicKey(dto.payment.to)
  result.result = result.result && c.result
  result.errors = [...result.errors, ...c.errors]

  // memo

  // env

  return result
}
