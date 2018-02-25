// import main from '../templates/main.template.html';
// import paymentAwaiting from '../templates/payment.awaiting.mustache.html';
// import paymentComplete from '../templates/payment.complete.mustache.html';
import paymentError from '../templates/payment.error.mustache.html';
// import paymentForm from '../templates/payment.form.mustache.html';

export function mainTemplate() {
	return main;
};

// export function paymentAwaitingTemplate() {
// 	return paymentAwaiting;
// };

// export function paymentCompleteTemplate() {
// 	return paymentComplete;
// };

export function paymentErrorTemplate() {
	return paymentError;
};

// export function paymentFormTemplate() {
// 	return paymentForm;
// };

export default {
	// main: main,
	// paymentAwaiting: paymentAwaiting,
	// paymentComp?lete: paymentComplete,
	paymentError: paymentError
	// ,
	// paymentForm: paymentForm
};