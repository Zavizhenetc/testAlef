
import {SCROLL_UP_BTN} from '../constans/constans.js';

export {scrollUp, pageUp }


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





