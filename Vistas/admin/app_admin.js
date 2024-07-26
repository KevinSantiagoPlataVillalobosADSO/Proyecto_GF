import form_v from "./modulos/añadir_prod.js"
import {val} from "./modulos/validar.js"


let form = document.querySelector("form")
let id = document.querySelector(".id__producto")
let nombre = document.querySelector(".nombre__producto")
let stock = document.querySelector(".stock__producto")
let precio = document.querySelector(".precio__producto")
let date = document.querySelector(".date__producto")

form.addEventListener('submit', (event)=>{
    if(val()){
        const datos = {
            "id": id.value,
            "nombre": nombre.value,
            "stock": stock.value,
            "precio": precio.value,
            "info_add": date.value
        }
        form_v(event, datos)
    }
    else{
        event.preventDefault();
    }
})