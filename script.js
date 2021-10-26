$("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html,body").animate({
        scrollTop: blockOffset
    })
})
$(".header__burger").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".header__nav").toggleClass("active");
})