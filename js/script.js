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

var auth_button = document.querySelector(".header__authentication-button");
var modal_close = document.querySelector(".modal__close-button");
var modal_page = document.querySelector(".modal");

auth_button.addEventListener("click", function(){
    modal_page.style.display = "flex";

    var form__link = document.querySelectorAll(".login-signup__item");
    var login__form = document.querySelector('.login__form');
    var signup__form = document.querySelector('.signup__form');

    form__link.forEach(function(current){
        current.addEventListener('click', function(){
            form__link.forEach(function(element) {
                element.classList.remove('login-signup__item_active')
            })
            current.classList.add('login-signup__item_active')
            if(current.textContent == "Войти") {
                login__form.classList.remove('form__deactivated')
                signup__form.classList.add('form__deactivated')
            }else if(current.textContent == "Регистрация") {
                login__form.classList.add('form__deactivated')
                signup__form.classList.remove('form__deactivated')
            }
        })
    })
})

modal_close.addEventListener("click", function() {
    modal_page.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_page) {
        modal_page.style.display = "none";
    }
}

// Popups button alert

var enroll_button = document.querySelector('.lesson__enroll-button');
var application_close_button = document.querySelector(".application-modal__close-button");
var application_page = document.querySelector(".application__model");

enroll_button.addEventListener("click", function(){
    application_page.style.display = "flex";
})

application_close_button.addEventListener("click", function(){
    application_page.style.display = "none";
})