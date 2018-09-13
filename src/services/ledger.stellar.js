import Transport from '@ledgerhq/hw-transport-u2f'
import Api from '@ledgerhq/hw-app-str'

export let _api = null

export function open (openTimeout, exchangeTimeout) {
  openTimeout = (openTimeout || 30) * 1000
  exchangeTimeout = (exchangeTimeout || 30) * 1000
  return Transport.create(openTimeout).then((transport) => {
    // transport.setDebugMode(true)
    transport.setExchangeTimeout(exchangeTimeout)
    _api = new Api(transport)
    return _api
  })
}

export function connect () {
  if (_api === null) {
    return open().then(api => {
      return api.getAppConfiguration().then(result => {
        return api
      })
    })
  } else {
    return _api
  }
}

export function getPublicKey (bip32Path, verifyKeyPair, confirmAddress) {
  bip32Path = bip32Path || '44\'/148\'/0\''
  verifyKeyPair = verifyKeyPair || true
  confirmAddress = confirmAddress || false
  return open(10, 30).then(api => {
    return api.getPublicKey(bip32Path, verifyKeyPair, confirmAddress).then(result => {
      return new Promise(function (resolve) {
        resolve(result.publicKey)
      })
    })
  })
}

export function getSignature (transaction, bip32Path) {
  bip32Path = bip32Path || '44\'/148\'/0\''
  return open(10, 150).then(api => {
    return api.signTransaction(bip32Path, transaction.signatureBase()).then(result => {
      return result.signature
    })
  })
}
