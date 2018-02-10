import constants from '../constants';

export function Err(msg, elem, msgType) {
	this.elem = elem;
	this.msg = msg;
	this.msgType = msgType || constants.MESSAGE_TYPE.ERROR;
};

Err.prototype.toString = function() {
	var messageType = this.msgType ? ' ' + this.msgType : '';
	return constants.APP.name + messageType + ' ' + this.msg;
};