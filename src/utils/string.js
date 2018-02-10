export function replace(text, search, replacement) {
    return text.replace(new RegExp(search, 'g'), replacement);
};