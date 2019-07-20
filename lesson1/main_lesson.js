// number
// string
// boolean
// undefined
// null
// object

// var a = 20;
// var a = "20";
// var a = true;
// var a;
// var a = null; //!!!
// var a = {};
// var a = function() {}; //!!!

// alert(a);
// console.log(typeof a);

// var a = 10;
// var b = "20";
// var c = a + b;

// console.log(c);

// var img = "1.png";
// var template = "<img src='" + img + "'>";
// var template = "<img src='1.png'>";

// var a = 10;
// // a = a + 2;
// // a += 2;
// console.log(a);
// // console.log(a++);
// // console.log(++a);
// console.log(a--);
// console.log(--a);
// console.log(a);

// var a = 10;
// var b = "20";
// console.log(a + +b);

// var age = 20;
// console.log(!!age);

// var a = "20";
// var b = 20;
// var c = +a === b;

// console.log(c);

// var a = "a";
// var b = "A";

// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);

// var age = 17;
// if (age < 18) {
//   console.log("Приходи с папой");
// } else if (age >= 80) {
//   console.log("Лучше кефир");
// } else {
//   console.log("Держи пивас");
// }

// console.log("!!!!");

// var age = 18;
// var toAllow = age >= 18 ? true : false;
// console.log(toAllow);

// if (age >= 18) {
//   toAllow = true;
// } else {
//   toAllow = false;
// }

// var a = confirm("???");
// var a = prompt("???");
// console.log(a);

// var price = 0;
// var errorMessage;
// var memory = prompt("Memory?");

// if (memory === null) {
//   errorMessage = "Пока!";
// } else if (+memory === 64) {
//   price = 500;
// } else if (+memory === 128) {
//   price = 800;
// } else if (+memory === 256) {
//   price = 1200;
// } else {
//   errorMessage = "Такой памяти нет";
// }

// if (errorMessage) {
//   document.write("<h1 style='color: red'>" + errorMessage + "</h1>");
// } else {
//   document.write("<h1>PRICE: " + price + "$</h1>");
// }

// var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

// // console.log(arr[4]);
// // arr[4] = "NEW MAY";
// // arr[1000] = "XXXX"
// // arr[4] = ["XXX", "XXX", "XXX"];
// console.log(arr);

// var memories = [64, 128, 256];

// var i = 0;
// while (i < memories.length) {
//   console.log(memories[i]);
//   i++;
// }

// for (var i = 0; i < memories.length; i++) {
//   console.log(memories[i]);
// }

// var price = null;
// var errorMessage;
// var memory;
// var memories = [
//   {
//     value: 64,
//     price: 500
//   },
//   {
//     value: 128,
//     price: 800
//   },
//   {
//     value: 256,
//     price: 1200
//   }
// ];

// while (price === null && memory !== null) {
//   memory = prompt("Memory?");
//   if (memory === null) {
//     alert("Отмена!");
//   }
//   for (var i = 0; i < memories.length; i++) {
//     if (+memory === memories[i].value) {
//       price = memories[i].price;
//     }
//   }
// }
// document.write(price);

// 1. Спрашивать у пользователя цвет телефона и выводить кратинку соответствующую этому цвету (обратить внимание на то, что пользователь имеет возможность ввести память только тогда, когда выбрал цвет)
// 2*. Цена телефона должна зависеть не только от памяти, но и от цвета. К примеру: silver на 128 стоит 500$, а black на 128 стоит 510$. И так далее. Сделать это нужно без создания всех комбинаций телефонов и без кучи if(){}else{}
