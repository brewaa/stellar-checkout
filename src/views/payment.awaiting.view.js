import BaseView from './base.view';
import constants from '../constants';

import rootElems from '../ui/elems';
import thisElems from '../ui/payment.awaiting.elems';
import {paymentAwaitingTemplate} from '../ui/template';
import QRCode from 'qrcode';
import walletFormat from '../utils/wallet.format';

export class PaymentAwaitingView extends BaseView {

	constructor() {
		super(thisElems, paymentAwaitingTemplate);
	}

	create() {
		super.create();
		//if (!thisElems.root.elem) {
			// Load the mustache template
			//var template = paymentAwaitingTemplate();
			//var compiledHtml = template(dto);

			// Append to DOM
			//elems.root.elem.appendChild(createElementFromHTML('div', compiledHtml));

			// Add the element to elems
			//var paymentAwaitingPanel = document.querySelector(elems.paymentAwaitingPanel.selector);
			//elems.paymentAwaitingPanel.elem = paymentAwaitingPanel;	
		

			// QR Code
			var qrCodeCanvas = thisElems.root.elem.querySelector('.qrcode');

			QRCode.toCanvas(qrCodeCanvas, this.dto.payment.to, function (error) { // todo: standardized format that popular wallets use for payment data
				if (error) {
					console.error(error);
				}
			});

			var self = this;

			// Wallet picker
			var walletPicker = thisElems.root.elem.querySelector('#walletPicker');
			walletPicker.addEventListener('change', function(e) {
				var el = e.target;
				var data = self.dto.payment.to;
				var format = el.options[el.selectedIndex].value;
				if (format) {
					walletFormat[format](self.dto).then(function(result) {
						QRCode.toCanvas(qrCodeCanvas, JSON.stringify(result), function (error) {
							if (error) {
								console.error(error);
							}
						});
					});
				}
			});

			// Add the goBackLink event handler
			//thisElems.goBackLink.elem.addEventListener('click', function() {
				//hidePaymentAwaitingTemplate.call(this);
			//	self.hide()
			//});
		//}
		
		// Show the payment await page	
		//showPaymentAwaitingTemplate();
	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();
		this.update();
	}

	update() {
		super.update();
		thisElems.stellarCheckoutConfirmTo.elem.value = this.dto.payment.to;
		thisElems.stellarCheckoutConfirmFrom.elem.value = this.dto.payment.from;
		thisElems.stellarCheckoutConfirmAmount.elem.value = this.dto.payment.amount;
	}

	showProgress() {
		return new Promise(function(resolve) {
			// var statusElem = thisElems.header.elem.querySelector('.status');
			var statusMsgs = [
				'transaction received',
				'processing transaction',
				'verifying transaction',
				'payment complete'
			];
			var i = 0,
			increment = 2000,
			interval = setInterval(function() {
				console.log(statusMsgs[i]);
				thisElems.statusElem.elem.innerHTML = statusMsgs[i];
				if (i == statusMsgs.length-1) {
					clearInterval(interval);
					resolve();
				}
				i++;
			}, increment);
		});
	}

};