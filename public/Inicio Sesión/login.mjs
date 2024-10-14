import { verContrasenia } from './funciones.mjs';

document.addEventListener("DOMContentLoaded", ()=>{
    verContrasenia()
    
    const btn_CrearCuenta = document.getElementById("btn_CrearCuenta")

    btn_CrearCuenta.addEventListener("click", ()=>{
        window.location.href = './registrarse.html';
    })
})