// var f2 = function(start, step) {
//   return function() {
//     start += step;
//     return start;
//   };
// };

// var x = f2(10, 2); // var start1 = 10; var step1 = 2;
// console.log(x());
// console.log(x());
// console.log(x());

// var y = f2(12, 8); // var start2 = 12; var step2 = 8;
// console.log(y());
// console.log(y());
// console.log(y());
// console.log(y());

// var f1 = function() {
//   var a = 10;
//   return function() {
//     return a + 2;
//   };
// };

// console.log(f1()());
// console.log(f1()());
// console.log(f1()());
// console.log(f1()());

// 1. Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
// ПРИМЕР:
// var generator = sequence(10, 3);
// var generator2 = sequence(7, 1);

// console.log(generator()); // 10
// console.log(generator()); // 13

// console.log(generator2()); // 7

// console.log(generator()); // 16

// console.log(generator2()); // 8
// 	2. Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.
// var gen2 = sequence(0, 2);
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
// 3. Разобрать методы массивов (map, filter, find, findIndex, reduce)

// (function() {
//   var a = 19;
// })();
