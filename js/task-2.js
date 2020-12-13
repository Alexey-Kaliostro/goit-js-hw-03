//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-2");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*
Напиши функцию countProps(obj), 
считающую кол-во свойств в объекте. 
Функция возвращает число - количество свойств.
*/

//Task START

const countProps = function(obj) {
  // твой код
    return Object.keys(obj).length;  
   
}; 

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


