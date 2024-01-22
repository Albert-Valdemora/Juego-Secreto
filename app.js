document.getElementById('verificacion').removeAttribute('disabled');
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMiximo = 10;


function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}


function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMiximo) + 1;
  
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  
  //Si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length === numeroMiximo) {
    asignarTextoElemento('p', 'Ya se sortearon todo los números posibles')
    document.getElementById('verificacion').setAttribute('disabled', 'true');
  } else {
    // Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {//
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}



function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMiximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}


function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}


condicionesIniciales();


function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acerto.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
}


function reiniciarjuego() {
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numero
  //Generar un nuevo numero secreto
  //Inicializar el numero de intentos
  condicionesIniciales();

  //Deshabilitar el boton de nuevo juego
  document.getElementById('reiniciar').setAttribute('disabled', 'true')
}

