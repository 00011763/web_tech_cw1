export function createElementFromHtml(htmlString) {
  let div = document.createElement('div')
  div.innerHTML = htmlString.trim()

  return div.firstChild
}