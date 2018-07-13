export function createElementFromHTML(tagName, htmlString) {
  var div = document.createElement(tagName);
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
};