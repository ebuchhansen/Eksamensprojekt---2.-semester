/* 
JavaScript
Placering of udførelse af JS
Fejlfinding (debugging)


Variabler og typer
Let, var, const
Typer: number 1-2-3, strings “”, boolean true-false


Operatorer
= tildelder en værdi (assignment operator)
==, ===, !=, > sammenligner (comperison operators)
+, -, *, / regner ud (arithmetic operators)
&&, ||, ! used to determin the logic between variables or values (logical operators)


Arrays
"... en variable der indeholder en række af værdier..."
eksemple:
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML=cars[1];
    cars.push("Tesla");   // tilføjer et element


Kontrolstruktur (if-else)
if (hour<18){
    greeting = "Good day";
}


Kontrolstruktur (Loops)


Objekter
Et objekt kan* indeholde properties(variabler) og metoder(funktioner), behøver ikke begge
eksempel:
Properties: make, model, color, year, price
Methods: start, drive, park
window.alert("hest");
document.getElementById("hest");
Math.round(4.7);
var d = new Date();


DOM (document objekt model)
Den går ind og læser koden html’en og laver en form for stamtræs model med hvor de forskellige elementer ligger


Funktioner
() er et funktions kald
Er en kommando
Declaration 
Eksempel:
Nr. 1
function name (parameter1, parameter2, parameter3) {
 	// code to be executed
}
Nr. 2
var name = function(parameter1, parameter2, parameter3) {
 	// code to be executed
}
Nr. 3
Arrow function
Fat function
Anonym function ()


Variable scoope (herunder LET)
let (er blokscope)
var (er functionscope)
Global Variable
Local Varaible


Events
“Ting” der sker med HTML elementer
Man kan smide events direkte ind i HTML dokumentet
Eller man kan smide det i JavaScript dokumentet
*brug nummer 2, for at holde det rent, og læreren glad


lav egent objekt thomas ville synes at det ville være absolut fedt bachelor "webudvikler" niveau
- kodning


*/

// fra sidste projekt

// indeholder: variable let, assignment operator =, 
let instagramTitle = document.getElementById("instagramtitle");
instagramTitle.style.color = "#FD5A05";


// indeholder: variable let,
let number = 1


// indeholder: kontrolstruktur (if-else), type number
if (number > 0){
    document.getElementsById("center").style.textAlign = "center";
}
else {
    
}


// indeholder: variable const, assignment operator =, type string, funktion, arithmetic operator +, objekt
const butik = {
    firstName: "@butik",
    lastName: "pulvis",
    fullName: function() {
      return this.firstName + this.lastName;
    }
};


// indeholder: assignment operator =, (funktion)
document.getElementById("instaid").innerHTML = butik.fullName();


// indeholder: variable const, assignment operator =, type string, array, 
const instagramp = ["På vores instagram vil vi hyppigt lave opslag med en masse unikke skatte,", "<br>med dertilhørende priser så du kan reservere  og hente i butikken"];


// indeholder: assignment operator =, arithmetic operator +, 
document.getElementById("instagramp").innerHTML =
instagramp[0] + instagramp[1];


// indeholder: variable let, kontrolstruktur (Loops), assignment operator =, type string, type number, increment operator ++, addition assignment +=, 
let text = "";
let i = 0;
while (i < 1) {
    text += "<h1>Hvordan forgår en rydning?</h1>";
    i++;
}
document.getElementById("rydningtitle").innerHTML = text;

// slut


