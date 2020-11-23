// vim:set sw=2 ts=2 sts=2 expandtab:
const replace = [
  {
    "name": "Darmaprout",
    "replaceWith": "Darmaprout"
  },
  {
    "name": "Bruno Le Prout|Bruno Lemaire",
    "replaceWith": "Bruno Le Prout"
  },
  {
    "name": "Jean Proutex",
    "replaceWith": "Jean Proutex"
  },
  {
    "name": "Emmanuel Maprout|Emmanuel Macron",
    "replaceWith": "Emmanuel Maprout"
  },
  {
    "name": "Barbara Proutili",
    "replaceWith": "Barbara Proutili"
  },
  {
    "name": "Jean-Michel Blanc-Prout",
    "replaceWith": "Jean-Michel Blanc-Prout"
  },
  {
    "name": "Marlène Schiaprout",
    "replaceWith": "Marlène Schiaprout"
  },
  {
    "name": "Élizabeth Prout|Elisabeth Borne",
    "replaceWith": "Élizabeth Prout"
  },
  {
    "name": "Éric Duprout-Moretti",
    "replaceWith": "Éric Duprout-Moretti"
  },
  {
    "name": "Gabriel Prouttal",
    "replaceWith": "Gabriel Prouttal",
  },
  {
    "name": "Jean-Prout Le Drian|Jean Yves Le Drian|Jean-Yves le Drian",
    "replaceWith": "Jean-Prout Le Drian"
  },
  {
    "name": "Agnès Proutier-Runacher",
    "replaceWith": "Agnès Proutier-Runacher"
  },
  {
    "name": "Cédric prOut|Cedric O",
    "replaceWith": "Cédric prOut"
  },
  {
    "name": "Florence Proutly",
    "replaceWith": "Florence Proutly"
  },
  {
    "name": "Proutelyne Bachelot",
    "replaceWith": "Proutelyne Bachelot"
  },
  {
    "name": "Proutivier Véran",
    "replaceWith": "Proutivier Véran"
  },
  {
    "name": "Frédérique Proutal|Frederique Vidal",
    "replaceWith": "Frédérique Proutal"
  },
  {
    "name": "Amélie de Proutalin|Amélie De Montchalin",
    "replaceWith": "Amélie de Proutalin"
  },
    {
    "name": "proutident|Président",
    "replaceWith": "proutident"
  },
  {
    "name": "Franck Prouster",
    "replaceWith": "Franck Prouster"
  },
  {
    "name": "Emmanuelle Prouton",
    "replaceWith": "Emmanuelle Prouton"
  },
  {
    "name": "Jean-Baptiste Djeprouti",
    "replaceWith": "Jean-Baptiste Djeprouti"
  },
  {
    "name": "Olivier Duprout",
    "replaceWith": "Olivier Duprout"
  },
  {
    "name": "Geneviève Duproutsecq",
    "replaceWith": "Geneviève Duproutsecq"
  },
  {
    "name": "Sébastien Leproutu",
    "replaceWith": "Sébastien Leproutu"
  },
  {
    "name": "miniprouts|Miniprouts",
    "replaceWith": "Miniprouts"
  },
  {
    "name": "ministre|Ministre",
    "replaceWith": "Miniprout"
  },
  {
    "name": "Trumpet",
    "replaceWith": "Trumpet"
  },
  {
    "name": "Nicoprout Sarkozy",
    "replaceWith": "Nicoprout Sarkozy"
  },
  {
    "name": "Geoffroy Prout de Bézieux",
    "replaceWith": "Geoffroy Prout de Bézieux"
  },
  {
    "name": "Le Prout",
    "replaceWith": "Le Prout"
  },
  {
    "name": "Christian Estroprout",
    "replaceWith": "Christian Estroprout"
  },
  {
    "name": "Éric Proutti|Eric Ciotti",
    "replaceWith": "Éric Proutti"
  },
  {
    "name": "Erdogan",
    "replaceWith": "Erdoprout"
  },
  {
    "name": "Alexander De Croo",
    "replaceWith": "Alexander De Prout"
  },
  {
    "name": "Merkel",
    "replaceWith": "Merprout"
  },
  {
    "name": "Boris Johnson",
    "replaceWith": "Boris Johnprout"
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
