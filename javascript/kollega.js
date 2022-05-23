let kollegaListe = [
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
    ["<div>", "img/kollega-img.jpeg", "<p>", "Palle Henriksen", "</p>", "<p>", "Programmør", "</p>", "</div>"],
];

// loop the outer array
for (let i = 0; i < kollegaListe.length; i++) {
    // loop the inner array
    for (let j = 0; j < kollegaListe[i].length; j++) {
      if (j==1){
        document.getElementById("kollega-liste").innerHTML += "<img class='kollega-billeder' src='" + kollegaListe[i][j] + "'>";
      } else {
        document.getElementById("kollega-liste").innerHTML += kollegaListe[i][j];
      }
    }
}

/*document.getElementById("kollega-liste").innerHTML = "<img src=\""+kollegaListe[0][0]+"\">";*/
