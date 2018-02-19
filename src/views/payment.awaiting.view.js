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
		this.isQrGenerated = false;
	}

	create() {
		super.create();

		var self = this;

		// Show Wallet Picker
		thisElems.linkShowWalletPicker.elem.addEventListener('click', function() {
			thisElems.walletPicker.elem.parentNode.parentNode.classList.toggle(constants.CLASS.hidden);
			thisElems.walletPicker.elem.focus();
		});

		// Wallet picker
		thisElems.walletPicker.elem.addEventListener('change', function(e) {
			thisElems.qrCodeSpinner.elem.classList.toggle(constants.CLASS.hidden);
			thisElems.qrCodeCanvas.elem.classList.toggle(constants.CLASS.hidden);
			var el = e.target;
			var format = el.options[el.selectedIndex].value;
			if (format) {
				self.generateQrCode(format);
			}
		});

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
		if (!this.isQrGenerated) {
			this.generateQrCode('envelopexdr');
		}
	}

	update() {
		super.update();
		thisElems.stellarCheckoutConfirmTo.elem.value = this.dto.payment.to;
		thisElems.stellarCheckoutConfirmFrom.elem.value = this.dto.payment.from;
		thisElems.stellarCheckoutConfirmAmount.elem.value = this.dto.payment.amount;
	}

	generateQrCode(format) {
		var self = this;
		walletFormat[format](this.dto).then(function(result) {
			QRCode.toCanvas(thisElems.qrCodeCanvas.elem, result, function (error) {
				if (error) {
					console.error(error);
				}
				self.isQrGenerated = true;
				thisElems.qrCodeSpinner.elem.classList.toggle(constants.CLASS.hidden);
				thisElems.qrCodeCanvas.elem.classList.toggle(constants.CLASS.hidden);
				thisElems.walletPicker.elem.parentNode.parentNode.classList.add(constants.CLASS.hidden);
			});
		});
	}

	showProgress() {
		return new Promise(function(resolve) {
			var statusMsgs = [
				'transaction received',
				'processing transaction',
				'verifying transaction',
				'payment complete'
			];
			var i = 0,
			increment = 2000,
			interval = setInterval(function() {
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