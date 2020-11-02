const replace = [
  {
    "name": "Darmanin",
    "replaceWith": "Darmaprout"
  },
  {
    "name": "Bruno Le Maire|Bruno Lemaire",
    "replaceWith": "Bruno Le Prout"
  },
  {
    "name": "Jean Castex",
    "replaceWith": "Jean Proutex"
  }
];

// Create arrya of regexps with all above elements
const rExps = []
replace.forEach((element) => {
  rExps.push([new RegExp(element["name"]), element["replaceWith"]])
})

var textNode;
let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Replace in title
rExps.forEach(function (rExp) {
  document.title = document.title.replace(rExp[0], rExp[1]);
});

while (textNode = walk.nextNode()) {
  rExps.forEach(function (rExp) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp[0], rExp[1]);
  });
}
