import { sel } from "./leer.js"
import num from "./number.js"
import letras from "./strings.js"
import seleccion from "./seleccion.js"
import { val } from "./validar.js"
import { update } from "./update.js"
import { leer } from "./leer.js"
import listar from "./mostrar_tabla.js"

const form = document.querySelector(".edit__form")
const id = document.querySelector(".edit__id")
const nombre = document.querySelector(".edit__name")
const stock = document.querySelector(".edit__stock")
const fecha = document.querySelector(".edit__venc")
const s_cat = document.querySelector(".edit__cat")
const s_prov = document.querySelector(".edit__proveedor")
const price = document.querySelector(".edit__price")
const stockb = document.querySelector(".edit__stockb")
let id__act = 0;

addEventListener("DOMContentLoaded", (event) => {
    let link = "categoria"
    let op = sel(link).then((d) => {
        const fragment = document.createDocumentFragment();
        d.forEach(x => {
            let option = document.createElement("option")
            option.textContent = x.cate;
            fragment.appendChild(option)
        });
        s_cat.appendChild(fragment)
    })
})

addEventListener("DOMContentLoaded", (event) => {
    let link = "proveedores"
    let op = sel(link).then((d) => {
        const fragment = document.createDocumentFragment();
        d.forEach(x => {
            let option = document.createElement("option")
            option.textContent = x.nom;
            fragment.appendChild(option)
        });
        s_prov.appendChild(fragment)
    })
})

id.addEventListener('keypress', (event) => {
    num(event, id);
})

id.addEventListener('keyup', (event) => {
    num(event, id);
})

id.addEventListener('blur', (event) => {
    num(event, id);
})

price.addEventListener('keypress', (event) => {
    num(event, price);
})

price.addEventListener('keyup', (event) => {
    num(event, price);
})

price.addEventListener('blur', (event) => {
    num(event, price);
})

stock.addEventListener('keypress', (event) => {
    num(event, stock);
})

stock.addEventListener('keyup', (event) => {
    num(event, stock);
})

stock.addEventListener('blur', (event) => {
    num(event, stock);
})

stockb.addEventListener('keypress', (event) => {
    num(event, stockb);
})

stockb.addEventListener('keyup', (event) => {
    num(event, stockb);
})

stockb.addEventListener('blur', (event) => {
    num(event, stockb);
})

nombre.addEventListener('keypress', (event) => {
    letras(event, nombre);
})

nombre.addEventListener('keyup', (event) => {
    letras(event, nombre);
})

nombre.addEventListener('blur', (event) => {
    letras(event, nombre);
})

s_cat.addEventListener("change", (event) => {
    seleccion(event, s_cat)
})

s_cat.addEventListener("blur", (event) => {
    seleccion(event, s_cat)
})

s_prov.addEventListener("change", (event) => {
    seleccion(event, s_prov)
})

s_prov.addEventListener("blur", (event) => {
    seleccion(event, s_prov)
})


export const rellenar_bd = async(i)=>{
    let response = await fetch(`http://localhost:3000/Bodega/${i}`)
    let data = await response.json();
    id__act = data.id;
    id.value = data.id
    nombre.value = data.nombre
    stock.value = data.stock
    fecha.value = data.info_add
    s_cat.value = data.Categoria
    s_prov.value = data.proveedor
    price.value = data.precio
}


