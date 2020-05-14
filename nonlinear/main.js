$(document).ready(function() {

function stackToTop(photoid) {
  var photo = document.getElementById(photoid).style;
  photo.zIndex="15"
}

function stackToBottom(photoid) {
  var photo = document.getElementById(photoid).style;
  photo.zIndex="0"
}

let btn12= document.querySelector('#btn14');
let btn13= document.querySelector('#btn15');

let img= document.querySelector('img');
let btn1= document.querySelector('#btn1');
let btn2= document.querySelector('#btn2');
let btn3= document.querySelector('#btn3');
let btn4= document.querySelector('#btn4');
let btn5= document.querySelector('#btn5');
let btn6= document.querySelector('#btn6');
let btn7= document.querySelector('#btn7');
let btn8= document.querySelector('#btn8');
let btn9= document.querySelector('#btn9');
let btn10= document.querySelector('#btn10');
let btn11= document.querySelector('#btn11');
let btn12= document.querySelector('#btn12');
let btn13= document.querySelector('#btn13');


let btn3= document.querySelector('#btn14');
let btn4= document.querySelector('#btn15');
let btn5= document.querySelector('#btn16');
let btn6= document.querySelector('#btn17');
let btn7= document.querySelector('#btn18');
let btn8= document.querySelector('#btn19');
let btn9= document.querySelector('#btn20');
let btn10= document.querySelector('#btn21');
let btn11= document.querySelector('#btn22');
let btn12= document.querySelector('#btn23');
let btn13= document.querySelector('#btn24');

btn1.addEventListener('click', () => {
  img.src = 'ii.png';
})

btn2.addEventListener('click', () => {
  img.src = 'iie.png';
})

// light
btn3.addEventListener('click', () => {
  img.src = 'iii.png';
})

btn4.addEventListener('click', () => {
  img.src = 'iiie.png';
})

btn5.addEventListener('click', () => {
  img.src = 'iv.png';
})

btn6.addEventListener('click', () => {
  img.src = 'ive.png';
})

btn7.addEventListener('click', () => {
  img.src = 'v.png';
})

btn8.addEventListener('click', () => {
  img.src = 've.png';
})

btn9.addEventListener('click', () => {
  img.src = 'vi.png';
})

btn10.addEventListener('click', () => {
  img.src = 'vie.png';
})

btn11.addEventListener('click', () => {
  img.src = 'vii.png';
})

btn12.addEventListener('click', () => {
  img.src = 'viie.png';
})

btn13.addEventListener('click', () => {
  img.src = 'home.png';
})
}
// dark
btn14.addEventListener('click', () => {
  img.src = 'iii.png';
})

btn15.addEventListener('click', () => {
  img.src = 'iiie.png';
})

btn16.addEventListener('click', () => {
  img.src = 'iv.png';
})

btn17.addEventListener('click', () => {
  img.src = 'ive.png';
})

btn18.addEventListener('click', () => {
  img.src = 'v.png';
})

btn19.addEventListener('click', () => {
  img.src = 've.png';
})

btn20.addEventListener('click', () => {
  img.src = 'vi.png';
})

btn21.addEventListener('click', () => {
  img.src = 'vie.png';
})

btn22.addEventListener('click', () => {
  img.src = 'vii.png';
})

btn23.addEventListener('click', () => {
  img.src = 'viie.png';
})

btn24.addEventListener('click', () => {
  img.src = 'home.png';
})
