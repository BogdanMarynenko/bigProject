export default class Accordion {
  constructor(btns) {
    this.btns = document.querySelectorAll(btns);
  }

  bindTriggers(btns) {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
       const sibling =  btn.closest('.module__info-show').nextElementSibling;
             sibling.classList.toggle('msg');
             sibling.style.marginTop = '20px';
         }); 
      });
  }

  init() {
    this.bindTriggers(this.btns);
  }
}
