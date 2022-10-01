const screenWidth = window.screen.width;


const backPopUp = document.querySelector('.back-popup');

const header = document.querySelector('.header');
const hamburger = header.querySelector('.header__mobile-hamb');
const searchContainer = header.querySelector('.header__search');
const searchPopUpBtn = header.querySelector('.header__search-btn');
const searchPopUpClose = header.querySelector('.header__search-close');
const geoBtn = header.querySelector('.header__geo');

const menu = document.querySelector('.menu');
const menuList = menu.querySelector('.menu__list');
const arrowRight = menu.querySelector('.right-arrow');
const arrowLeft = menu.querySelector('.left-arrow');
const backGradientRight = menu.querySelector('.menu__back-gradient_right');
const backGradientLeft = menu.querySelector('.menu__back-gradient_left');

const lead = document.querySelector('.lead');
const leadLikeBtn = lead.querySelector('.lead__like-btn');

const popUpGeo = document.querySelector('.popup-geo');
const popUpGeoSelectBtn = popUpGeo.querySelector('.popup-geo__select-button');
const popUpGeoCloseBtn = popUpGeo.querySelector('.popup-geo__close-button');
const geoBackPopUp = document.querySelector('.popup-geo__back');

const popupHamb = document.querySelector('.mobile-hamb');
const popupHambCloseBtn = popupHamb.querySelector('.mobile-hamb__close-btn');

function checkWidth() {
  if (screenWidth <= 1400) {
    arrowRight.classList.add('active');
    backGradientRight.classList.add('active');
  }
  if (screenWidth <= 620) {
    
  }
  if (screenWidth <= 550) {
    leadLikeBtn.textContent = '';
    lead.querySelector('.lead__container').append(leadLikeBtn);
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
  geoBackPopUp.classList.toggle('active');
  backPopUp.classList.toggle('active');
}
checkWidth(); popUpGeoSelectBtn
geoBtn.addEventListener('click', geoPopUp);
popUpGeoSelectBtn.addEventListener('click', geoPopUp);
popUpGeoCloseBtn.addEventListener('click', geoPopUp);

searchPopUpBtn.addEventListener('click', searchPopUp);
searchContainer.addEventListener('click', animationNone);
searchPopUpClose.addEventListener('click', function two() { searchPopUp(); animationNone(); });

hamburger.addEventListener('click', function() {
  popupHamb.classList.toggle('active');
  popupHambCloseBtn.classList.toggle('active');
});
popupHambCloseBtn.addEventListener('click', function() {
  popupHamb.classList.toggle('active');
  popupHambCloseBtn.classList.toggle('active');
})

popupHamb.addEventListener('click', function(evt) {
  const arrBtn = evt.target.parentNode.querySelectorAll('.mobile-hamb__button_child');
  if (evt.target.classList.contains('mobile-hamb__button')) {
    for (let i = 0; i < arrBtn.length; i++) {
      arrBtn[i].classList.toggle('active')
    }
  } else if (evt.target.classList.contains('mobile-hamb__close-btn')) {
    for (let i = 0; i < arrBtn.length; i++) {
      arrBtn[i].classList.remove('active')
    }
  }
})

arrowRight.addEventListener('click', skrollMenu);
arrowLeft.addEventListener('click', skrollMenu);