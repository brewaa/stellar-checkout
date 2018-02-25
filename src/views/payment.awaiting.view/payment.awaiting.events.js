import constants from '../../constants';
import {copy} from '../../utils/clipboard';

let isCopying = false;

export function onCopy(e) {
    if (isCopying) {
        return;
    }
    isCopying = true;
    var copied = copy.call(this, e.target.parentNode.parentNode.querySelector(constants.SELECTOR.clipBoardInput));
    if (copied) {
        var elem = document.createElement('span');
        elem.classList.add(constants.CLASS.copied);
        elem.innerHTML = 'copied';
        e.target.blur();
        e.target.parentNode.parentNode.parentNode.appendChild(elem);
        setTimeout(function() {
            e.target.parentNode.parentNode.parentNode.removeChild(elem);
            isCopying = false;
        }, 400);
    }
};