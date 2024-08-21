import { leer_emp } from "./modulos/leer.js";
import listar_emp from "./modulos/mostrar_emp.js";
import { form_d } from "./modulos/delete.js";
import num from "./modulos/number.js"
import letras from "./modulos/strings.js"
import seleccion from "./modulos/seleccion.js"
import { val } from "./modulos/validar.js"
import { enviar } from "./modulos/enviar.js";
import vaciar from "./modulos/vaciar.js";
import { rellenar_emp } from "./modulos/rellenar_emp.js";
import { update } from "./modulos/update.js";

const tabla = document.querySelector('.emp_table')
const form = document.querySelector('.add__form')
const e_form = document.querySelector('.edit')
const button = document.querySelector(".card__mostrar")
const add_close = document.querySelector(".add__form > .close__btn")
const adde_close = document.querySelector(".edit > .close__btn")
const id = document.querySelector(".form__id")
const nombre = document.querySelector(".form__name")
const doc = document.querySelector(".form__documento")
const tel = document.querySelector(".form__telefono")
const sal = document.querySelector(".form__sal")
const lug = document.querySelector(".form__lugar")

const e_id = document.querySelector(".forme__id")
const e_nombre = document.querySelector(".forme__name")
const e_doc = document.querySelector(".forme__documento")
const e_tel = document.querySelector(".forme__telefono")
const e_sal = document.querySelector(".forme__sal")
const e_lug = document.querySelector(".forme__lugar")


const ruta = "Empleados"

addEventListener('DOMContentLoaded', (event) => {
    let mostrar = leer_emp().then((u) =>{
        listar_emp(u)
    })
})

e_id.addEventListener('keypress', (event) => {
    num(event, e_id);
})

e_id.addEventListener('keyup', (event) => {
    num(event, e_id);
})

e_id.addEventListener('blur', (event) => {
    num(event, e_id);
})

e_doc.addEventListener('keypress', (event) => {
    num(event, e_doc);
})

e_doc.addEventListener('keyup', (event) => {
    num(event, e_doc);
})

e_doc.addEventListener('blur', (event) => {
    num(event, e_doc);
})

e_tel.addEventListener('keypress', (event) => {
    num(event, e_tel);
})

e_tel.addEventListener('keyup', (event) => {
    num(event, e_tel);
})

e_tel.addEventListener('blur', (event) => {
    num(event, e_tel);
})

e_sal.addEventListener('keypress', (event) => {
    num(event, e_sal);
})

e_sal.addEventListener('keyup', (event) => {
    num(event, e_sal);
})

e_sal.addEventListener('blur', (event) => {
    num(event, e_sal);
})

e_nombre.addEventListener('keypress', (event) => {
    letras(event, e_nombre);
})

e_nombre.addEventListener('keyup', (event) => {
    letras(event, e_nombre);
})

e_nombre.addEventListener('blur', (event) => {
    letras(event, e_nombre);
})

lug.addEventListener("change", (event) => {
    seleccion(event, lug)
})

lug.addEventListener("blur", (event) => {
    seleccion(event, lug)
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

doc.addEventListener('keypress', (event) => {
    num(event, doc);
})

doc.addEventListener('keyup', (event) => {
    num(event, doc);
})

doc.addEventListener('blur', (event) => {
    num(event, doc);
})

tel.addEventListener('keypress', (event) => {
    num(event, tel);
})

tel.addEventListener('keyup', (event) => {
    num(event, tel);
})

tel.addEventListener('blur', (event) => {
    num(event, tel);
})

sal.addEventListener('keypress', (event) => {
    num(event, sal);
})

sal.addEventListener('keyup', (event) => {
    num(event, sal);
})

sal.addEventListener('blur', (event) => {
    num(event, sal);
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

lug.addEventListener("change", (event) => {
    seleccion(event, lug)
})

lug.addEventListener("blur", (event) => {
    seleccion(event, lug)
})

const ver = ((event) => {
    form.classList.add("vista__edit")
})

button.addEventListener('click', (event) => {
    form.classList.add("add__form")
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
    ver(event);
})

add_close.addEventListener("click", (event) => {
    form.classList.remove("vista__edit")
    let overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
})

adde_close.addEventListener("click", (event) => {
    e_form.classList.remove("vista__edit")
    let overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
})

e_form.addEventListener('submit', (event)=>{
    let validar = ".edit > [required]"
    if(val(validar)){
        console.log(val())
        const datos = {
            "id": e_id.value,
            "nombre": e_nombre.value,
            "documento": e_doc.value,
            "telefono": e_tel.value,
            "salario": e_sal.value,
            "lugar_t": e_lug.value
        }
        event.preventDefault();
        update(e_id.value, datos, ruta)
        let user = leer_emp().then((u) => {
            listar_emp(u);
        }) 
    }
    else{
        event.preventDefault();
        alert("NO es posible agregar, por favor digite todos los campos");
        
    }
    let user = leer_emp().then((u) => {
        listar_emp(u);
    })
})

form.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    let validar = ".add__form > [required]";
    
    // Verifica validación y existencia del producto
    const validado = val(validar);
    
    if (validado) {
        const datos = {
            "id": id.value,
            "nombre": nombre.value,
            "documento": doc.value,
            "telefono": tel.value,
            "salario": sal.value,
            "lugar_t": lug.value
        };
        enviar(datos, ruta); 
        let user = await leer_emp();
        listar_emp(user);
        vaciar(event);
    } else {
        alert("Producto ya existente o campos sin rellenar");
    }
    let user = await leer_emp();
    listar_emp(user);
});

tabla.addEventListener("click", (event) => {
    if(event.target.classList.contains("bx-trash")){
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let confirmacion = confirm(`¿Seguro que deseas eliminar el emp con id ${id}?`);
        if (confirmacion) {
            event.preventDefault();
            form_d(event, ruta, id)
            let user = leer_emp().then((u) => {
                listar_emp(u);
            })
        }
        else{
            event.preventDefault();
            alert("No se ha eliminado el producto");
        }
    }
    let user = leer_emp().then((u) => {
        listar_emp(u);
    })
})

tabla.addEventListener("click", (event) => {
    if(event.target.classList.contains("bx-edit-alt")){
        e_form.classList.add("vista__edit")
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block';
        rellenar_emp(id)
        let user = leer_emp().then((u) => {
            listar_emp(u);
        })
    }
})



sessionStorage.removeItem('adminVisited');