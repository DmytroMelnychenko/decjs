// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let array = [
//     110,
//     13,
//     -23,
//     'qwert',
//     'qwe',
//     'shdjs',
//     '1',
//     '11',
//     '33',
//     true,
// ];
//
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title : 'TITANIC',
//     pageCount : 300,
//     genre: 'fantantastic',
// };
// console.log(book1);
//
// let book2 = {
//     title : 'BRITANIC',
//     pageCount : 200,
//     genre: 'fantantastic',
// };
// console.log(book2);
//
// let book3 = {
//     title : 'BOTANIC',
//     pageCount : 400,
//     genre: 'dokumental',
// };
// console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1 = {
//     title : 'TITANIC',
//     pageCount : 300,
//     genre : 'fantantastic',
//     autors : [
//         {name: 'Maria', age: 34},
//         {name: 'Max', age: 64},
//     ],
// };
// console.log(book1);
//
// let book2 = {
//     title : 'BRITANIC',
//     pageCount : 200,
//     genre : 'fantantastic',
//     autors : [
//         {name: 'Marusya', age: 24},
//         {name: 'Mikola', age: 34},
//     ],
// };
// console.log(book2);
//
// let book3 = {
//     title : 'BOTANIC',
//     pageCount : 400,
//     genre : 'fantantastic',
//     autors : [
//         {name: 'Masha', age: 44},
//         {name: 'Max', age: 54},
//     ],
// };
// console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name,
// username,password. Вивести в консоль пароль кожного користувача

// let users = [
//     {name: 'vasya', username : '1qwqe', password: '123'},
//     {name: 'asya', username : '2qwqe', password: '1234'},
//     {name: 'sasya', username : '3qwqe', password: '12345'},
//     {name: 'busya', username : '4qwqe', password: '12346'},
//     {name: 'kvasya', username : '5qwqe', password: '12347'},
//     {name: 'slavasya', username : '6qwqe', password: '12348'},
//     {name: 'grusya', username : '7qwqe', password: '12349'},
//     {name: 'jusya', username : '8qwqe', password: '12340'},
//     {name: 'gusya', username : '9qwqe', password: '12342'},
//     {name: 'dusya', username : '10qwqe', password: '12341'},
//
// ];
//
// console.log(users [0].password);
// console.log(users [1].password);
// console.log(users [2].password);
// console.log(users [3].password);
// console.log(users [4].password);
// console.log(users [5].password);
// console.log(users [6].password);
// console.log(users [7].password);
// console.log(users [8].password);
// console.log(users [9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 10
// if (x !== 0) {
//     console.log(true)
// }
// else {console.log(false)};
//
// let msg = +prompt('Впишите число 1, 0, -3');
// if (msg === 0) {
//     console.log(true)
// } else {
//     console.log(false)
// };



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 36
//
// if (time >= 0 && time <= 15) {
// //     console.log('1 quoter');
// }
// else if (time >= 16 && time <= 30 ) {
//     console.log('2 quoter');
// }
// else if (time >= 31 && time <= 45 ) {
//     console. log('3 qouter');
// }
// else if (time >= 46 && time <= 59 ) {
//     console. log('4 qouter');
// }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
// половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 12
//
// if (day >= 1 && day <= 10) {
//     console.log('1 decada');
// }
// if (day >=11 && day <= 20) {
//     console.log('2 decada');
// }
// if (day >= 21 && day <= 31) {
//     console.log('3 decada');
// };


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий
// номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let week = +prompt ('enter number of day');
// switch (week) {
//     case 1:
//        alert ('monday');
//         break;
//     case 2:
//         alert ('tuesday');
//         break;
//     case 3:
//         alert ('wednesday');
//         break;
//     case 4:
//         alert ('thursday');
//         break;
//     case 5:
//         alert ('friday');
//         break;
//     case 6:
//         alert ('saturday');
//         break;
//     case 7:
//         alert ('sunday');
//         break;
//     default:
// };



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('Введіть перше число');
// let b = +prompt('Введіть друге число');
// if (a > b) {
//     alert('Перше число більше')
// } else if (b > a) {
//     alert('Друге число більше')
// }
// else if (a === b) {
//     alert('Числа однакові')
// };





//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число,
//     undefined, null  і тд включно). Напишіть код який, за допомоги
//     оператора || буде присвоювати змінній х значення
//     "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)




//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив
//     coursesAndDurationArray. За допомоги іф перевірити кожен його
//     елемент на тривалість навчання. У випадку якщо тривалість довша за
//     5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];








