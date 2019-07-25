// var arr = [5, 25, 435,345];
// var arr2 = new Array(5, 25, 435,345);

// var arr = ["h", "e", "l", "l", "o"];

// // var x = arr.push("NEW");
// // var x = arr.pop();
// // var x = arr.unshift("NEW");
// // var x = arr.shift();
// // var x = arr.concat("NEW 1", "NEW 2");
// // var x = arr.slice(2, 4);
// // var x = arr.splice(2, 2);
// // var x = arr.splice(2, 2, "L", "L");
// // var x = arr.splice(2, 0, "NEW");
// // var x = arr.reverse();
// // var x = arr.join();
// // var x = arr.sort();
// // document.write(arr);
// console.log(arr);
// console.log(x);

// var arr = [];
// var sideLength = 5;

// for (var i = 0; i < sideLength; i++) {
//   arr.push(new Array(sideLength));
//   for (var j = 0; j < arr[i].length; j++) {
//     arr[i][j] = j;
//   }
// }

// console.log(arr);

// var man = {
//   name: "Bob",
//   surname: "Brown"
//   //   "some word": "XXX",
//   //   свойство: "XXXXXX"
// };
// delete man.name;
// console.log(man);

// var key = prompt("Key ???");
// var key = "name";
// console.log(man.key);
// console.log(man[key]);
// console.log(man["свойство"]);

// console.log(man);
// console.log(man.name);
// console.log(man.xxxx);
// man.email = "test@gmail.com";
// console.log(man);

// sum();
// function sum() {}

// sum();
// var sum = function() {};

// var sum = function() {
//   var a = 5 + 2;
//   console.log(a);
// };

// var sum = function(a, b) {
//   return a + b;
// };

// console.log(sum(20, 30));
// console.log(sum(20, 30, 345, 345));
// console.log(sum(20));

// var greet = function(x, y) {
//   return x + " " + y + " Hello! I am " + this.name;
// };

// var man = {
//   name: "Bob",
//   greet: greet
// };

// var man2 = {
//   name: "Ivan",
//   greet: greet
// };

// var params = [10, 20];

// console.log("MAN - ", man.greet(10, 20));
// console.log("MAN 2 - ", man2.greet.call(man, 10, 20));
// console.log("MAN 2 - ", man2.greet.apply(man, params));
// man2.greet = man2.greet.bind(man);
// console.log("MAN 2 - " + man2.greet());

// var app = {
//   a: 10,
//   foo: function() {
//     btn.onclick = function() {
//       console.log(this.a);
//     }.bind(this);
//   }
// };

// var arr = [1, 2, 3, 4];
// // arr.push([5, 6, 7]);
// var arr2 = arr.concat([5, 6, 7]);
// console.log(arr2);

// 1. Написать функцию которая будет спрашивать у пользователя 2 значения и знак (3 prompt подряд). Если пользователя ввел корректные цифры и корректный знак, то посчитать эти 2 числа с введенным знаком и вывести на экран. Грубо говоря, это калькулятор. Сделать все проверки на NaN, undefined, null.
// 2. Написать функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:
// var characters = [
//   { 'name': 'barney', 'age': 36 },
//   { 'name': 'fred', 'age': 40 }
// ];

// console.log(pluck(characters, 'name')); // ['barney', 'fred']
