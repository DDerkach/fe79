var btn = document.getElementById('my-button');
btn.addEventListener('mouseover', function () {
    var y = Math.floor(Math.random() * 1024);
    var x = Math.floor(Math.random() * 768);
    btn.style.top = y+'px';
    btn.style.left = x+'px';
});
