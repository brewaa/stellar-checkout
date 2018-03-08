import constants from '../../constants';
import {copy} from '../../utils/clipboard';
import l10n from '../../l10n';

let isCopying = false;

export function onCopyField(e) {
    if (isCopying) {
        return;
    }
    isCopying = true;
    var copied = copy.call(this, e.target.parentNode.parentNode.querySelector(constants.SELECTOR.clipBoardInput));
    if (copied) {
        var l = l10n.localizer;
        var elem = document.createElement('span');
        elem.classList.add(constants.CLASS.copied);
        elem.innerHTML = l.localize('isCopied', 'copied');
        e.target.blur();
        e.target.parentNode.parentNode.parentNode.appendChild(elem);
        setTimeout(function() {
            e.target.parentNode.parentNode.parentNode.removeChild(elem);
            isCopying = false;
        }, 400);
    }
};