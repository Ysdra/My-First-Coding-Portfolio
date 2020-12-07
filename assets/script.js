var navbar = document.querySelector(".nav");
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener ("click", toggleButton);

function toggleButton(){
    navbar.classList.toggle("showNav")
    hamburger.classList.toggle("showClose")
}


