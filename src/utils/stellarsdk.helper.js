export function buildTransaction (network, dto) {
  var server = new window.StellarSdk.Server(network.uri)
  var destinationId = dto.payment.to
  var transaction

  return server.loadAccount(destinationId)
    .catch(window.StellarSdk.NotFoundError, function (error) {
      throw new Error('The destination account does not exist!', error)
    }).then(function () {
      return server.loadAccount(dto.payment.from)
    }).then(function (sourceAccount) {
      var builder = new window.StellarSdk
        .TransactionBuilder(sourceAccount)
        .addOperation(window.StellarSdk.Operation.payment({
          destination: destinationId,
          asset: dto.payment.asset,
          amount: dto.payment.amount
        }))
      if (dto.payment.memo) {
        var memo = dto.payment.memo
        memo = window.StellarSdk.hash(memo)
        builder.addMemo(window.StellarSdk.Memo.hash(memo))
      }
      transaction = builder.build()
      return transaction
    })
};

export function fetchTransaction (network, txHash) {
  var server = new window.StellarSdk.Server(network.uri)
  return server.transactions()
    .transaction(txHash)
    .call()
}

export function getFederatedAddress (addr) {
  var parts = addr && addr.toString().split('*')
  if (parts.length <= 0) {
    return null
  }
  return {
    handle: parts[0],
    homeDomain: parts[1]
  }
}

export function getNetworkHash (passphrase) {
  return new window.StellarSdk.Network(passphrase)
    .networkId().toString('hex').slice(0, 8)
}

export function isFederatedAddress (addr) {
  return addr && addr.toString().split('*').length > 1
}

export function loadAccount (network, accountId) {
  var server = new window.StellarSdk.Server(network.uri)
  return server.loadAccount(accountId).catch(window.StellarSdk.NotFoundError, function (error) {
    throw new Error('The destination account does not exist!', error)
  })
}

export function listenForPayment (network, dto, callback) {
  var server = new window.StellarSdk.Server(network.uri)
  var accountId = dto.payment.to
  var now = new Date()
  var ledgerHeight

  server.payments()
    .limit(1)
    .order('desc')
    .call()
    .then(function (response) {
      return response.records[0].transaction()
    })
    .then(function (lastTransaction) {
      ledgerHeight = lastTransaction.ledger_attr

      var payments = server
        .payments()
        .forAccount(accountId)
        .cursor('now')

      return payments
    }).then(function (payments) {
      var closeStream = payments.stream({
        onmessage: function (payment) {
          if (payment.to !== accountId) {
            return
          }
          verifyPayment(network, now, ledgerHeight, dto, payment)
            .then(function (result) {
              if (result) {
                callback.call(this, null, payment)
                closeStream()
              } else {
                throw new Error('payment received. it wasn\'t our payment though...')
              }
            })
        },
        onerror: function (error) {
          console.error(error)
        }
      })

      return closeStream
    })
}

export function setNetwork (network) {
  network = network || 'test'
  var uri
  var stellarNetwork = window.StellarSdk.Network
  if ((typeof network === 'string' && network.toLowerCase() === 'production') ||
    (typeof network === 'string' && network.toLowerCase() === 'public')) {
    uri = 'https://horizon.stellar.org'
    stellarNetwork.usePublicNetwork()
  } else {
    uri = 'https://horizon-testnet.stellar.org'
    stellarNetwork.useTestNetwork()
  }
  return {
    name: network,
    network: stellarNetwork.current(),
    uri: uri
  }
}

export function submitTransaction (network, transaction) {
  var server = new window.StellarSdk.Server(network.uri)
  return server.submitTransaction(transaction)
    .then(result => {
      return result
    })
}

export function verifyPayment (network, now, ledgerHeight, dto, payment) {
  var amountIsEqual = false
  var ledgerHeightIsGood = false
  var destinationKeyIsEqual = false
  var memoIsEqual = false
  var publicKeyIsEqual = false
  var timeLooksGood = false
  var server = new window.StellarSdk.Server(network.uri)

  return server.transactions()
    .transaction(payment.transaction_hash)
    .call()
    .then(function (result) {
      amountIsEqual = parseFloat(dto.payment.amount) === parseFloat(payment.amount)
      ledgerHeightIsGood = result.ledger_attr > ledgerHeight
      destinationKeyIsEqual = dto.payment.to === payment.to
      memoIsEqual = window.StellarSdk.hash(dto.payment.memo).toString('base64') === result.memo
      publicKeyIsEqual = dto.payment.from && payment.from === result.source_account
      timeLooksGood = Date.parse(result.created_at) >= now.getTime()
      result = amountIsEqual && ledgerHeightIsGood && destinationKeyIsEqual && memoIsEqual && publicKeyIsEqual && timeLooksGood
      return result
    }).catch(function (err) {
      console.log(err)
    })
}
