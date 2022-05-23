let number = 1

if (number > 0){
    console.log("ifWorking")
}
else {
    console.log("elseWorking")
}
//console log virker

let medarbejder = document.getElementById("medarbejder");
document.getElementById("medarbejder").innerHTML = "Medarbejder"
// medarbejder virker

const kodeord = {
    firstName: "Kode",
    lastName: "ord...",
    fullName: function() {
      return this.firstName + this.lastName;
    }
};
document.getElementById("kodeord").innerHTML = kodeord.fullName();


const brugernavn = ["Bruger", "navn..."];

document.getElementById("brugernavn").innerHTML =
brugernavn[0] + brugernavn[1];


let text = "";
let i = 0;
while (i < 1) {
    text += "<p>Adminstrator</p>";
    i++;
}
document.getElementById("administrator").innerHTML = text;