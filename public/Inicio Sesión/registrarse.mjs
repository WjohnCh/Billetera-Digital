import { verContrasenia } from './funciones.mjs';

document.addEventListener("DOMContentLoaded", ()=>{
    verContrasenia()
    
    const paises = ['Perú', 'Colombia'];
    const prefijos = ['+51','+57'];
    const selectPaises = document.getElementById('lista_paises');
    // Logica para aniadir paises y prefijos
    paises.forEach(pais => {
        const option = document.createElement('option');
        option.value = pais;
        option.textContent = pais;
        selectPaises.appendChild(option);
    });
    
    const selectPrefijos = document.getElementById('lista_numeros_registrarse')

    prefijos.forEach(prefijo=>{
        const newprefijo = document.createElement('option');
        newprefijo.value = prefijo;
        newprefijo.textContent = prefijo;
        selectPrefijos.appendChild(newprefijo);
    })
})