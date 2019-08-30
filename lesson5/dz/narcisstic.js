
function narcissitic(value) {
    var power = value.toString().length;
    var alldigits = [];
    var result = [];
    power = parseInt(power);
    digits = value.toString();
    for (let i=0; i<digits.length; i++)
    {
        alldigits.push(parseInt(digits[i]))
    }
    for (let i=0;i<alldigits.length; i++)
    {
        result.push(Math.pow(alldigits[i],power))
    }
    var sum = result.reduce(add,0);
    function add(a,b) {
return a+b;    }
sum == value ? document.write(value + " is narcissitic"): document.write(value + " is not narcissitic");
}
var value = prompt("Введите число для проверки",);
narcissitic(value)