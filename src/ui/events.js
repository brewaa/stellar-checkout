import constants from '../constants';
import {copy} from '../utils/clipboard';
import formatter from '../utils/formatter';
import {toggleValidationFeedback, validateAmount, validatePublicKey, validateTotal} from './validate';
import {replace} from '../utils/string';

// let isCopying = false;

export function onCopy(e) {
    // if (isCopying) {
    //     return;
    // }
    // isCopying = true;
    var copied = copy.call(this, e.target.parentNode.parentNode.querySelector('.txt'));
    if (copied) {
        var elem = document.createElement('span');
        elem.classList.add('copied');
        elem.innerHTML = 'copied';
        e.target.blur();
        e.target.parentNode.parentNode.parentNode.appendChild(elem);
        setTimeout(function() {
            e.target.parentNode.parentNode.parentNode.removeChild(elem);
            // isCopying = false;
        }, 500);
    }
};

export function onValidateAmount(e) {
	var amt = e.target.value;
	var formattedAmount = replace(formatter.format(formatter.FORMATS.DECIMAL7, amt), ',', '');
	constants.DTO.payment.amount = formattedAmount;
	toggleValidationFeedback(e.target, validateAmount());
};

export function onValidatePublicKey(e) {
	constants.DTO.payment.from = e.target.value;
	toggleValidationFeedback(e.target, validatePublicKey(e.target.value));
};

export function onValidateTotal(e) {
	constants.DTO.invoice.total = e.target.value;
	toggleValidationFeedback(e.target, validateTotal());
	constants.CMCCLIENT.fetch();
};