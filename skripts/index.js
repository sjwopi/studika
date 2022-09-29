const screenWidth = window.screen.width;


let backPopUp = document.querySelector('.back-popup');

let header = document.querySelector('.header');
let hamburger = header.querySelector('.header__mobile-hamb');
let searchContainer = header.querySelector('.header__search');
let searchPopUpBtn = header.querySelector('.header__search-btn');
let searchPopUpClose = header.querySelector('.header__search-close');
let geoBtn = header.querySelector('.header__geo');

let menu = document.querySelector('.menu');
let menuList = menu.querySelector('.menu__list');
let arrowRight = menu.querySelector('.right-arrow');
let arrowLeft = menu.querySelector('.left-arrow');
let backGradientRight = menu.querySelector('.menu__back-gradient_right');
let backGradientLeft = menu.querySelector('.menu__back-gradient_left');

let popUpGeo = document.querySelector('.popup-geo');
let popUpGeoSelectBtn = popUpGeo.querySelector('.popup-geo__select-button');
let popUpGeoCloseBtn = popUpGeo.querySelector('.popup-geo__close-button');

function checkWidth() {
  if (screenWidth <= 1400) {
    arrowRight.classList.add('active');
    backGradientRight.classList.add('active');
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
function animationNone() {
  searchContainer.classList.toggle('header__search_animation_none');
}
function geoPopUp() {
  popUpGeo.classList.toggle('active');
  popUpGeoCloseBtn.classList.toggle('active');
  backPopUp.classList.toggle('active');
}
checkWidth(); popUpGeoSelectBtn
geoBtn.addEventListener('click', geoPopUp);
popUpGeoSelectBtn.addEventListener('click', geoPopUp);
popUpGeoCloseBtn.addEventListener('click', geoPopUp);

searchPopUpBtn.addEventListener('click', searchPopUp);
searchContainer.addEventListener('click', animationNone);
searchPopUpClose.addEventListener('click', function two() { searchPopUp(); animationNone(); });

arrowRight.addEventListener('click', skrollMenu);
arrowLeft.addEventListener('click', skrollMenu);