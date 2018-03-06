import constants from '../../constants';
import {copy} from '../../utils/clipboard';
import {Localizer} from '../../utils/l10n';
import commonLocalizations from '../../ui/l10n.common';

let isCopying = false;

export function onCopy(e) {
    if (isCopying) {
        return;
    }
    isCopying = true;
    var copied = copy.call(this, e.target.parentNode.parentNode.querySelector(constants.SELECTOR.clipBoardInput));
    if (copied) {
        var l = new Localizer(constants.LANG, commonLocalizations);
        var elem = document.createElement('span');
        elem.classList.add(constants.CLASS.copied);
        elem.innerHTML = l.localize('copied', 'copied');
        e.target.blur();
        e.target.parentNode.parentNode.parentNode.appendChild(elem);
        setTimeout(function() {
            e.target.parentNode.parentNode.parentNode.removeChild(elem);
            isCopying = false;
        }, 400);
    }
};