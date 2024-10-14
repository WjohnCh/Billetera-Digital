import { verContrasenia, verificarInputsVacios } from './funciones.mjs';

document.addEventListener("DOMContentLoaded", ()=>{
    verContrasenia()
    
    const btn_CrearCuenta = document.getElementById("btn_CrearCuenta")

    btn_CrearCuenta.addEventListener("click", ()=>{
        window.location.href = './registrarse.html';
    })
    const btnInciarSesion = document.querySelector(".primary-button");
    const inputs = document.querySelectorAll(".input_login")

    btnInciarSesion.addEventListener("click", (event)=>{
        const formulario = document.querySelector("form");
        const validacionNavegador = formulario.checkValidity();
        let inputsCompletos= verificarInputsVacios(inputs)

        if (inputsCompletos && validacionNavegador) {
            event.preventDefault()
            window.location.href = '../index.html';
        }
    })

})