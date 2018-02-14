import constants from './constants';

export function ValidationMessage(msg, elem, msgType) {
	this.elem = elem;
	this.msg = msg;
	this.msgType = msgType || constants.MESSAGE_TYPE.ERROR;
};

ValidationMessage.prototype.toString = function() {
	var messageType = this.msgType ? ' ' + this.msgType : '';
	return constants.APP.name + messageType + ' ' + this.msg;
};