let number = 1

if (number > 0){
    console.log("ifWorking")
}
else {
    console.log("elseWorking")
}

let ordo = document.getElementById("ordo");
document.getElementById("ordo").innerHTML = "Ordo"


const kodeord = {
    firstName: "Glemt",
    lastName: " kodeord",
    fullName: function() {
      return this.firstName + this.lastName;
    }
};
document.getElementById("opret").innerHTML = kodeord.fullName();


const bruger = ["Opret", " bruger"];

document.getElementById("opret2").innerHTML =
bruger[0] + bruger[1];


let text = "";
let i = 0;
while (i < 1) {
    text += "<h2>Login</h2>";
    i++;
}
document.getElementById("logintitle").innerHTML = text;