/**
 * Кнопка гамбургера при уменьщения размера окна
 */
var hamburger = document.getElementsByClassName("header__hamburger");
var header__menu = document.getElementsByClassName("header__menu");
var header__right = document.getElementsByClassName("header__right");

hamburger[0].addEventListener("click", clicked);

function clicked(event) {
    hamburger[0].classList.toggle("hamburger__bar-toggle");
    if(header__menu[0].style.display == "none" || header__menu[0].style.display=="") {
        header__menu[0].style.display = "flex";
        header__right[0].style.display = "flex";
    }else {
        header__menu[0].style.display = "none";
        header__right[0].style.display = "none";
    }
}

/**
 * событие при уменьщения размера окна и как должно выглядеть кнопка гамбургера 
 */

function handleWindowChange(param) {
    if(param.matches) {
        if(header__menu[0].style.display == "none" || header__menu[0].style.display=="none") {
            header__menu[0].style.display = "flex";
            header__right[0].style.display = "flex";
        }
    }else {
        header__menu[0].style.display = "none";
        header__right[0].style.display = "none";
    }
}

var windowSize = window.matchMedia('(min-width: 980px)')
handleWindowChange(windowSize)
windowSize.addListener(handleWindowChange)