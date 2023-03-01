// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email= email;
//     this.phone = phone;
// }
//
// let Users = [
//     new User(1, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(2, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(3, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(4, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(6, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(5, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(7, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(8, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(9, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
//     new User(10, 'vasya', 'kokosov', 'vasyakoks', '09823863226'),
// ];
//
// console.log(Users);



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

// console.log(Users.filter(i => i.id % 2 === 0));



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(Users.sort((a,b) => a.id - b.id));



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function ClientObj(id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//
// };
//
// let Client = [
//     new ClientObj(1, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk']),
//     new ClientObj(2, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk', 'beer']),
//     new ClientObj(3, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk', 'beer', 'coffe']),
//     new ClientObj(4, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk', 'beer', 'coffe']),
//     new ClientObj(5, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk', 'beer', 'coffe']),
//     new ClientObj(6, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk', 'beer']),
//     new ClientObj(7, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk', 'beer', 'coffe']),
//     new ClientObj(8, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk']),
//     new ClientObj(9, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk']),
//     new ClientObj(10, 'vasya', 'kokosov', 'vasyakoks', '09823863226', ['milk', 'beer', 'coffe']),
// ];

// console.log(Client);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)

// console.log(Client.sort((a,b) => a.order.length - b.order.length))



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxspeed, volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volum = volume;
//     this.driveSpeed = function () {
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} км/год`);
//     };
//     this.info = function () {
//         for (const item in this) {
//             // console.log(`${item} - ${this[item]}`);
//             // console.log(this);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//     this.year = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//
//     }
// }
// let CarNew = new Car('bmw','awt',2003,250,'3000');
// CarNew.driveSpeed();
// CarNew.info();
// CarNew.increaseMaxSpeed(35);
// console.log(CarNew)
// CarNew.year(2006)
// CarNew.addDriver('Max')



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, year, maxspeed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volum = volume;
//     }
//
//     drive () {
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} км/год`);
//     };
//
//     info () {
//         for (const item in this) {
//             // console.log(`${item} - ${this[item]}`);
//             // console.log(this);
//         }
//     };
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//
//     yearCar (newYear) {
//         this.year = newYear;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//
//     }
// }
//
// let CarNew = new Car('bmw','awt',2003,250,'3000');
// CarNew.drive();
// CarNew.info();
// CarNew.increaseMaxSpeed(35);
// console.log(CarNew)
// CarNew.yearCar(2006)
// CarNew.addDriver({
//     name: 'Max',
//     age: 33,
// })



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let arrCinderella = [
//     new Cinderella('Tanya',27,36),
//     new Cinderella('Valya',22,37),
//     new Cinderella('Cralya',35,38),
//     new Cinderella('Natalya',24,39),
//     new Cinderella('Alya',25,40),
//     new Cinderella('Gargulya',19,41),
//     new Cinderella('Kamalya',29,42),
//     new Cinderella('Maria',28,43),
//     new Cinderella('Sveta',21,44),
//     new Cinderella('Galya',43,45),
// ];
// function Prince(name,age,findSize) {
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
// let  newPrince = new Prince('Ivan',43,45);
// let find = (arrCinderella,Prince) => {
//     for (const item of arrCinderella) {
//         if(item.footSize === Prince.findSize) {
//             return `${item.name}`;
//         }
//
//     }
// }
// console.log(find(arrCinderella, newPrince));
// let cinduha = arrCinderella.find(value => value.footSize === newPrince.findSize);
// console.log(cinduha);

