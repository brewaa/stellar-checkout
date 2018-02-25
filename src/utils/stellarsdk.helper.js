import constants from '../constants';
import {randomId} from './generator'

var _network;

function createDto(options) {

	_network = setNetwork(options.env);

	constants.DTO.env = options.env;
	constants.DTO.invoice.currency = options.currency;
	constants.DTO.invoice.total = options.total;
	constants.DTO.payment.asset = StellarSdk.Asset.native();
	constants.DTO.payment.fee = .00001;
	constants.DTO.payment.memo = options.memo || randomId(28);
	constants.DTO.payment.memoType = StellarSdk.MemoHash;
	constants.DTO.payment.network = _network.network;
	constants.DTO.payment.to = options.destinationKey;

	return constants.DTO;
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

export default {
	buildTransaction: buildTransaction,
	createDto: createDto,
	receivePayment: receivePayment
}