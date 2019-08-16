var p = document.getElementsByTagName('p');
    window.addEventListener('keyup',() => {
        for (var i = 0; i < p.length; i++) {
            if (event.keyCode == 82) {
                p[i].style.color = 'red'
            } else if (event.keyCode == 71) {
                p[i].style.color = 'green'
            } else if (event.keyCode == 66) {
                p[i].style.color = 'blue'
            }
        }
    })