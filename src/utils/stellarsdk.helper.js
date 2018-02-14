import constants from '../constants';

function createDto(options) {
	var dto = constants.DTO;
	dto.env = options.env;
	dto.invoice.currency = options.currency;
	dto.invoice.total = options.total;
	dto.payment.asset = StellarSdk.Asset.native();
	dto.payment.fee = .00001;
	dto.payment.memo = options.memo;
	dto.payment.to = options.destinationKey;
	return dto;
};

function loadSdk() {
	return new Promise(function(resolve, reject) {
		if (window && window.StellarSdk) {
			resolve('stellar-sdk already loaded');
		}
		var script = document.createElement('script');
		script.src = constants.STELLAR_SDK_URL;
		script.async = true;

		script.onload = function() {
			resolve('stellar-sdk loaded');
		};

		script.onerror = function() {
			reject('stellar-sdk could not be loaded');
		};

		var head = document.getElementsByTagName('head')[0];
		if (head) {
			head.appendChild(script);
		}
	});
};

function receivePayment(dto, callback) {
	var networkUri = setNetwork(dto);
	var server = new StellarSdk.Server(networkUri);
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

function setNetwork(dto) {
	var networkUri;
	if (typeof dto.env === 'string' && dto.env.toLowerCase() === 'production') {
		networkUri = 'https://horizon.stellar.org';
		window.StellarSdk.Network.usePublicNetwork();
	} else {
		networkUri = 'https://horizon-testnet.stellar.org';
		window.StellarSdk.Network.useTestNetwork();
	}
	return networkUri;
};

function verifyPayment(dto, payment) {
	var amountIsEqual = dto.payment.amount === payment.amount;
	var publicKeyIsEqual = dto.payment.from === payment.from;
	var result = amountIsEqual && publicKeyIsEqual;
	return result;
};

export default {
	createDto: createDto,
	loadSdk: loadSdk,
	receivePayment: receivePayment
}