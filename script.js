const numeroInput = document.getElementById('numeroInput');
const intentarBtn = document.getElementById('intentarBtn');
const nuevoJuegoBtn = document.getElementById('nuevoJuegoBtn');
const mensaje = document.getElementById('mensaje');
const intentos = document.getElementById('intentos');

let numeroSecreto;
let contadorIntentos;

function nuevoJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    contadorIntentos = 0;
    mensaje.textContent = '';
    intentos.textContent = '';
    numeroInput.value = '';
}

function verificarNumero() {
    const numeroUsuario = parseInt(numeroInput.value);

    if (isNaN(numeroUsuario)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    contadorIntentos++;

    if (numeroUsuario === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! Adivinaste el número en ${contadorIntentos} intentos.`;
    } else if (numeroUsuario < numeroSecreto) {
        mensaje.textContent = 'El número secreto es mayor.';
    } else {
        mensaje.textContent = 'El número secreto es menor.';
    }

    intentos.textContent = `Intentos: ${contadorIntentos}`;
    numeroInput.value = '';
}

nuevoJuego(); // Iniciar un nuevo juego al cargar la página

intentarBtn.addEventListener('click', verificarNumero);
nuevoJuegoBtn.addEventListener('click', nuevoJuego);