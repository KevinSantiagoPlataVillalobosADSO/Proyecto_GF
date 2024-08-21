import { buscar } from "./modulos/buscar_p.js"

const barra_b = document.querySelector('.barra__busqueda')
const cant = document.querySelector('.add__cant')
const cant_b = document.querySelector('.add__button')



cant_b.addEventListener('click', (event) => {
    if(cant.value < 0){
        alert("No se permiten valores negativos")
    }
    else{
        let p_lb = cant.value / 500;
        buscar(barra_b.value, p_lb)
    }
})
