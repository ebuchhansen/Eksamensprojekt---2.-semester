let number = 1;

if (number > 0){
    console.log("ifWorking");
}
else {
    console.log("elseWorking");
}

let ordo = document.getElementById("ordo");
document.getElementById("ordo").innerHTML = "Ordo";


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



let objPeople = [
	{
		username: "amalie",
		password: "jorgensen"
	},
	{
		username: "andrea",
		password: "lyng"
	},
	{
		username: "julie",
		password: "bekker"
	},
    {
        username: "emilie",
        password: "hansen"
    }

];

function getInfo() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	for(let i = 0; i < objPeople.length; i++) {

		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " er logget ind");

            location.href = "https://www.w3schools.com";

			return;
		}
	}
	console.log("forkert brugernavn eller kodeord");
}