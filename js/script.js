var hamburger = document.getElementsByClassName("header__hamburger");
var header__menu = document.getElementsByClassName("header__menu");
var header__right = document.getElementsByClassName("header__right");

hamburger[0].addEventListener("click", clicked);

function clicked(event) {
    hamburger[0].classList.toggle("click");
    if(header__menu[0].style.display == "none" || header__menu[0].style.display=="") {
        header__menu[0].style.display = "flex";
        header__right[0].style.display = "flex";
    }else {
        header__menu[0].style.display = "none";
        header__right[0].style.display = "none";
    }
}