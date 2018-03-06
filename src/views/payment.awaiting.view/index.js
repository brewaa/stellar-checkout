import constants 		from '../../constants';
import walletFormat 	from '../../utils/wallet.format';
import QRCode 			from 'qrcode';

import BaseView 				from '../base.view';
import thisElems 				from './payment.awaiting.elems';
import paymentAwaitingL10n 		from './payment.awaiting.l10n.js';
import paymentAwaitingTemplate 	from './templates/payment.awaiting.mustache.html';

export class PaymentAwaitingView extends BaseView {

	constructor() {
		super(thisElems, paymentAwaitingTemplate, paymentAwaitingL10n);
		this.isQrGenerated = false;
	}

	create() {
		super.create();

		var self = this;

		// Show Wallet Picker
		thisElems.linkShowWalletPicker.elem.addEventListener('click', function(e) {
			e.preventDefault();
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

				thisElems.xdrTest.elem.value = result;
			});
		});
	}

	showProgress() {
		var self = this;
		return new Promise(function(resolve) {
			var statusMsgs = [
				self.localizer.localize('transactionReceived', 'transaction received'),
				self.localizer.localize('processingTransaction', 'processing transaction'),
				self.localizer.localize('verifyingTransaction', 'verifying transaction'),
				self.localizer.localize('paymentComplete', 'payment complete')
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