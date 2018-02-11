import error from './error.mustache.html';
import main from './main.template.html';
import paymentAwaiting from './payment.awaiting.mustache.html';
import paymentComplete from './payment.complete.mustache.html';

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