let htmlDiv = document.getElementById("divBox");

function replaceTag(node, tagName) {
  if (!(node instanceof Element)) {
    console.error("Invalid node providing");
    return null;
  }

  let newElement = document.createElement(tagName);
  newElement.innerText = node.innerText;

  for (let attr of node.attributes) {
    newElement.setAttribute(attr.name, attr.value);
  }

  node.replaceWith(newElement);
}

replaceTag(htmlDiv, "section");