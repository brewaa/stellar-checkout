import constants from './constants';
import * as utils from './utils';

function createTransactionDto(options) {
	var dto = constants.DTO;
	dto.asset = StellarSdk.Asset.native();
	dto.apiKey = options.apiKey;
	dto.currency = options.currency;
	dto.destinationKey = options.destinationKey;
	dto.env = options.env;
	dto.memo = options.memo;
	dto.total = options.total;
	return dto;
};

function loadStellarSdk(callback) {
	if (window && window.StellarSdk) {
		console.log(utils._err('StellarSdk already loaded', constants.MESSAGE_TYPE.INFO));
		callback.call();
		return false;
	}
	var script = document.createElement('script');
	script.src = constants.STELLAR_SDK_URL;
	script.async = true;

	script.onload = function() {
		callback.call();
	};

	var head = document.getElementsByTagName('head')[0];
	if (head) {
		head.appendChild(script);
	}
	return true;
};

function verifyTransaction(transactionDto, payment) {
	var amountIsEqual = transactionDto.amount === payment.amount;
	var publicKeyIsEqual = transactionDto.publicKey === payment.from;
	var result = amountIsEqual && publicKeyIsEqual;
	return result;
}

function receiveTransaction(transactionDto, callback) {
	var networkUri = setNetwork(transactionDto);
	var server = new StellarSdk.Server(networkUri);
	var accountId = transactionDto.destinationKey;
	var payments = server
		.payments()
		.forAccount(accountId)
		.cursor('now');

	var closeStream = payments.stream({
	  onmessage: function(payment) {
	    if (payment.to !== accountId) {
	      return;
	    }
	    var asset = (payment.asset_type === 'native') ? 'lumens' : payment.asset_code + ':' + payment.asset_issuer;
	    var result = verifyTransaction(transactionDto, payment);
	    if (result) {
	    	callback.call(this, null, payment);	
	    	closeStream();
	    }
	  },
	  onerror: function(error) {
	    console.error('Error in payment stream');
	  }
	});
}

function setNetwork(transactionDto) {
	var networkUri;
	if (typeof transactionDto.env === 'string' && transactionDto.env.toLowerCase() === 'production') {
		networkUri = 'https://horizon.stellar.org';
		window.StellarSdk.Network.usePublicNetwork();
	} else {
		networkUri = 'https://horizon-testnet.stellar.org';
		window.StellarSdk.Network.useTestNetwork();
	}
	return networkUri;
}

function submitTransaction(transactionDto) {

	var networkUri = setNetwork(transactionDto);

	var server = new StellarSdk.Server(networkUri);
	
	var sourceKeys = StellarSdk.Keypair.fromSecret(transactionDto.privateSeed);
	
	var destinationId = transactionDto.destinationKey;
	
	// Transaction will hold a built transaction we can resubmit if the result is unknown.
	var transaction;

	// First, check to make sure that the destination account exists.
	// You could skip this, but if the account does not exist, you will be charged
	// the transaction fee when the transaction fails.
	return server.loadAccount(destinationId)
	.catch(StellarSdk.NotFoundError, function (error) {
		// If the account is not found, surface a nicer error message for logging.
		throw new Error('The destination account does not exist!');
	})
	.then(function() {
		// If there was no error, load up-to-date information on your account.
		return server.loadAccount(sourceKeys.publicKey());
	})
	.then(function(sourceAccount) { // Start building the transaction.
		transaction = new StellarSdk
		.TransactionBuilder(sourceAccount)
		.addOperation(StellarSdk.Operation.payment({
			destination: destinationId,
			asset: transactionDto.asset, // Because Stellar allows transaction in many currencies, you must specify the asset type. The special "native" asset represents Lumens.
			amount: transactionDto.amount
		}))
		.addMemo(StellarSdk.Memo.text(transactionDto.memo)) // A memo allows you to add your own metadata to a transaction. It's optional and does not affect how Stellar treats the transaction.
		.build();

		// Sign the transaction to prove you are actually the person sending it.
		transaction.sign(sourceKeys);

		// And finally, send it off to Stellar!
		return server.submitTransaction(transaction);
	})
	.then(function(result) {
		// console.log('Success! Results:', result);
		return result;
	});
	// .catch(function(error) {
	// 	console.error('Something went wrong!', error);
	// 	// If the result is unknown (no response body, timeout etc.) we simply resubmit
	// 	// already built transaction:
	// 	// server.submitTransaction(transaction);
	// });
};

export default {
	createTransactionDto: createTransactionDto,
	loadStellarSdk: loadStellarSdk,
	receiveTransaction: receiveTransaction,
	submitTransaction: submitTransaction
}