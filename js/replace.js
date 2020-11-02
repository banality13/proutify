const replace = [
  {
    "name": "Darmanin",
    "replaceWith": "Darmaprout"
  },
  {
    "name": "Bruno Le Maire",
    "replaceWith": "Bruno Le Prout"
  },
  {
    "name": "Jean Castex",
    "replaceWith": "Jean Proutex"
  }
];

replace.forEach((element) => {
  var textNode;
  let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

  const rExp = new RegExp(element['name'], 'gi');
  document.title = document.title.replace(rExp, element['replaceWith']);

  while (textNode = walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, element['replaceWith']);
  }
})
