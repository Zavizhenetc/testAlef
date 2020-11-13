
import {SCROLL_UP_BTN, CATS_DATA} from '../constans/constans.js';

export {scrollUp, pageUp, sortArr }


 function scrollUp() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    SCROLL_UP_BTN.style = 'display: block';
  }
  if (scrolled < coords) {
    SCROLL_UP_BTN.style = 'display: none';
  }
}
function pageUp() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -23);
    setTimeout(pageUp, 5);
  }
}

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




