/**
 * Кнопка гамбургера при уменьщения размера окна
 */
var hamburger = document.querySelector(".header__hamburger");
var header__menu = document.querySelector(".header__menu");
var header__right = document.querySelector(".header__right");


hamburger.addEventListener("click", clicked);

function clicked(event) {
    hamburger.classList.toggle("hamburger__bar-toggle");
    if(header__menu.classList.contains('header__hamburger_inactive')) {
        header__right.classList.remove('header__hamburger_inactive')
        header__menu.classList.remove('header__hamburger_inactive')

        header__right.classList.add('header__hamburger_active')
        header__menu.classList.add('header__hamburger_active')
    }else {
        header__right.classList.remove('header__hamburger_active')
        header__menu.classList.remove('header__hamburger_active')

        header__right.classList.add('header__hamburger_inactive')
        header__menu.classList.add('header__hamburger_inactive')
    }
}

/**
 * событие при уменьщения размера окна и как должно выглядеть кнопка гамбургера 
 */

function handleWindowChange(param) {
    header__right.classList.remove('header__hamburger_active')
    header__menu.classList.remove('header__hamburger_active')
}

var windowSize = window.matchMedia('(min-width: 980px)')
handleWindowChange(windowSize)
windowSize.addListener(handleWindowChange)