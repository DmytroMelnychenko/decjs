// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectungle(a, b) {
// return a * b;
// }
//
// console.log(rectungle(10, 25));



// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r) {
//    let result = r ** 2;
//    return 3.14 * result;
// }
//
// console.log(circle(10));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function circle(r, h) {
//     return 2 * 3.14 * r * h;
// }
//
// console.log(circle(10,20));



// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [10,20,30,40,'qwerty',true]
// function qwerty(arr) {
//     for (let i = 0; i < arr.length; i++) {
//
//      };
// };
//
// console.log(array);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function creatP(title) {
//     document.write(`<p>${title}</p>`)
// }
// creatP('mbncn jeje ghfj djhfgjgf jfjghg j huy jejeh')
// creatP(' j huy jejeh')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function element(arg) {
//     document.write(`<ul>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
// }
// element('text');
// element('ereer');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function element(argument, number) {
//     // document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${argument}</li>`)
//         document.write(`<li>${argument}</li>`)
//         document.write(`<li>${argument}</li>`)
//     }
//     document.write(`</ul>`)
// }
// element('text', 1)

// function element(argument, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${argument}</li>`)
//     }
//     document.write(`</ul>`)
// }
// element('text', 6)



// - створити функцію яка приймає масив примітивних елементів  (числа,стрінги,булеві), та будуєдля них список
// let array = ['user',true,25,40,false,"user2"]
// function qwerty(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// qwerty(array);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [{id:1,name:'user1',age:22},{id:2,name:'user2',age:33},{id:3,name:'user3',age:44}]
// function arrayUsers(users) {
//     for (let i = 0; i < users.length; i++) {
//         let user = users[i];
//
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// arrayUsers(users);



// - створити функцію яка повертає найменьше число з масиву
// let array = [3,4,5,6,7,8,9,10]
// function minNamber(array) {
//     let minNamber = array[0];
//     for (const namElement of array) {
//         if (namElement < minNamber) {
//             minNamber = namElement;
//         }
//
//     }
//     return minNamber;
// }
//
// console.log(minNamber(array));



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// let arr = [2,4,6];
// function sum (arr) {
//     let element = 0;
//     for (const arrayElement of arr) {
//         element = element + arrayElement;
//     }
//     return element;
// }
// console.log(sum(arr));



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]






// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
