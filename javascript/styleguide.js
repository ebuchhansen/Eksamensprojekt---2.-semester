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

 let text = ["Min side", "Kollegaer"]
 function changeText (element, text) {
   element.text = text;
 }

 let farveArray = [
   ["<div>"+"#FCFAF0"+"</div>"],
   ["<div>"+"#DCBCFD"+"</div>"],
   ["<div>"+"#36244D"+"</div>"],
   ["<div>"+"#4E3B66"+"</div>"],
   ["<div>"+"#CBEBDB"+"</div>"],
   ["<div>"+"#F2D7CA"+"</div>"],
 ];
 
