//Задание 1
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(8, 4));

//Задание 2
function calc(n) {
    if (n % 2 === 0) {
      console.log(`Число четное`);
    } else {
      console.log(`Число нечетное`);
    }
  }
    calc (6)

//Задание 3
//3.1
function num(a) {
  return a**2
}
console.log(num(6));

//3.2
function num(a) {
  return a**2;
}
let result = num (5);
alert (result)

//Задание 4
"use strict";
let age = prompt("Сколько Вам лет?");

let printMessage;

if (age < 0) {
    printMessage = function () {
        console.log("Вы ввели неправильное значение");
    }
} else if (age < 12) {
    printMessage = function () {
        console.log("Привет, друг!");
    }
} else {
    printMessage = function () {
        console.log("Добро пожаловать!");
    }
}

printMessage();

//Задание 5
function check(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Одно или оба значения не являются числом';
  } else {
    return num1 * num2;
  }
}
console.log(check (2, 6)); 

//Задание 6
let num = prompt("Введите ваше число");
function calc(num) {
  if(isNaN(num)){
    console.log("Переданный параметр не является числом");
  }else{
    return  num ** 3;
  }
}

console.log(calc(num));