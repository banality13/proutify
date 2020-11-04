// vim:set sw=2 ts=2 sts=2 expandtab:
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
    "name": "Jean-Michel Blanquer",
    "replaceWith": "Jean-Michel Blanc-Prout"
  },
  {
    "name": "Marlène Schiappa",
    "replaceWith": "Marlène Schiaprout"
  },
  {
    "name": "Élisabeth Borne|Elisabeth Borne",
    "replaceWith": "Élizabeth Prout"
  },
  {
    "name": "Éric Dupond-Moretti",
    "replaceWith": "Éric Duprout-Moretti"
  },
  {
    "name": "Gabriel Attal",
    "replaceWith": "Gabriel Prouttal",
  },
  {
    "name": "Jean-Yves Le Drian|Jean Yves Le Drian|Jean-Yves le Drian",
    "replaceWith": "Jean-Prout Le Drian"
  },
  {
    "name": "Agnès Pannier-Runacher",
    "replaceWith": "Agnès Proutier-Runacher"
  },
  {
    "name": "Cédric O|Cedric O",
    "replaceWith": "Cédric prOut"
  },
  {
    "name": "Florence Parly",
    "replaceWith": "Florence Proutly"
  },
  {
    "name": "Roselyne Bachelot",
    "replaceWith": "Proutelyne Bachelot"
  },
  {
    "name": "Olivier Véran",
    "replaceWith": "Proutivier Véran"
  },
  {
    "name": "Frédérique Vidal|Frederique Vidal",
    "replaceWith": "Frédérique Proutal"
  },
  {
    "name": "Amélie de Montchalin|Amélie De Montchalin",
    "replaceWith": "Amélie de Proutalin"
  },
    {
    "name": "président|Président",
    "replaceWith": "proutident"
  },
  {
    "name": "Franck Riester",
    "replaceWith": "Franck Prouster"
  },
  {
    "name": "Emmanuelle Wargon",
    "replaceWith": "Emmanuelle Prouton"
  },
  {
    "name": "Jean-Baptiste Djebbari",
    "replaceWith": "Jean-Baptiste Djeprouti"
  },
  {
    "name": "Olivier Dussopt",
    "replaceWith": "Olivier Duprout"
  },
  {
    "name": "Geneviève Darrieussecq",
    "replaceWith": "Geneviève Duproutsecq"
  },
  {
    "name": "Sébastion Lecornu",
    "replaceWith": "Sébastien Leproutu"
  },
  {
    "name": "ministres|Ministres",
    "replaceWith": "Miniprouts"
  },
  {
    "name": "ministre|Ministre",
    "replaceWith": "Miniprout"
  },
  {
    "name": "Trump",
    "replaceWith": "Trumpet"
  },
  {
    "name": "Nicolas Sarkozy",
    "replaceWith": "Nicoprout Sarkozy"
  },
  {
    "name": "Geoffroy Roux de Bézieux",
    "replaceWith": "Geoffroy Prout de Bézieux"
  },
  {
    "name": "Le Pen",
    "replaceWith": "Le Prout"
  },
   {
    "name": "Zemmour",
    "replaceWith": "Zeprrout"
  },
  {
    "name": "Christian Estrosi",
    "replaceWith": "Christian Estroprout"
  },
  {
    "name": "Éric Ciotti|Eric Ciotti",
    "replaceWith": "Éric Proutti"
  },
];
/* For copy/paste
  {
    "name": "",
    "replaceWith": ""
  },
*/

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
