import {verificarInputsVacios } from './funciones.mjs';
document.addEventListener("DOMContentLoaded",()=>{
    const inputs = document.querySelectorAll('.num_pin');
    const botonConfirmar = document.getElementById('btnConfirmar');


    // Logica para pasar al siguiente input automaticamente
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1) {
                if (index === inputs.length - 1) {
                    botonConfirmar.focus();
                } else {
                    inputs[index + 1].focus();
                }
            }
        });
    });


    botonConfirmar.addEventListener("click", (event)=>{
        event.preventDefault()
        let inputsCompletos = verificarInputsVacios(inputs)
        if (inputsCompletos) {
            window.location.href = './mensajeExito.html';
        }
    })
})