// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectungle = (a, b) => a * b;
//
// console.log(rectungle(10, 25));



// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let circle = (r) => r ** 2 * 3.14;
//
// console.log(circle(20));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let circle = (r, h,) => (r + h) * r * 3.14;
//
//     console.log(circle(9,20));



// - створити функцію яка приймає масив та виводить кожен його елемент
// let qwerty = (arr) => {
//     for (const item of arr) {
//         console.log(item);
//
//     }
// }
// qwerty([10,20,30,40,'qwerty',true]);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let creatP = (title) => {
//     document.write(`<p>${title}</p>`)
// }
// creatP('mbncn jeje ghfj djhfgjgf jejeh')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let element = (arg) => {
//     document.write(`<ul>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
// }
// element('text');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let element = (argument, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//
//         document.write(`<li>${argument}</li>`)
//     }
//     document.write(`</ul>`)
// }
// element('text', 15)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let  qwerty = (arr) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// qwerty(['user',true,25,40,false,"user2"]);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить
// їх в документ. Для кожного об'єкту окремий блок.
// let users = [
// {id:1,name:'user1',age:22},
// {id:2,name:'user2',age:33},
// {id:3,name:'user3',age:44}
// ]
// let arrayUsers = (users) => {
//     for (let i = 0; i < users.length; i++) {
//         let user = users[i];
//
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// arrayUsers(users);



// - створити функцію яка повертає найменьше число з масиву
// let minNamber = (arr) => {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (result > arr[i]) result = arr[i];
//     }
//     return result;
// }
// console.log(minNamber([3,4,5,6,7,8,9,10]));



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів
// масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arr = [2,4,6];
// let sum = (arr) => {
//     let element = 0;
//     for (const arrayElement of arr) {
//         element = element + arrayElement;
//     }
//     return element;
// }
// console.log(sum(arr));



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr,index1, index2) =>{
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//     arr[index1] = v2;
//     arr[index2] = v1;
//     return arr;
//
// }
// console.log(swap([11,22,33,44,55,66],1,5));



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (uah, currencies, exitCurrency) =>{
//     for (let item of currencies) {
//         if (item.currency === exitCurrency) {
//             return uah / item.value;
//         }
//     }
//
// }
// console.log(exchange(
//     10000,
//     [
//         {currency:'USD', value: 40},
//         {currency:'EUR', value: 42},
//         {currency:'GBP', value: 43},
//     ],
//     'USD'
// ));

















