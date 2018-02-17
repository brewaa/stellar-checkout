import constants from '../constants';
import {randomId} from './generator'
import {httpRequest} from './http';

var _network;

function createDto(options) {

	_network = setNetwork(options.env);

	var dto = constants.DTO;
	dto.env = options.env;
	dto.invoice.currency = options.currency;
	dto.invoice.id = options.id;
	dto.invoice.total = options.total;
	dto.payment.asset = StellarSdk.Asset.native();
	dto.payment.fee = .00001;
	dto.payment.memo = options.id;
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
			var memo = dto.payment.memo;
			memo = substring(StellarSdk.StrKey.encodeSha256Hash(memo), 0, 28);
			builder.addMemo(StellarSdk.Memo.text(memo));	
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
	  	if (payment.to !== accountId) {
	      return;
	    }
	    var asset = (payment.asset_type === 'native') ? 'lumens' : payment.asset_code + ':' + payment.asset_issuer;
	    
	    verifyPayment(dto, payment)
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

function verifyPayment(dto, payment) {
	var amountIsEqual = false;
	var destinationKeyIsEqual = false;
	var memoIsEqual = false;
	var publicKeyIsEqual = false;
	var server = new StellarSdk.Server(_network.uri);

	return server.transactions()
	.transaction(payment.transaction_hash)
	.call()
	.then(function (result) {
		amountIsEqual = parseFloat(dto.payment.amount) === parseFloat(payment.amount);
		destinationKeyIsEqual = dto.payment.to === payment.to;
		memoIsEqual = dto.payment.memo === StellarSdk.StrKey.decodeSha256Hash(result.memo).toString();
		publicKeyIsEqual = dto.payment.from && payment.from === result.source_account;
		var result = amountIsEqual && destinationKeyIsEqual && memoIsEqual && publicKeyIsEqual;
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