const jsConfetti = new JSConfetti()
let botonReiniciar=document.querySelector('.botonReinicio')
let botonNo = document.querySelector(".botonNo");
let textoCambia = document.querySelector(".textoCambio");
let botonsi=document.querySelector('.botonSi');
let imagenLove = document.querySelector(".imagen");

botonNo.addEventListener("click", respuestaNo);
botonsi.addEventListener('click',respuestaSi);


function respuestaNo() {
  let frases = [
    "Would you like to be my Valentine?",
    "Would you like to be my partner?",
    "Do you want to be my official partner?",
    "Do you want to be my boyfriend/girlfriend?",
    "Do you want to be a special part of my life?",
    "Would you like to be my special person?",
    "Do you want to be my other half?",
    "Would you like to be my love?",
    "Would you like to be my better half?",
    "Do you want to be my soulmate?",
    "Would you like to be my sweetheart?",
    "Would you like to be my Valentine's Day date?",
    "Would you like to be my life partner?",
    "Would you like to be my dear?",
    "Do you want to be my confidant and my love?",
    "Would you like to be the reason for my smiles?",
    "Do you want to be the person I share all my days with?",
    "Do you want to be my reason to believe in love?",
  ];
  let imagenes = [
    "img/uno.gif",
    "img/dos.gif",
    "img/tres.gif",
    "img/cuatro.gif",
    "img/cinco.gif",
    "img/siete.gif",
    "img/ocho.gif",
  ];
  let valorRandom = frases[Math.floor(Math.random() * frases.length)];
  let RandomImagen = imagenes[Math.floor(Math.random() * imagenes.length)];

  textoCambia.innerText = valorRandom;
  imagenLove.src = RandomImagen;
}

let botonReinicioCreado=false;

function respuestaSi(){

    jsConfetti.addConfetti()
    imagenLove.src='../img/lovely-cats.gif'
    textoCambia.innerText='I would know you felt the same way I do, I love you. ';
    botonNo.classList.add('bloqueo')

    if(!botonReinicioCreado){
      creacionNuevoBoton()
      botonReinicioCreado=true;
    }
}

function creacionNuevoBoton(){

    let boton = document.createElement('button')
    boton.innerHTML='Reset'
    boton.setAttribute('class','botonReinicio')
    let contenedorBoton=document.querySelector('.container__boton')
    contenedorBoton.appendChild(boton)
    boton.addEventListener('click',reiniciarPrograma)
}


function reiniciarPrograma(){
    window.location.reload()
}


