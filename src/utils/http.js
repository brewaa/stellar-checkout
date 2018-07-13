import {toQueryString} from './url';

export function httpRequest(method, url, params, body, accessToken) {
	method = method || 'GET';
	url = url || '';
	params = params || '';
	body = body || '';
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
		xhr.send(body);
	}).catch(function(err) {
		console.log(err);
	})
};