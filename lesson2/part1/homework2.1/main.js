var a = prompt('Введите первое число:');

if (isNaN(a)) {
    alert( "Строка преобразовалась в NaN. Не число" );
} else {
    alert( "a="+a );
}

function calc() {

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
