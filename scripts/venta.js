import { buscar } from "./modulos/buscar_p.js"
import { detal } from "./modulos/det_venta.js"

const barra_b = document.querySelector('.barra__busqueda')
const cant = document.querySelector('.add__cant')
const cant_b = document.querySelector('.add__button')
const limpia = document.querySelector('.barra__limpiar')
const pagar = document.querySelector('.pagar__boton')
const table = document.querySelector('table')
const tbody = document.querySelector('tbody')

cant_b.addEventListener('click', (event) => {
    if(cant.value <= 0){
        alert("No se permiten valores negativos o sin valor")
    }
    else{
        let p_lb = cant.value / 500;
        buscar(barra_b.value, p_lb, cant.value)
    }
})

limpia.addEventListener('click', (event)=>{
    barra_b.value = ""
})

pagar.addEventListener('click', (event)=>{
    let confirma = confirm("¿Desea confirmar la compra?")
    if(confirma){
        detal()
        barra_b.value = ""
        cant.value = ""
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }
})