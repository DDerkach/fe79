window.addEventListener('keydown',function(key) {

    if (key.ctrlKey && key.shiftKey && key.keyCode==83 ) {
        alert("сохранено все")
    }
    else if (key.keyCode == 65 && key.ctrlKey){
        alert("выбрано все")
    }
    else if(key.keyCode == 83 && key.ctrlKey){
    alert("сохранено")
    }
})
