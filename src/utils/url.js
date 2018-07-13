import {replace} from './string'

export function redirect (url, qs) {
  if (window) {
    window.location.href = url + qs
  }
}

export function useRedirectUrl (options, result) {
  if (options.redirectUrl) {
    var url = options.redirectUrl
    var qs = {
      hash: result.hash ? result.hash : result.transaction_hash ? result.transaction_hash : ''
    }
    qs = toQueryString(qs)
    if (url.indexOf('?') !== -1) {
      qs = replace(qs, '\\?', '&')
    }
    redirect(url, qs)
  }
}

export function toQueryString (params) {
  var s = ''
  for (var p in params) {
    s += s.length === 0 ? '?' : '&'
    s += p + '=' + encodeURIComponent(params[p])
  }
  return s
}
