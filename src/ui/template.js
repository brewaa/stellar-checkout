import error from '../templates/error.mustache.html';
import main from '../templates/main.template.html';
import paymentAwaiting from '../templates/payment.awaiting.mustache.html';
import paymentComplete from '../templates/payment.complete.mustache.html';

export function errorTemplate() {
	return error;
};

export function mainTemplate() {
	return main;
};

export function paymentAwaitingTemplate() {
	return paymentAwaiting;
};

export function paymentCompleteTemplate() {
	return paymentComplete;
};

export default {
	error: error,
	main: main,
	paymentAwaiting: paymentAwaiting,
	paymentComplete: paymentComplete
};