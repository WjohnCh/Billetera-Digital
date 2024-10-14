export function verContrasenia(){
    const verpassword = document.querySelectorAll('.contrasenia_register')
    
    // LOGICA PARA VER LA CONTRASEÑA
    verpassword.forEach(element=>{
        const input = element.querySelector('.input_login')
        const img = element.querySelector('.visualizar_contrasenia')

        img.addEventListener('click', ()=>{
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        })
    })
}