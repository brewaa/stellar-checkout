export var _locale = 'en-US';

export function formatDouble(num, locale) {
    locale = locale || _locale;
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
};

export function formatDecimal7(num, locale) {
    locale = locale || _locale;
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 7
    }).format(num);
};