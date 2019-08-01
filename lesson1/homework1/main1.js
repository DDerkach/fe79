var price = null;
var color;
var color_modifier= null;
var colors =[
    {
        color: 'red',
        modifier:50
    },
    {
        color: 'black',
        modifier:0
    },
    {
        color: 'silver',
        modifier:100
    },
    {
        color: 'gold',
        modifier: 150
    }
];
var memory;
var memory_modifier = null;
var memories = [
    {
        value: 64,
        modifier: 500
    },
    {
        value: 128,
        modifier: 800
    },
    {
        value: 256,
        modifier: 1000
    }
];

while (price === null && memory !== null && color !== null) {

    color = prompt("Color? (Black,Red,Silver,Gold)");

    if (color === null) {
        alert("Отмена!");
    }

    else memory = prompt("Memory? (64,128,256)");

    for (var i = 0; i < colors.length; i++) {
        if (color === colors[i].color) {
            color_modifier = colors[i].modifier;
        }
    }

    for (var j = 0; j < memories.length; j++) {
        if (+memory === memories[j].value) {
            memory_modifier = memories[j].modifier;
        }
    }

    price = memory_modifier + color_modifier;
}

document.write('<img src = img/' + color + '.png alt="color">');
document.write("<h1>PRICE: " + price + "$</h1>");