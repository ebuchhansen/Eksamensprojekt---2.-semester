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


 let farveArray = ["#FCFAF0", "<br>", "#DCBCFD", "<br>", "#36244D", "<br>", "#4E3B66", "<br>", "#CBEBDB", "<br>", "#F2D7CA"];
 function changeCode() {
   let farverWow = document.getElementById('farve-array');
   for (i = 0; i < farveArray.length; i++)
   farverWow.innerHTML += farveArray[i];
 }
