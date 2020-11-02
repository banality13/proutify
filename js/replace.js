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
  },
  {
    "name": "Macron|Emmanuel Macron",
    "replaceWith": "Emmanuel Maprout"
  },
  {
    "name": "Barbara Pompili",
    "replaceWith": "Barbara Proutili"
  },
  {
    "name": "Jean-Michel Blanquer" ,
    "replaceWith": "Jean-Michel Blanc-Prout"
  },
  {
    "name": "Marlène Schiappa",
    "replaceWith": "Marlène Schiaprout"
  },
  {
    "name": "Élizabeth Borne|Elizabeth Borne",
    "replaceWith": "Élizabeth Prout"
  },
  {
    "name": "Éric Dupond-Moretti",
    "replaceWith": "Éric Duprout-Moretti"
  },
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
