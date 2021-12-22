const burgerBtn = document.querySelector('.burgerbtn');
const closeMenuBtn = document.querySelector('.close-menubtn');
const menuSect = document.querySelector('.menusection');

burgerBtn.addEventListener('click', function () {
    menuSect.classList.add('show');
});
closeMenuBtn.addEventListener('click', function () {
    menuSect.classList.remove('show');
});


// interior-design slider 1

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // slidesPerView: 2.5,
    spaceBetween: 30,
    speed: 700,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        769: {
            slidesPerView: 2.5,
        }
    },
});


// accordeon

$(document).ready(function () {
    $('.accordeonsubbox__title').click(function () {
        $(this).toggleClass('rotatearr');
        $(this).next('.accordeonsubbox__body').slideToggle();
    });

    $('.accordeon__header').click(function () {
        $(this).toggleClass('active');
        $(this).next('.accordeon__body').slideToggle();
    });

});


// const accordeonHeader = document.querySelectorAll('.accordeon__header');

// accordeonHeader.forEach(function (item) {
//     item.addEventListener('click', function () {
//         this.classList.toggle('active');
//         this.nextElementSibling.classList.toggle('show')
//     });
// });


// const accordeonSubtitle = document.querySelectorAll('.accordeonsubbox__title');

// accordeonSubtitle.forEach(function (item) {
//     item.addEventListener('click', function () {
//         this.classList.toggle('rotatearr');
//         this.nextElementSibling.classList.toggle('show')
//     });
// });

















