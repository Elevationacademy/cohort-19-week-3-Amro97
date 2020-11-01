// console.log(document)
//--------------Ex1
const right = function (){
    const block = document.getElementById('block');
    let right = parseInt(block.style.left) || 0;
    right += 20;
    block.style.left = right + 'px';
}
const left = function (){
    const block = document.getElementById('block');
    let left = parseInt(block.style.left) || 0;
    left -= 20;
    block.style.left = left + 'px';
}
const up = function (){
    const block = document.getElementById('block');
    let up = parseInt(block.style.top) || 0;
    up -= 20;
    block.style.top = up + 'px';
}
const down = function (){
    const block = document.getElementById('block');
    let down = parseInt(block.style.top) || 0;
    down += 20;
    block.style.top = down + 'px';
}
const eventlistener = function(e){
    if(e == 'ArrowLeft')
    left()
    if(e == 'ArrowRight')
    right()
    if(e == 'ArrowUp')
    up()
    if(e == 'ArrowDown')
    down()
}


document.getElementById('right').onclick = right
document.getElementById('left').onclick = left
document.getElementById('up').onclick = up
document.getElementById('down').onclick = down

window.addEventListener('keydown', e => eventlistener(e.key))
let listener = document.getElementsByTagName('body')[0]
//-------------Ex2
