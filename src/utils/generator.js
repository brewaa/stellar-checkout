<<<<<<< HEAD
export function randomId (length) {
  var result = ''
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var i = 0
  var len = !isNaN(length) ? length : 8
  for (; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
};
=======
export function randomId(length) {
	var result = "";
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var i = 0, 
	len = !isNaN(length) ? length : 8;
	for (; i < len; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
};
>>>>>>> parent of a4b59fd... no message
