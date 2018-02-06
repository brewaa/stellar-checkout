import constants from './constants';

export function _err(msg, msgType) {
	msgType = msgType || constants.MESSAGE_TYPE.ERROR;
	var messageType = msgType ? ' ' + msgType : '';
	return constants.APP_NAME + messageType + ' ' + msg;
}

export function httpRequest(method, url, params, body, accessToken) {
	method = method || 'GET';
	url = url || '';
	params = params || '';
	accessToken = accessToken;
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load', function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(xhr.response);
			}  else {
				reject(Error(xhr.statusText));
			}
		});
		xhr.addEventListener('error', function() {
			reject(Error('http request failed (XHR error)'));						
		});
		if (typeof params === 'object') {
			params = toQueryString(params);
		}
		xhr.open(method, url+params);
		if (accessToken) {
			xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);	
		}
		xhr.send(body || '');
	}).catch(function(err) {
		console.log(err);
	});
};

export function redirect(url, qs) {
	window.location.href = url + toQueryString(qs);
}

export function redirectIfRedirectUrlConfigured(options, result) {
	if (options.redirectUrl) {
		var qs = {
			hash: result.hash ? result.hash : result.transaction_hash ? result.transaction_hash : '',
			link: result._links.transaction.href
		};
		redirect(options.redirectUrl, qs);
	}
}

export function replace(text, search, replacement) {
    return text.replace(new RegExp(search, 'g'), replacement);
};

export function toQueryString(params) {
	var s = '';
	for (var p in params) {
		s += s.length === 0 ? '?' : '&';
		s += p + '=' + encodeURIComponent(params[p]);
	}
	return s;
};