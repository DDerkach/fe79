// /*
// const parahraps = document.getElementsByTagName("p");

// const button = document.getElementById("button1");

// button.onclick = (/*props*/) => { alert("click") }

// function name () {}

//  props => return parops * props

//  (props) => {
//  }


// */

const p = document.getElementsByTagName('p');
const div = document.getElementsByTagName('div');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
button1.addEventListener("click", () => {
for(var i = 0; i < p.length; i++ ){
    p[i].style.border = '1px solid red';
}
}, false)
button2.addEventListener("click", () => {
    for(var i = 0; i < div.length; i++ ){
        div[i].style.border = '1px solid green';
    }
    }, false)