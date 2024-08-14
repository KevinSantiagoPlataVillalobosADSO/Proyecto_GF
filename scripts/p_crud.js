import { sel, leer } from "./modulos/leer.js"
import num from "./modulos/number.js"
import letras from "./modulos/strings.js"
import seleccion from "./modulos/seleccion.js"
import { val } from "./modulos/validar.js"
import { enviar } from "./modulos/enviar.js"
import vaciar from "./modulos/vaciar.js"
import listar from "./modulos/mostrar_tabla.js"
import { form_d } from "./modulos/delete.js"
import { rellenar } from "./modulos/rellenar_edit.js"

const tabla = document.querySelector("table")
const button = document.querySelector(".card__mostrar")
const form = document.querySelector("form")
const select_cat = document.querySelector(".form__cat")
const select_prov = document.querySelector(".form__proveedor")
const id = document.querySelector(".form__id")
const nombre = document.querySelector(".form__name")
const stock = document.querySelector(".form__stock")
const precio = document.querySelector(".form__price") 
// const submit = document.querySelector(".form__submit")
const date = document.querySelector(".form__venc")
const edit = document.querySelector(".edit__form")
const edit_close = document.querySelector(".edit__form > .close__btn")

addEventListener("DOMContentLoaded", (event)=>{
    let prod = leer().then((d) => {
        listar(d);
    })
})

addEventListener("DOMContentLoaded", (event) => {
    let link = "categoria"
    let op = sel(link).then((d) => {
        const fragment = document.createDocumentFragment();
        d.forEach(x => {
            let option = document.createElement("option")
            option.textContent = x.cate;
            fragment.appendChild(option)
        });
        select_cat.appendChild(fragment)
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
        select_prov.appendChild(fragment)
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

precio.addEventListener('keypress', (event) => {
    num(event, precio);
})

precio.addEventListener('keyup', (event) => {
    num(event, precio);
})

precio.addEventListener('blur', (event) => {
    num(event, precio);
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

select_cat.addEventListener("change", (event) => {
    seleccion(event, select_cat)
})

select_cat.addEventListener("blur", (event) => {
    seleccion(event, select_cat)
})

select_prov.addEventListener("change", (event) => {
    seleccion(event, select_prov)
})

select_prov.addEventListener("blur", (event) => {
    seleccion(event, select_prov)
})

const ver = ((event) => {
    form.classList.toggle("visto");
    if (form.classList.contains("visto")) {
        form.removeAttribute("hidden");
    } else {
        form.setAttribute("hidden", "");
    }
})

button.addEventListener('click', (event) => {
    ver(event);
})

form.addEventListener("submit", (event) => {
    let validar = ".add__form > [required]"
    if(val(validar)){
        console.log(val())
        const datos = {
            "id": id.value,
            "nombre": nombre.value,
            "stock": stock.value,
            "Categoria": select_cat.value,
            "proveedor": select_prov.value,
            "info_add": date.value,
            "precio": precio.value,
            "src": "../IMG/productos/producto-sin-imagen.png"
        }
        event.preventDefault();
        enviar(datos)
        vaciar(event)
    }
    else{
        event.preventDefault();
        alert("NO es posible agregar, por favor digite todos los campos");
        
    }
})

tabla.addEventListener("click", (event) => {
    if(event.target.classList.contains("btn_del")){
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let confirmacion = confirm(`¿Seguro que deseas eliminar el producto con id ${id}?`);
        if (confirmacion) {
            event.preventDefault();
            form_d(event, id)
        }
        else{
            event.preventDefault();
            alert("No se ha eliminado el producto");
        }
    }
    
})

tabla.addEventListener("click", (event) => {
    if(event.target.classList.contains("btn_edit")){
        edit.classList.add("vista__edit")
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        var overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block';
        rellenar(id)
    }
    
})

edit_close.addEventListener("click", (event) => {
    edit.classList.remove("vista__edit")
    var overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
})


