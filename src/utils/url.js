export function redirect(url, qs) {
	if (window) {
		window.location.href = url + toQueryString(qs);	
	}
};

export function useRedirectUrl(options, result) {
	if (options.redirectUrl) {
		var qs = {
			hash: result.hash ? result.hash : result.transaction_hash ? result.transaction_hash : '',
			link: result._links.transaction.href
		};
		redirect(options.redirectUrl, qs);
	}
};

export function toQueryString(params) {
	var s = '';
	for (var p in params) {
		s += s.length === 0 ? '?' : '&';
		s += p + '=' + encodeURIComponent(params[p]);
	}
	return s;
};