function chColor(id, color) {
    const first = document.getElementById(id);
    first.style = 'background-color: ' + color;
}

let button1 = document.getElementById('button1');
button1.onclick = function() {
    chColor('button2', 'red');
    chColor('button4', 'red');
}   
let button2 = document.getElementById('button2');
button2.onclick = function() {
    chColor('button1', 'yellow');
    chColor('button4', 'yellow');
}   
let button3 = document.getElementById('button3');
button3.onclick = function() {
    chColor('button2', 'yellow');
    chColor('button3', 'yellow');
}
let button4 = document.getElementById('button4');
button4.onclick = function() {
    chColor('button1', 'red');
    chColor('button3', 'red');
}