function csl(elem){
  console.log(elem);
}
import "./index.css";
import CatCard from './js/components/CatCard.js';
import CatCardList from './js/components/CatCardList.js';
import Validation from './js/components/Validation.js';
// ипортируем переменные
import {SCROLL_UP_BTN, CATS_DATA, CATS_LIST, TEMPLATE, SHOW_MORE_BUTTON, FORM, SUBSCRIBE_BUTTON} from './js/constans/constans'

// импортируем вспомогательные ф-ции
import {scrollUp, pageUp} from './js/utils/utils.js';

const  catCardsList = new CatCardList(CATS_LIST)
const validationForm = new Validation(FORM, SUBSCRIBE_BUTTON);

  renderCats(CATS_DATA);

// ==============сортируем
const selectPrice = document.querySelector('#selectPrice');
const selectAge = document.querySelector('#selectAge');

selectPrice.addEventListener('change', () => {
  var arr = sortArr(selectPrice.value);
  catCardsList.remove();
  renderCats(arr);
});
selectAge.addEventListener('change', () => {
  var arr = sortArr(selectAge.value);
  catCardsList.remove();
  renderCats(arr);
});




function sortArr(elem) {
  if (elem == 'priceUp'){
     CATS_DATA.sort( function (a, b) {
            return  b.price - a.price
    });
  } if (elem == 'priceDown'){
    CATS_DATA.sort( function (a, b) {
      return  a.price - b.price
});
  }if(elem == 'ageUp'){
    CATS_DATA.sort( function (a, b) {
      return  b.age - a.age
});
  }if(elem == 'ageDown'){
    CATS_DATA.sort( function (a, b) {
      return  a.age - b.age
});
  }
  return CATS_DATA;
}

// рендерим котиков
function renderCats(arr){
    const cats = arr.map((data) => {
      return new CatCard(data, TEMPLATE).createCard();
    });
    const catsCardsSlice = cats.slice(0, 6);
    catCardsList.render(catsCardsSlice);}

  // считаем котиков на странице 
    function count() {
      let count = window.count;
      if (isNaN(count) || count === 0) {
        return 9;
      }
      return count + 3;
    }

  // добавляем еще котиков
    function showMore(count, arr) {
      const cats = arr.map((data) => {
        return new CatCard(data, TEMPLATE).createCard();
      });
      const catsCardsSlice = cats.slice(0, count);
      catCardsList.remove();
      catCardsList.render(catsCardsSlice);
      window.count = catsCardsSlice.length;
    }

// валидируем инпут
validationForm.setEventListenersValidation();
SUBSCRIBE_BUTTON.addEventListener('click', () => {
  validationForm.resetError();
  validationForm.setSubmitButtonState(false);
});


// слушаем скрол
window.addEventListener('scroll', scrollUp);
// слушаем кнопку вверх 
SCROLL_UP_BTN.addEventListener('click', pageUp);

// слушаем кнопку добавить еще котиков
SHOW_MORE_BUTTON.addEventListener('click', (evt) => {
  evt.preventDefault();
  showMore(count(), CATS_DATA);
})


