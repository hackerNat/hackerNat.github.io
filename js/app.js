var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.banner-js');
var popupClose = document.querySelector('.popup-close');
var input = popup.querySelector('#input-name');

var mobileMenu = document.querySelector('.mobile-menu');
var mobileClose = document.querySelector('.mobile-header__close');
var mobileHeader = document.querySelector('.mobile-header');

popupBtn.addEventListener('click',function() {
    popup.classList.add('popup-open');
    input.focus();
})

popupClose.addEventListener('click',function() {
    popup.classList.remove('popup-open');
    popupBtn.focus();
})

window.addEventListener('keydown',function(event) {
    if (event.code === "Escape") {
        popup.classList.remove('popup-open');
        popupBtn.focus();
    }
})


mobileMenu.addEventListener('click',function() {
    mobileHeader.classList.add('header-open');
})

mobileClose.addEventListener('click',function() {
    mobileHeader.classList.remove('header-open');
})