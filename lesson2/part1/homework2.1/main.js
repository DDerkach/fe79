//Задание 1

function calc() {
    var a = prompt('Введите первое число:');

    if (isNaN(a)) {
        alert("Строка преобразовалась в NaN. Не число");
    } else {
        alert("a=" + a);
    }
    var b = prompt('Введите второе число:');
    if (isNaN(b)) {
        alert("Строка преобразовалась в NaN. Не число");
    } else {
        alert("b=" + b);
    }
    var result;
    var char = prompt('введите знак операции(+,-,/,*):');

    if (char === '+') {
        result = +a + +b;
        alert('a' + char + 'b=' + result);
    } else if (char === '-') {
        result = +a - +b;
        alert('a' + char + 'b=' + result);
    } else if (char === '*') {
        result = +a * +b;
        alert('a' + char + 'b=' + result);
    } else if (char === '/') {
        result = +a / +b;
        alert('a' + char + 'b=' + result);
    } else alert('введен некорректный знак');
}
calc();

//Задание 2

var characters = [
  { name: 'barney', age: 36 },
  { name: 'fred', age: 40 }
];
function pluck(characters,key){
    var a = [],
        i = -1,
        j = characters.length,
        o ;

    while(++i < j)
    {
        o = characters[i] ;
        if(o.hasOwnProperty(key)) a[a.length] = o[key] ;
    }
    return a ;
}
console.log(pluck(characters, 'name')); // ['barney', 'fred']

