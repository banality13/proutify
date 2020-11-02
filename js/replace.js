var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
const rExps = [
  [new RegExp('Darmanin', 'gi'), 'Darmaprout'],
  [new RegExp('Le Maire', 'g'), 'Le Prout']
];

while (textNode = walk.nextNode()) {
   rExps.forEach(function (rExp) {
     textNode.nodeValue = textNode.nodeValue.replace(rExp[0], rExp[1]);
   });
}

rExps.forEach(function (rExp) {
  document.title = document.title.replace(rExp[0], rExp[1]);
});
