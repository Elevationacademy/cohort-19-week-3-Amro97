function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
let box; let r; let g; let b;
let con = document.getElementById('container')

for (let i=0; i<6; i++){
    box = document.createElement('div')
    box.className = 'box'
    r = getRandomInt(255)
    g = getRandomInt(255)
    b = getRandomInt(255)
    box.style.backgroundColor = 'rgb('+r+', '+g+','+ b+')'
    con.appendChild(box)
}
const randomcolor = function(){
    r = getRandomInt(255)
    g = getRandomInt(255)
    b = getRandomInt(255)
    this.style.backgroundColor = 'rgb('+r+', '+g+','+ b+')'
}
document.getElementsByClassName('box')[0].onmouseover = randomcolor
document.getElementsByClassName('box')[1].onmouseover = randomcolor
document.getElementsByClassName('box')[2].onmouseover = randomcolor
document.getElementsByClassName('box')[3].onmouseover = randomcolor
document.getElementsByClassName('box')[4].onmouseover = randomcolor
document.getElementsByClassName('box')[5].onmouseover = randomcolor