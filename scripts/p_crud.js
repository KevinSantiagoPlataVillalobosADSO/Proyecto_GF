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
import { existe_P } from "./modulos/existe__prod.js"

const tabla = document.querySelector("table")
const button = document.querySelector(".card__mostrar")
const form = document.querySelector("form")
const back = document.querySelector("#a__back")
const select_cat = document.querySelector(".form__cat")
const select_prov = document.querySelector(".form__proveedor")
const id = document.querySelector(".form__id")
const nombre = document.querySelector(".form__name")
const precio = document.querySelector(".form__price") 
const stock = document.querySelector(".form__stock")
const stockb = document.querySelector(".form__stockB")
// const submit = document.querySelector(".form__submit")
const date = document.querySelector(".form__venc")
const edit = document.querySelector(".edit__form")
const add_close = document.querySelector(".add__form > .close__btn")
const edit_close = document.querySelector(".edit__form > .close__btn")
const contenedor_lista = document.querySelector(".contenedor__card")
const ruta = "productos"

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
    form.classList.add("vista__edit")
})

button.addEventListener('click', (event) => {
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
    ver(event);
})

add_close.addEventListener("click", (event) => {
    form.classList.remove("vista__edit")
    let overlay = document.querySelector('.overlay');
    if (overlay) {
        document.body.removeChild(overlay);
        // contenedor_lista.removeChild(overlay);
    }
})


form.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    let validar = ".add__form > [required]";
    
    // Verifica validación y existencia del producto
    const validado = val(validar);
    const productoExiste = await existe_P(id.value);
    
    if (validado && !productoExiste) {
        const datos = {
            "id": id.value,
            "nombre": nombre.value,
            "stock": stock.value,
            "Categoria": select_cat.value,
            "proveedor": select_prov.value,
            "info_add": date.value,
            "precio": precio.value,
            "src": "../IMG/productos/producto-sin-imagen.png"
        };
        const ruta2 = "Bodega"
        const datos2 = {
            "id": id.value,
            "nombre": nombre.value,
            "stock": stockb.value,
            "Categoria": select_cat.value,
            "proveedor": select_prov.value,
            "info_add": date.value,
            "precio": precio.value,
            "src": "../IMG/productos/producto-sin-imagen.png"
        };

        enviar(datos, ruta); 
        enviar(datos2, ruta2); 
        let user = await leer();
        listar(user);
        vaciar(event);
    } else {
        vaciar(event);
        alert("Producto ya existente o campos sin rellenar");
    }
});

tabla.addEventListener("click", (event) => {
    const ruta2 = "Bodega"
    if(event.target.classList.contains("bx-trash")){
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let confirmacion = confirm(`¿Seguro que deseas eliminar el producto con id ${id}?`);
        if (confirmacion) {
            event.preventDefault();
            form_d(event, ruta, id)
            form_d(event, ruta2, id)
            let user = leer().then((u) => {
                listar(u);
            })
        }
        else{
            event.preventDefault();
            alert("No se ha eliminado el producto");
        }
    }
    let user = leer().then((u) => {
        listar(u);
    })
})

tabla.addEventListener("click", (event) => {
    if(event.target.classList.contains("bx-edit-alt")){
        edit.classList.add("vista__edit")
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let overlay2 = document.createElement('div');
        overlay2.className = 'overlay2';
        document.body.appendChild(overlay2);
        overlay2.style.display = 'block';
        rellenar(id)
        let user = leer().then((u) => {
            listar(u);
        })
    }
})

edit_close.addEventListener("click", (event) => {
    edit.classList.remove("vista__edit")
    let overlay2 = document.querySelector('.overlay2');
    if(overlay2){
        document.body.removeChild(overlay2);
    }
})

sessionStorage.removeItem('adminVisited');
