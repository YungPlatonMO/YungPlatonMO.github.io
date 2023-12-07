"use strict";
/**
* проверяет наличие свойства в объекте
*
* @param {object} объект
* @return {boolean} true - нет свойств и false – если хоть одно свойство есть.
*/
function isEmpty(obj) {
   return obj.hasOwnProperty()

}
let book1 = new Object();
book1 = {
   title: "Невеста Ноября",
   pubYear: 2022,
   price: 550,
   show: function () {
      console.log(this.title);
      console.log(this.price);
   }
};
console.log(isEmpty(book1));

let book2 = new Object();
book2.title = "Мара и Морок";
book2.pubYear = 2021;
book2.price = 680;

for (let i in book2) {
   console.log(book2[i]);
};

console.log(isEmpty(book2));
book1.show();
function showBook() {
   console.log(this.title);
   console.log(this.price);
};
book2.show = showBook;
book2.show();