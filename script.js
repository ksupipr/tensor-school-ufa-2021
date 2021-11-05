const links = document.querySelectorAll(".nav__link");
const header_link = document.querySelector(".header__logo a");
for (const link of links) {
    link.addEventListener("click", clickHandler);
}
header_link.addEventListener("click", clickHandler);
function clickHandler(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}
let burger = document.querySelector(".header__burger");
let headNav = document.querySelector(".header__nav");
burger.addEventListener("click", function (event) {
    burger.classList.toggle("active");
    headNav.classList.toggle("active");
})

// Modal window
let modal = document.querySelector("#simpleModal");
let modal2 = document.querySelector("#lessonModal");
let modalBtn = document.querySelector(".card__button");
let modalBtn2 = document.querySelector(".reviews__button");
let modalCloseBtn = document.querySelectorAll(".modal__closebtn");
let modalCourseButton = document.querySelectorAll(".course__button");
modalCourseButton.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.toggle("no-scroll");
        modal2.style.display = "block";
    });
});
modalBtn.addEventListener("click", openModal);
modalBtn2.addEventListener("click", openModal);
modalCloseBtn.forEach(item => {

    item.addEventListener("click", closeModal);
});
window.addEventListener("click", (event) => {
    switch (event.target) {
        case modal:
            modal.style.display = "none";
            document.body.classList.toggle("no-scroll");
            break;
        case modal2:
            modal2.style.display = "none";
            document.body.classList.toggle("no-scroll");
            break;
    }
});
function openModal(event) {
    event.preventDefault();
    document.body.classList.toggle("no-scroll");
    modal.style.display = 'block';
}
function closeModal(event) {
    event.preventDefault();
    document.body.classList.toggle("no-scroll");
    modal.style.display = 'none';
    modal2.style.display = 'none';

}

// Accordion 
const accordionHeaders = document.querySelectorAll(".accordion__header");
accordionHeaders.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const accordionBody = item.nextElementSibling;
        if (item.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
});

