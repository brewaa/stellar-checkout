import constants from '../constants';
import sdkHelper from '../utils/stellarsdk.helper';

function toDestinationKey(dto) {
	return new Promise(function(resolve) {
		resolve(dto.payment.to);
	});
};

function toEnvelopeXdr(dto) {
	return new Promise(function(resolve) {
		sdkHelper.buildTransaction(dto)
		.then(function(result) {
			resolve(result.toEnvelope().toXDR('base64'));	
		});
	});
};

function toStarGazer(dto) {
	return new Promise(function(resolve) {
		resolve({
		    "stellar": {
		        "payment": {
		            "destination":  dto.payment.to,
		            "network":      getHash(dto.payment.network._networkPassphrase),
		            "amount":       dto.payment.amount,
		            "asset": {
		                "code":     dto.payment.asset.code,
		                "issuer":   dto.payment.asset.issuer
		            },
		            "memo": {
		                "type":     dto.payment.memo ? 'MemoText' : null,
		                "value":    dto.payment.memo
		            }
		        }
		    }
		});
	});
};

function getHash(passphrase) {
    return new StellarSdk.Network(passphrase)
    .networkId().toString('hex').slice(0, 8);
};

export default {
	destinationkey: toDestinationKey,
	envelopexdr: toEnvelopeXdr,
	stargazer: toStarGazer
};