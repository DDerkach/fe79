var div = document.getElementById('div');
var x = 0;
var y = 0;
window.addEventListener('keydown', function(){
    if (event.keyCode == 37) {
        x += -10;
        div.style.left = x + 'px';
    } else if (event.keyCode == 39) {
        x += 10;
        div.style.left = x + 'px';
    } else if (event.keyCode == 38) {
        y += -10;
        div.style.top = y + 'px';
    } else if (event.keyCode == 40) {
        y += 10;
        div.style.top = y + 'px';
    }
},false)