
const images = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg']
const navesIMG = ['img/bannerSpacex.png','img/nave2.jpg','img/nave3.jpg','img/nave4.jpg']

document.getElementById("screen").src = images[0];

var sliderderecha = document.querySelector('.slider-der');
var sliderizquierda = document.querySelector('.slider-iz');
var contador = 0;
var counter = 0;

function bannerMove(){
    counter++;
    if(counter > navesIMG.length-1) counter = 0;
    var a = document.getElementById('bannersecs')
    a.style.backgroundImage = 'url('+navesIMG[counter]+')';
}
setInterval(bannerMove,2500);

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

