import constants from '../constants';
import {createElementFromHTML} from '../utils/dom';
import elems from './elems';
import QRCode from 'qrcode';
import {paymentAwaitingTemplate} from '../ui/template';
import walletFormat from '../utils/wallet.format';

export function createPaymentAwaitingTemplate(dto) {

	// Load the mustache template
	var template = paymentAwaitingTemplate();
	var compiledHtml = template(dto);

	// Append to DOM
	elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

	// Add the element to elems
	var paymentAwaitingPanel = document.querySelector(elems.paymentAwaitingPanel.selector);
	elems.paymentAwaitingPanel.elem = paymentAwaitingPanel;

	// QR Code
	var qrCodeCanvas = elems.root.elem.querySelector('.qrcode');

	QRCode.toCanvas(qrCodeCanvas, dto.payment.to, function (error) { // todo: standardized format that popular wallets use for payment data
		if (error) {
			console.error(error);
		}
	});

	// Wallet picker
	var walletPicker = elems.paymentAwaitingPanel.elem.querySelector('#walletPicker');
	walletPicker.addEventListener('change', function(e) {
		var el = e.target;
		var data = dto.payment.to;
		var format = el.options[el.selectedIndex].value;
		if (format) {
			walletFormat[format](dto).then(function(result) {
				QRCode.toCanvas(qrCodeCanvas, JSON.stringify(result), function (error) {
					if (error) {
						console.error(error);
					}
				});
			});
		}
	});

	// Show the payment await page	
	showPaymentAwaitingTemplate();
}

export function showPaymentAwaitingTemplate() {
	elems.header.elem.classList.add('payment_awaiting');
	elems.formPanel.elem.classList.add(constants.CLASS.hidden);
	elems.paymentAwaitingPanel.elem.classList.remove(constants.CLASS.hidden);
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