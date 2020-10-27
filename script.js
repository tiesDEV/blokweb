// HAMBURGER-MENU

var kruisAnimatieNaKlik = document.querySelector("div.hamburger-menu-animatie");

var navDivje = document.querySelector("div.hamburger");

var streep1 = document.querySelector("span#streep1");

var streep2 = document.querySelector("span#streep2");

kruisAnimatieNaKlik.addEventListener("click", openEnSluitHamburger);


function openEnSluitHamburger() {
  navDivje.classList.toggle("openHamburger");

 streep1.classList.toggle("open");

 streep2.classList.toggle("open");

}

// CAROUSSEL

var image1 = document.querySelector("img.image1");
var image2 = document.querySelector("img.image2");
var image3 = document.querySelector("img.image3");
var image4 = document.querySelector("img.image4");
var image5 = document.querySelector("img.image5");
var image6 = document.querySelector("img.image6");

var bullet1 = document.querySelector("span.bullet1");
var bullet2 = document.querySelector("span.bullet2");
var bullet3 = document.querySelector("span.bullet3");
var bullet4 = document.querySelector("span.bullet4");
var bullet5 = document.querySelector("span.bullet5");
var bullet6 = document.querySelector("span.bullet6");

bullet1.addEventListener("click", foto1);
bullet2.addEventListener("click", foto2);
bullet3.addEventListener("click", foto3);
bullet4.addEventListener("click", foto4);
bullet5.addEventListener("click", foto5);
bullet6.addEventListener("click", foto6);


function foto1() {
  bullet1.classList.add("fotoactive");
  bullet2.classList.remove("fotoactive");
  bullet3.classList.remove("fotoactive");
  bullet4.classList.remove("fotoactive");
  bullet5.classList.remove("fotoactive");
  bullet6.classList.remove("fotoactive");

  image1.classList.add("showImage");
  image2.classList.remove("showImage");
  image3.classList.remove("showImage");
  image4.classList.remove("showImage");
  image5.classList.remove("showImage");
  image6.classList.remove("showImage");
}

function foto2() {
  bullet1.classList.remove("fotoactive");
  bullet2.classList.add("fotoactive");
  bullet3.classList.remove("fotoactive");
  bullet4.classList.remove("fotoactive");
  bullet5.classList.remove("fotoactive");
  bullet6.classList.remove("fotoactive");

  image1.classList.remove("showImage");
  image2.classList.add("showImage");
  image3.classList.remove("showImage");
  image4.classList.remove("showImage");
  image5.classList.remove("showImage");
  image6.classList.remove("showImage");
}

function foto3() {
  bullet1.classList.remove("fotoactive");
  bullet2.classList.remove("fotoactive");
  bullet3.classList.add("fotoactive");
  bullet4.classList.remove("fotoactive");
  bullet5.classList.remove("fotoactive");
  bullet6.classList.remove("fotoactive");

  image1.classList.remove("showImage");
  image2.classList.remove("showImage");
  image3.classList.add("showImage");
  image4.classList.remove("showImage");
  image5.classList.remove("showImage");
  image6.classList.remove("showImage");
}

function foto4() {
  bullet1.classList.remove("fotoactive");
  bullet2.classList.remove("fotoactive");
  bullet3.classList.remove("fotoactive");
  bullet4.classList.add("fotoactive");
  bullet5.classList.remove("fotoactive");
  bullet6.classList.remove("fotoactive");

  image1.classList.remove("showImage");
  image2.classList.remove("showImage");
  image3.classList.remove("showImage");
  image4.classList.add("showImage");
  image5.classList.remove("showImage");
  image6.classList.remove("showImage");
}

function foto5() {
  bullet1.classList.remove("fotoactive");
  bullet2.classList.remove("fotoactive");
  bullet3.classList.remove("fotoactive");
  bullet4.classList.remove("fotoactive");
  bullet5.classList.add("fotoactive");
  bullet6.classList.remove("fotoactive");

  image1.classList.remove("showImage");
  image2.classList.remove("showImage");
  image3.classList.remove("showImage");
  image4.classList.remove("showImage");
  image5.classList.add("showImage");
  image6.classList.remove("showImage");
}

function foto6() {
  bullet1.classList.remove("fotoactive");
  bullet2.classList.remove("fotoactive");
  bullet3.classList.remove("fotoactive");
  bullet4.classList.remove("fotoactive");
  bullet5.classList.remove("fotoactive");
  bullet6.classList.add("fotoactive");

  image1.classList.remove("showImage");
  image2.classList.remove("showImage");
  image3.classList.remove("showImage");
  image4.classList.remove("showImage");
  image5.classList.remove("showImage");
  image6.classList.add("showImage");
}
