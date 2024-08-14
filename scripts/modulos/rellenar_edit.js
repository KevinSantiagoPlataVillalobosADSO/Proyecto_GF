import { sel } from "./leer.js"
import num from "./number.js"
import letras from "./strings.js"
import seleccion from "./seleccion.js"
import { val } from "./validar.js"
import { update } from "./update.js"

const form = document.querySelector(".edit__form")
const id = document.querySelector(".edit__id")
const nombre = document.querySelector(".edit__name")
const stock = document.querySelector(".edit__stock")
const fecha = document.querySelector(".edit__venc")
const s_cat = document.querySelector(".edit__cat")
const s_prov = document.querySelector(".edit__proveedor")
const price = document.querySelector(".edit__price")

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


export const rellenar = async(i)=>{
    let response = await fetch(`http://localhost:3000/productos/${i}`)
    let data = await response.json();
    id.value = data.id
    nombre.value = data.nombre
    stock.value = data.stock
    fecha.value = data.info_add
    s_cat.value = data.Categoria
    s_prov.value = data.proveedor
    price.value = data.precio
}

form.addEventListener("submit", (event) => {
    let validar = ".edit__form > [required]"
    if(val(validar)){
        console.log(val())
        const datos = {
            "id": id.value,
            "nombre": nombre.value,
            "stock": stock.value,
            "Categoria": s_cat.value,
            "proveedor": s_prov.value,
            "info_add": fecha.value,
            "precio": price.value,
            "src": "../IMG/productos/producto-sin-imagen.png"
        }
        event.preventDefault();
        update(id.value, datos)
    }
    else{
        event.preventDefault();
        alert("NO es posible agregar, por favor digite todos los campos");
        
    }
})