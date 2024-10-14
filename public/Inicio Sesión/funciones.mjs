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

export function verificarInputsVacios(inputs, passwords) {
    const msgerror = document.querySelector(".msgError")
    let todosLlenos = true; 

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '1px solid red'; 
            todosLlenos = false; 
        } else {
            input.style.border = ''; 
        }
    });
    if(passwords!=null){
        if(passwords[0].value!='' && passwords[1].value!=''){
            if (passwords[0].value == passwords[1].value){
                passwords[0].style.border = ''; 
                passwords[1].style.border = ''; 
            }else{
                passwords[0].style.border = '1px solid red'; 
                passwords[1].style.border = '1px solid red'; 
                todosLlenos = false;
            }
        }
    }
        msgerror.style.display = "block";

    return todosLlenos; 
}