//Задание 1
let a = 1;
while (a<=2){
  console.log("Привет!");
a++;
}

//Задание 2
let b = 1;
while (b<=5){
    console.log(b);
    b++;
}

//Задание 3
let c = 7;
while (c<=22){
  console.log(c);
  c++;
}

// Задание 4

 let obj = {
   "Коля": 200,
   "Вася": 300,
   "Петя": 400
 }
 for (key in obj) {
   console.log(`${key} - зарплата ${obj[key]} долларов`);
 }

// Задание 5
 let n = 1000;
 let num = 0;

 for (num; n >= 50; num++) {
   n /= 2;
 }

//Второй вариант решения
// while(n >=50){
//   n /= 2;
//   num++;
// }
// console.log(num, n);

// Задание 6
let currentFriday = 2;
 while (currentFriday <= 31) {
   console.log(`Сегодня пятница, ${currentFriday}-е число. Необходимо подготовить отчет.`);
   currentFriday += 7;
 }

 //Второй вариант решения
// for (currentFriday; currentFriday <= 31; currentFriday +=7){
//   console.log(`Сегодня пятница, ${currentFriday}-е число. Необходимо подготовить отчет.`);
// }

