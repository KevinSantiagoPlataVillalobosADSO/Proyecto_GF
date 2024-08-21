import { buscar } from "./modulos/buscar_p.js"
import { detal } from "./modulos/det_venta.js"

const barra_b = document.querySelector('.barra__busqueda')
const cant = document.querySelector('.add__cant')
const cant_b = document.querySelector('.add__button')
const limpia = document.querySelector('.barra__limpiar')
const pagar = document.querySelector('.pagar__boton')
const pagar_m = document.querySelector('.pagar__metod')
const table = document.querySelector('table')
const tbody = document.querySelector('tbody')
const metodo = document.querySelector('.metodo__pago')
const add_close = document.querySelector(".close__btn")
const recibidom = document.querySelector(".recibido__in")

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

pagar_m.addEventListener('click', (event)=>{
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
    metodo.classList.add("vista__edit")
})

add_close.addEventListener("click", (event) => {
    metodo.classList.remove("vista__edit")
    let overlay = document.querySelector('.overlay');
    if (overlay) {
        document.body.removeChild(overlay);
        // contenedor_lista.removeChild(overlay);
    }
})

