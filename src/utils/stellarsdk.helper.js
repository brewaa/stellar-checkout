export async function buildTransaction (network, to, from, asset, amount, memo) {
  var server = new window.StellarSdk.Server(network.uri)
  var destinationAcc = await server.loadAccount(to)
  if (!destinationAcc) {
    throw new Error('destination account does not exist')
  }
  var sourceAcc = await server.loadAccount(from)
  if (!sourceAcc) {
    throw new Error('source account does not exist')
  }
  var payment = window.StellarSdk.Operation.payment({
    destination: to,
    asset: asset,
    amount: amount
  })
  var builder = new window.StellarSdk
    .TransactionBuilder(sourceAcc)
    .addOperation(payment)
  if (memo) {
    var memoHash = window.StellarSdk.hash(memo)
    builder.addMemo(window.StellarSdk.Memo.hash(memoHash))
  }
  var transaction = await builder.build()
  return transaction
}

export async function fetchTransaction (network, txHash) {
  var server = new window.StellarSdk.Server(network.uri)
  return server.transactions()
    .transaction(txHash)
    .call()
}

export function getFederatedAddress (addr) {
  var parts = addr && addr.toString().split('*')
  if (parts.length <= 1) {
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

export async function loadAccount (network, publicKey) {
  var server = new window.StellarSdk.Server(network.uri)
  return server.loadAccount(publicKey)
}

export function getPaymentsForAccount (network, publicKey) {
  var server = new window.StellarSdk.Server(network.uri)
  var accountId = publicKey
  var now = new Date()
  var ledgerHeight

  return server.payments()
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

      return {
        accountId: accountId,
        ledgerHeight: ledgerHeight,
        now: now,
        payments: payments
      }
    })
}

export function setNetwork (networkName, networkUri, networkPassphrase) {
  var n = networkName || 'test'
  var name
  var uri
  var sn = window.StellarSdk.Network
  if (typeof n === 'string' && n.toLowerCase() === 'custom' &&
    typeof networkUri === 'string' && typeof networkPassphrase === 'string') {
    name = 'custom'
    uri = networkUri
    sn.use(new window.StellarSdk.Network(networkPassphrase))
  } else if ((typeof n === 'string' && n.toLowerCase() === 'production') ||
    (typeof n === 'string' && n.toLowerCase() === 'public')) {
    name = 'public'
    uri = 'https://horizon.stellar.org'
    sn.usePublicNetwork()
  } else {
    name = 'test'
    uri = 'https://horizon-testnet.stellar.org'
    sn.useTestNetwork()
  }
  return {
    name: name,
    network: sn.current(),
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

export function verifyPayment (network, now, ledgerHeight, to, from, amount, memo, payment) {
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
    .then(function (response) {
      amountIsEqual = parseFloat(amount) === parseFloat(payment.amount)
      ledgerHeightIsGood = response.ledger_attr > ledgerHeight
      destinationKeyIsEqual = to === payment.to
      memoIsEqual = window.StellarSdk.hash(memo).toString('base64') === response.memo
      publicKeyIsEqual = from && payment.from === response.source_account
      timeLooksGood = Date.parse(response.created_at) >= now.getTime()
      var result = amountIsEqual && ledgerHeightIsGood && destinationKeyIsEqual && memoIsEqual && publicKeyIsEqual && timeLooksGood
      console.log(response)
      console.log(`to ${to}`)
      console.log(`payment.to ${payment.to}`)
      console.log(`amountIsEqual ${amountIsEqual}`)
      console.log(`ledgerHeightIsGood ${ledgerHeightIsGood}`)
      console.log(`destinationKeyIsEqual ${destinationKeyIsEqual}`)
      console.log(`memoIsEqual ${memoIsEqual}`)
      console.log(`timeLooksGood ${timeLooksGood}`)
      console.log(`result ${result}`)
      return response
    }).catch(err => {
      console.log(err)
    })
}
