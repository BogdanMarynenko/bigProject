import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    this.slides.forEach(slide => {
         slide.classList.remove(this.activeClass);
         if (this.animate) {
          slide.querySelector('.card__title').style.opacity = '0.4';
          slide.querySelector('.card__controls-arrow').style.opacity = '0';
        }
    });

    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
  }
    
    this.slides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    for (let i = 1; i < this.slides.length; i++) {
      if (this.slides[i].tagName !== "BUTTON") {
          this.container.appendChild(this.slides[0]);
          this.decorizeSlides();
          break;
      }else {
        this.container.appendChild(this.slides[i]);
       i--;
        }
     }
   }

  bindTrigger() {
  this.next.addEventListener('click', () => this.nextSlide());
 
  this.prev.addEventListener('click', () => {
    for (let i = this.slides.length - 1; i > 0; i--) {
      if (this.slides[i].tagName !== "BUTTON") {
          let active = this.slides[i];
          this.container.insertBefore(active, this.slides[0]);
          this.decorizeSlides();
          break;
      }
    }
   });
  }

stopSlider() {
  let setTime =  setInterval(() => this.nextSlide(), 2000);
  this.slides[0].parentNode.addEventListener('mouseenter', () => clearInterval(setTime));
  this.next.addEventListener('mouseenter', () => clearInterval(setTime));
  this.prev.addEventListener('mouseenter', () => clearInterval(setTime));
}

init() {
  this.container.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: flex-start;
  `;

  this.bindTrigger();
  this.decorizeSlides();
  
 
  if (this.autoplay) {
    this.stopSlider();
    this.slides[0].parentNode.addEventListener('mouseleave', () => this.stopSlider());
    this.next.addEventListener('mouseleave', () =>  this.stopSlider());
    this.prev.addEventListener('mouseleave', () => this.stopSlider());
 
  }
}
}