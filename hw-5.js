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
  console.log(a**2);
}
num(6)

//3.2
function num(a) {
  return a**2;
}
let result = num (5);
alert (result)

//Задание 4
"use strict";
function control(){
  let age = prompt("Сколько Вам лет?");
  if (age <= 0) {
        console.log("Вы ввели неправильное значение");
} else if (age < 12) { 
        console.log("Привет, друг!");    
} else if (age > 12) { 
        console.log("Добро пожаловать!");
}else if (isNaN(age)){
      console.log("Вы ввели неверное значение");
}else if (age === null || age === ""){
  console.log("Вы не ответили на вопрос!");
}
}
control()

//Задание 5
function check(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return num1 * num2;
  }
}
console.log(check ('7w', 6)); 

//Задание 6
let num = prompt("Введите ваше число");
function calc(num) {
  if(isNaN(num)){
    console.log("Переданный параметр не является числом");
  }else if (num === null || num === ""){
    console.log("Вы не ответили на вопрос!");
  }else{
    return  num ** 3;
  }
}

console.log(calc(num));

// Задание 7
function getArea() {
    return 3.14 * this.radius * this.radius;
   }
  
function getPerimeter() {
     return 2 * 3.14 * this.radius;
   }
  
const circle1 = {
     radius: 5,  
    getArea: getArea,   
    getPerimeter: getPerimeter,
   };
  
const circle2 = {
     radius: 10,  
     getArea,     
     getPerimeter, 
   };
  
   console.log(circle1.getArea());
   console.log(circle2.getArea());
   console.log(circle1.getPerimeter());
   console.log(circle2.getPerimeter());