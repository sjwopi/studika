const screenWidth = window.screen.width;


let backPopUp = document.querySelector('.back-popup');

let header = document.querySelector('.header');
let hamburger = header.querySelector('.header__mobile-hamb');
let searchContainer = header.querySelector('.header__search');
let searchPopUpBtn = header.querySelector('.header__search-btn');
let searchPopUpClose = header.querySelector('.header__search-close');

let menu = document.querySelector('.menu');
let menuList = menu.querySelector('.menu__list');
let arrowRight = menu.querySelector('.right-arrow');
let arrowLeft = menu.querySelector('.left-arrow');
let backGradientRight = menu.querySelector('.menu__back-gradient_right');
let backGradientLeft = menu.querySelector('.menu__back-gradient_left');

function checkWidth() {
    if (screenWidth <= 1400) {
        arrowRight.classList.add('active');
        backGradientRight.classList.add('active');
    }
    if (screenWidth <= 620) {
        function animationNone() {
            searchContainer.style.animation = "none";
        }
        searchContainer.addEventListener('click', animationNone);
    }
}
function skrollMenu() {
    arrowRight.classList.toggle('active');
    backGradientRight.classList.toggle('active');
    arrowLeft.classList.toggle('active');
    backGradientLeft.classList.toggle('active');
    menuList.classList.toggle('menu__list_skroll-end');
    menuList.classList.toggle('menu__list_skroll-start')
}
function searchPopUp() {
    searchContainer.classList.toggle('active');
    searchPopUpClose.classList.toggle('active');
    backPopUp.classList.toggle('active');
}
checkWidth();
searchPopUpBtn.addEventListener('click', searchPopUp);
searchPopUpClose.addEventListener('click', searchPopUp);

arrowRight.addEventListener('click', skrollMenu);
arrowLeft.addEventListener('click', skrollMenu);