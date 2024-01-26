/*Задание 1*/
let a = 10;
alert(a);
a = 20;
alert(a);

/*Задание 2*/
let firstIphone = 2007;
alert(`Год первого выпуска iPhone - ${firstIphone}`);

/*Задание 3*/
let JSCreator = "Брендан Эйх";
alert(`Создатель языка программирования JavaScript - ${JSCreator}`)

/*Задание 4*/
let b = 10;
let c = 2;
let sum = b + c;
let sub = b - c;
let mult = b * c;
let div = b / c;
alert (`Сумма: ${sum}\nРазность: ${sub}\nПроизведение: ${mult}\nЧастное: ${div}`);

/*Задание 5*/
let d = 2;
let result = d ** 5;
alert(`Возводим 2 в степень 5: ${result}`);

/*Задание 6*/
let e = 9;
let f = 2;
alert(`Находим остаток от деления: ${e % f}`)

/*Задание 7*/
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/*Задание 8*/
let age = Number (prompt ("Сколько вам лет?"));
alert (age);

/*Задание 9*/
let user = {name:"Игорь",
age: 29,
isAdmin: true};
user["city of residence"] = "Екатеринбург";
user.age = 30;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert (user[info]);

/*Задание 10*/
let names = prompt("Привет, как тебя зовут?");
let answer = `Привет ${names}!`;
alert (answer);