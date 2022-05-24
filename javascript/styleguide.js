function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


let farveArray = ["#FCFAF0", "#DCBCFD", "#36244D", "#4E3B66", "#CBEBDB", "#F2D7CA"];

for (let i = 0; i < farveArray.length; i++) {
  document.getElementById("farve-array").innerHTML += "<p>" + farveArray[i] + "</p>";
}


