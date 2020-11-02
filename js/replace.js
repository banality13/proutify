var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
const rExp = new RegExp('Darmanin', 'gi');

while (textNode = walk.nextNode()) {
  textNode.nodeValue = textNode.nodeValue.replace(rExp, 'Darmaprout');
}

document.title = document.title.replace(rExp, 'Darmaprout');
