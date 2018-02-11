import constants from '../constants';
import {createElementFromHTML} from '../utils/dom';
import elems from './elems';
import QRCode from 'qrcode';
import {paymentAwaitingTemplate} from '../templates/template';

export function createPaymentAwaitingTemplate(dto) {
	var template = paymentAwaitingTemplate();
	var compiledHtml = template(dto);
	elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

	var progressPanel = document.querySelector(elems.progressPanel.selector);
	elems.progressPanel.elem = progressPanel;

	var qrCodeCanvas = elems.root.elem.querySelector('.qrcode');

	QRCode.toCanvas(qrCodeCanvas, dto.payment.to, function (error) { // todo: standardized format that popular wallets use for payment data
		if (error) {
			console.error(error);
		}
	});

	elems.header.elem.classList.add('progress');

	showPaymentAwaitingTemplate();

	return progressPanel;
}

export function showPaymentAwaitingTemplate() {
	elems.formPanel.elem.classList.add(constants.CLASS.hidden);
	elems.progressPanel.elem.classList.remove(constants.CLASS.hidden);
};

export function showPaymentAwaitingProgress() {
	return new Promise(function(resolve) {
		var statusElem = elems.header.elem.querySelector('.status');
		var statusMsgs = [
			'transaction received',
			'processing transaction',
			'verifying transaction',
			'payment complete'
		];
		var i = 0,
		increment = 2000,
		interval = setInterval(function() {
			statusElem.innerHTML = statusMsgs[i];
			if (i == statusMsgs.length-1) {
				clearInterval(interval);
				resolve();
			}
			i++;
		}, increment);
	});
}