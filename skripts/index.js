const swiperMenu = new Swiper('.swiper-menu', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  slidesPerView: 'auto',
  slidesPerGroup: 10,
  autoWidth: true
});

const headerGeoBtn = document.querySelector('.header__geo');
const popupGeo = document.querySelector('.popup-geo');
const popupGeoBack = document.querySelector('.popup-geo__back')
const popupHamb = document.querySelector('.popup-hamb');
const popupGeoHamb = popupHamb.querySelector('.popup-geo_hamb')
const popupHambBack = document.querySelector('.popup-hamb__back')
const geoList = document.querySelector('.popup-geo__list');
const geoListItem = geoList.querySelector('.popup-geo__list-item');
const loadingGeo = popupGeo.querySelector('.popup-geo__loading')

const citySelectedList = document.querySelector('.select-cities');
const citySelected = citySelectedList.querySelector('.select-cities__container');

const mobileHambBtn = document.querySelector('.header__mobile-hamb')
const hambGeoBtn = document.querySelector('.popup-hamb__geo')

/* Функционал выбора города */
/* Получение списка городов */
const getCities = () => {
  return fetch('https://studika.ru/api/areas', {
    method: 'POST'
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
    .then((areas) => {
      renderGeoItem(areas);
    })
    .then(() => {
      const swiperGeo = new Swiper('.swiper-geo', {
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 10
      });
      loadingGeo.classList.remove('active')
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}
/* Создание нового элемента */
const createItem = (nameArea, nameCity, item, isCity) => {
  this._item = item;
  this._area = this._item.querySelector('.popup-geo__area');
  this._city = this._item.querySelector('.popup-geo__city');
  this._city.textContent = nameCity;
  if (isCity) {
    this._area.textContent = nameArea;
    this._item.addEventListener('click', selectCity)
  } else {
    this._item.classList.add('popup-geo__list-item_only-area')
  }
  return this._item;
}
/* Выбор города */
function selectCity(evt) {
  let item = citySelected.cloneNode(true);
  item.classList.add('active-flex');

  if (evt) {
    item.querySelector('.select-cities__name').textContent = evt.target.parentElement.querySelector('.popup-geo__city').textContent;
  } else { item.querySelector('.select-cities__name').textContent = 'Москва' }

  item.querySelector('.select-cities__delete-btn').addEventListener('click', () => {
    item.classList.remove('active-flex')
  })
  citySelectedList.append(item)
}
/* Рендер новых элементов списка */
const renderGeoItem = (areas) => {
  for (key in areas) {
    if (key == 0) { continue }
    let nameArea = areas[key].name;
    let item = createItem('', nameArea, geoListItem.cloneNode(true), false);
    geoList.append(item)
    for (city in areas[key].cities) {
      let item = createItem(nameArea, areas[key].cities[city].name, geoListItem.cloneNode(true), true);
      geoList.append(item)
    }
  }
}
getCities();

selectCity(false);

function openPopupGeo() {
  popupGeo.classList.add('active-flex');
  popupGeoBack.classList.add('active')
  popupGeoBack.addEventListener('click', closePopupGeo)
}
function closePopupGeo() {
  popupGeo.classList.remove('active-flex')
  popupGeoBack.classList.remove('active')
  popupGeoBack.removeEventListener('click', closePopupGeo)
}
function openPopupHamb() {
  popupHamb.classList.add('popup-hamb_active');
  popupHambBack.classList.add('active');
  popupHambBack.addEventListener('click', closePopupHamb)
}
function closePopupHamb() {
  popupHamb.classList.remove('popup-hamb_active')
  popupHambBack.classList.remove('active')
  popupHambBack.removeEventListener('click', closePopupHamb)
}

headerGeoBtn.addEventListener('click', openPopupGeo)
mobileHambBtn.addEventListener('click', openPopupHamb)

window.onload = () => {
  let input = document.querySelector('.popup-geo__search');
  input.oninput = () => {
    let value = input.value;
    let list = document.querySelectorAll('.popup-geo__city');

    if (value != '') {
      for (let i = 0; i < list.length; i++) {
        if (list[i].textContent.search(value) == -1) {
          list[i].parentElement.classList.add('disable')
        } else {
          list[i].parentElement.classList.remove('disable')
          console.log(list[i].parentElement)
        }
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        list[i].parentElement.classList.remove('disable')

      }
    }
  }
}