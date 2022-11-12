export default class Difference {
  constructor(oldOfficer, newOfficer, items) {
        try {
          this.oldOfficer = document.querySelector(oldOfficer);
          this.newOfficer = document.querySelector(newOfficer);
          this.oldItems = this.oldOfficer.querySelectorAll(items);
          this.newItems = this.newOfficer.querySelectorAll(items);
          this.oldPLusBtn = this.oldOfficer.querySelector('.plus');
          this.newPLusBtn = this.newOfficer.querySelector('.plus');
          this.oldCounter = 0;
          this.newCounter = 0;
        } catch(e){}
  }

bindTriggers(btn, items, counter) { 
  btn.addEventListener('click', () => {
    items[counter].style.display = 'flex';
      counter++;
  items.forEach(item => {
   if (counter == items.length  && counter !== item[0]) {
    items[counter-2].style.display = 'none';
    items[counter-3].style.display = 'none';
    items[counter-4].style.display = 'none';
    counter = 0;
     }  
   });
 });
}

   hideItems(items) {
     items.forEach((item, i, arr) => {
        if (i !== arr.length-1) {
          item.style.display = 'none';
     }
     });
   }

   init() {
    try {
      this.hideItems(this.oldItems);
    this.hideItems(this.newItems);

    this.bindTriggers(this.oldPLusBtn, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newPLusBtn, this.newItems, this.newCounter);
  } catch(e) {}
   } 
}