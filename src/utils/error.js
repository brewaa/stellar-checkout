import constants from '../constants';

export function Err(msg, msgType) {
	msgType = msgType || constants.MESSAGE_TYPE.ERROR;
	var messageType = msgType ? ' ' + msgType : '';
	return constants.APP_NAME + messageType + ' ' + msg;
};

export function ErrObject(msg, elem) {
	return {
		elem: elem,
		msg: msg
	}
};