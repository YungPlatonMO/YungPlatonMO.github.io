"use strict";
    let obj = {
	className: 'open menu'
    }
/**
* добавляет в список класс cls,но только если его там еще нет
*
* @param {str} cls, класс.
* @return {list} obj.className, список классов.
*/
 obj.addClass = function addClass(cls) {
    let subObj = {};
    let arr = this.className.split(" ");
    if (!arr.includes(cls)) {
        arr.push(cls)
    }
    this.className = arr.join(" ");
    return this;
    }

    obj.addClass("desk");// добавит в className desk
    console.log(obj.className);
    obj.addClass("open"); // оставит таким же
    console.log(obj.className);

    /**
* удаляет из списка класс cls,но только если его там еще нет
*
* @param {str} cls, класс.
* @return {list} obj.className, список классов.
*/
    obj.removeClass = function removeClass(cls) {
        let arr = this.className.split(" ");
        for(let i = 0; i < arr.length; i++){
                if(arr[i] == cls){
                    arr.splice(i, 1);
                    i-- ;
                }
            }
            obj.className = arr.join(' ');
            return this;
       
 }
    obj.removeClass('menu'); // удалит menu
    console.log(obj.className);
