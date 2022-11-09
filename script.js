
const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg'
]

document.getElementById("screen").src = images[0];

var sliderderecha = document.querySelector('.slider-der');
var sliderizquierda = document.querySelector('.slider-iz');
var contador = 0;

function derMove(){
    contador++;
    if(contador > images.length-1) contador = 0;
    document.getElementById("screen").src = images[contador];
}

function izMove(){
    contador--;
    if(contador < 0) contador=images.length-1;
    document.getElementById("screen").src = images[contador];

    
}

sliderderecha.addEventListener("click", derMove)

sliderizquierda.addEventListener("click", izMove)