import constants from './constants';
import * as utils from './utils';

function createTransactionDto(options) {
	var dto = constants.DTO;
	dto.asset = StellarSdk.Asset.native();
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
	var transaction;

	return server.loadAccount(destinationId)
	.catch(StellarSdk.NotFoundError, function (error) {
		throw new Error('The destination account does not exist!');
	})
	.then(function() {
		return server.loadAccount(sourceKeys.publicKey());
	})
	.then(function(sourceAccount) {
		transaction = new StellarSdk
		.TransactionBuilder(sourceAccount)
		.addOperation(StellarSdk.Operation.payment({
			destination: destinationId,
			asset: transactionDto.asset,
			amount: transactionDto.amount
		}))
		.addMemo(StellarSdk.Memo.text(transactionDto.memo))
		.build();

		transaction.sign(sourceKeys);

		return server.submitTransaction(transaction);
	})
	.then(function(result) {
		return result;
	});
};

export default {
	createTransactionDto: createTransactionDto,
	loadStellarSdk: loadStellarSdk,
	receiveTransaction: receiveTransaction,
	submitTransaction: submitTransaction
}