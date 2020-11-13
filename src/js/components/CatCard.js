export default class CatCard {
  constructor(data, template) {
    this.template = template;
    this.discount = data.discount;
    this.title = data.title;
    this.color = data.color;
    this.age = data.age;
    this.price = data.price;
    this.pawCount = data.pawCount;
    this.count = data.count;
    this.img = data.img
    this.count = data.count;
  }



 

  createCard() {
    this.container = this.template.cloneNode(true);
    this.btn = this.template.querySelector('#button-card');
    
    if(this.discount <1){ this.container.querySelector('.card-item__discount').style.display='none'
          }else {
            this.container.querySelector('.card-item__discount').textContent = this.discount
          };
    this.container.querySelector('.card-item__img').style.backgroundImage = `url(${this.img})`;
    this.container.querySelector('.card-item__title').textContent = this.title;
    this.container.querySelector('.card-item__about-color-text').textContent = this.color;
    this.container.querySelector('.card-item__about-age-text').textContent = `${this.age} мес.`;
    this.container.querySelector('.card-item__about-count-text').textContent = this.pawCount;
    this.container.querySelector('.card-item__price').textContent = `${this.price} руб.`;

    if(this.count == 0){
      this.btn.textContent='Продан';
        this.btn.classList.add('button_disabled');
    }else{
      this.btn.classList.remove('button_disabled');
      this.btn.textContent='купить';
    }
    this.setEventListeners()
    return this.container;
  }

  like(evt) {
    evt.target.classList.toggle('button_like-active');
   (evt.target.closest('div')).querySelector('#favorite').classList.toggle('card-item__favorit');
}


  setEventListeners (){
    this.container.querySelector('.button_like').addEventListener('click', this.like);
  }
  
}


