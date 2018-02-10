const FORMATS = {
    CURRENCY: 'CURRENCY',
    CURRENCY_NO_FRACTION: 'CURRENCY_NO_FRACTION',
    DECIMAL: 'DECIMAL',
    DECIMAL7: 'DECIMAL7',
    DOUBLE: 'DOUBLE',
    PERCENT: 'PERCENT'
};

var formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

var formatCurrencyNoFraction = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

var formatDecimal = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 8,
    maximumFractionDigits: 8
});

var formatDecimal7 = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 7
});

var formatDouble = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function format(theFormat, num) {
    if (theFormat) {
        switch (theFormat) {
            case FORMATS.CURRENCY:
                return formatCurrency.format(num);
            case FORMATS.CURRENCY_NO_FRACTION:
                return formatCurrencyNoFraction.format(num);
            case FORMATS.DECIMAL:
                return formatDecimal.format(num);
            case FORMATS.DECIMAL7:
                return formatDecimal7.format(num);
            case FORMATS.DOUBLE:
                return formatDouble.format(num);
            case FORMATS.PERCENT:
                return formatDouble.format(num) + '%';
            default:
                break;
        }
    }
    return num;
}

export default {
    FORMATS: FORMATS,
    format: format,
    formatCurrency: formatCurrency,
    formatCurrencyNoFraction: formatCurrencyNoFraction,
    formatDecimal: formatDecimal,
    formatDecimal7: formatDecimal7,
    formatDouble: formatDouble
};