var btn = document.getElementById('save');
var saved = false;
btn.addEventListener('click', savePage);
function savePage() {
    saved = true;
    return saved
};
window.onbeforeunload = function ()
{
    if (saved != true)
    {
        return true;
    }else
    {
        document.write("Save Your data!")
    }
};