/*Задание 1*/
let password = `пароль`;
let answer = prompt(`Введите пароль`);

if (answer == `пароль`) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
}

/*Задание 2*/

let c = 0;
if (c > 0 && c < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

let a = 10;
if (a > 0 && a < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

let b = -3;
if (b > 0 && b < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

let d = 2;
if (d > 0 && d < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

/*Задание 3*/

let e = 89
let f = 99

if (e > 100 || f > 100) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

/*Задание 4*/

let i = '2';
let g = '3';
let j = Number(i);
let h = Number(g);
alert(j + h);

/*Задание 5*/
let month = prompt(`Введите номер месяца`)
switch (month) {
    case `1`:
        console.log(`Зима`);
        break;
        case `2`:
        console.log(`Зима`);
        break;
    case `3`:
        console.log(`Весна`);
        break;
    case `4`:
        console.log(`Весна`);
        break;
    case `5`:
        console.log(`Весна`);
        break;
    case `6`:
        console.log(`Лето`);
        break;
    case `7`:
        console.log(`Лето`);
        break;
    case `8`:
        console.log(`Лето`);
        break;
    case `9`:
        console.log(`Осень`);
        break;
    case `10`:
        console.log(`Осень`);
        break;
    case `11`:
        console.log(`Осень`);
        break;
    case `12`:
        console.log(`Зима`);
        break;
    default:
        console.log(`В году всего 12 месяцев`);
        break;
}