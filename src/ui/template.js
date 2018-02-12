import main from '../templates/main.template.html';
import paymentAwaiting from '../templates/payment.awaiting.mustache.html';
import paymentComplete from '../templates/payment.complete.mustache.html';
import paymentError from '../templates/payment.error.mustache.html';

export function mainTemplate() {
	return main;
};

export function paymentAwaitingTemplate() {
	return paymentAwaiting;
};

export function paymentCompleteTemplate() {
	return paymentComplete;
};

export function paymentErrorTemplate() {
	return paymentError;
};

export default {
	main: main,
	paymentAwaiting: paymentAwaiting,
	paymentComplete: paymentComplete,
	paymentError: paymentError
};