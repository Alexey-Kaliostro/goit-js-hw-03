//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-1");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

// Task START

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = "happy";
user["hobby"] = "skydiving"
user.premium = false;

let objectKeys = "";
let objectKeysValue = "";
let list= "";

keys = Object.keys(user);

for (const keys in user) {
    
    objectKeysValue = user[keys];
    list = `${keys}: ${objectKeysValue}`;
   console.log(list);
}  

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");