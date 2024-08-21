import { leer_prov, leer_ped } from "./modulos/leer.js";
import listar_prov from "./modulos/mostrar_prov.js";
import listar_ped from "./modulos/mostrar_ped.js";
import vaciar from "./modulos/vaciar.js";
import letras from "./modulos/strings.js";
import num from "./modulos/number.js";
import { enviar } from "./modulos/enviar.js";
import { val } from "./modulos/validar.js";
import { existe_P, existe_prov } from "./modulos/existe__prod.js";
import { update } from "./modulos/update.js";
import { form_d } from "./modulos/delete.js";
import { rellenar_prov } from "./modulos/rellenar_prov.js";

const add_close = document.querySelector(".add__form > .close__btn")
const p_submit = document.querySelector('.pedido__submit')
const form_ped = document.querySelector('.pedido__form')
const form_p = document.querySelector('.add__form')
const edit = document.querySelector('.edit__form')
const add_p = document.querySelector('.Proveedor__add')
const id_prov = document.querySelector('.form__id')
const nom_prov = document.querySelector('.form__name')
const tel_prov = document.querySelector('.form__telefono')
const cant = document.querySelector('.cant__prod')
const id_prod = document.querySelector('.id__prod')
const tabla_p = document.querySelector('.pedido__tabla')
const tabla_prov = document.querySelector('.tabla__proveedores')
const edit_close = document.querySelector(".close__edit")
const id_edit= document.querySelector('.edit__id')
const nom_edit = document.querySelector('.edit__name')
const tel_edit = document.querySelector('.edit__telefono')
const ruta = "Pedido"

addEventListener("DOMContentLoaded", (event)=>{
    const response = leer_prov().then((u)=>{
        listar_prov(u);
    })
})

addEventListener("DOMContentLoaded", (event)=>{
    const response = leer_ped().then((u)=>{
        listar_ped(u);
    })
})

id_prov.addEventListener('keypress', (event) => {
    num(event, id_prov);
})

id_prov.addEventListener('keyup', (event) => {
    num(event, id_prov);
})

id_prov.addEventListener('blur', (event) => {
    num(event, id_prov);
})

tel_prov.addEventListener('keypress', (event) => {
    num(event, tel_prov);
})

tel_prov.addEventListener('keyup', (event) => {
    num(event, tel_prov);
})

tel_prov.addEventListener('blur', (event) => {
    num(event, tel_prov);
})

nom_prov.addEventListener('keypress', (event) => {
    letras(event, nom_prov);
})

nom_prov.addEventListener('keyup', (event) => {
    letras(event, nom_prov);
})

nom_prov.addEventListener('blur', (event) => {
    letras(event, nom_prov);
})

id_prod.addEventListener('keypress', (event) => {
    num(event, id_prod);
})

id_prod.addEventListener('keyup', (event) => {
    num(event, id_prod);
})

id_prod.addEventListener('blur', (event) => {
    num(event, id_prod);
})

cant.addEventListener('keypress', (event) => {
    num(event, cant);
})

cant.addEventListener('keyup', (event) => {
    num(event, cant);
})

cant.addEventListener('blur', (event) => {
    num(event, cant);
})


add_p.addEventListener('click', (event) => {
    form_p.classList.add("vista__form")
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
})

add_close.addEventListener("click", (event) => {
    form_p.classList.remove("vista__form")
    let overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
    vaciar(event)
    
})

form_ped.addEventListener('submit', async (event) => {
    event.preventDefault();
    let validar = ".pedido__form > [required]"
    if(val(validar) && await existe_P(id_prod.value)){
        
        const datos = {
            "id_prod": id_prod.value,
            "estado": "Enviado",
            "cantidad": cant.value
        }
        console.log(datos);
        
        enviar(datos, ruta)
        vaciar(event)
        let res = leer_ped().then((u)=>{
            listar_ped(u);
        })
    }
    else{
        event.preventDefault();
        alert("NO es posible agregar ingrese un producto existente");
    }
    let res = leer_ped().then((u)=>{
        listar_ped(u);
    })
})

form_p.addEventListener('submit', async (event) => {
    event.preventDefault();

    const ruta = "proveedores";
    let validar = ".add__form > [required]";

    // const validado = val(validar)
    // const existe = existe_prov(id)
    
    // Verifica validación y existencia del proveedor
    if (val(validar) && !await existe_prov(id_prov.value)) {
        const datos = {
            "id": id_prov.value,
            "nom": nom_prov.value,
            "tel": tel_prov.value
        };
        console.log(datos);
        
        enviar(datos, ruta);
        vaciar(event); 
        
        let res = await leer_prov();
        listar_prov(res);
    } else {
        vaciar(event); 
        alert("NO es posible agregar un proveedor existente o datos sin información");
    }
});

tabla_p.addEventListener("click", (event) => {
    const ruta = "Pedido"
    if(event.target.classList.contains("bx-check")){
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let ip = row.querySelector(".ip").innerText;
        let cnt = row.querySelector(".cnt").innerText;
        let recibido = confirm("Desea marcar como recibido (no se podra deshacer)")
        if(recibido){
            const datos = {
                "id_prod": `${ip}`,
                "estado": "Recibido",
                "cantidad": `${cnt}`
            }
            console.log(datos);
            
            update(id, datos, ruta)
            alert("Marcado como recibido")
        }
        else{
            alert("no se marco como recibido")
        }
        console.log(id);
        let user = leer_ped().then((u) => {
            listar_ped(u);
        })
    }
})

tabla_p.addEventListener("click", (event) => {
    const ruta = "Pedido"
    if(event.target.classList.contains("enable")){
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let confirmacion = confirm(`¿Seguro que deseas eliminar el producto con id ${id}?`);
        if (confirmacion) {
            event.preventDefault();
            form_d(event, ruta, id)
            let user = leer_ped().then((u) => {
                listar_ped(u);
            })
        }
        else{
            event.preventDefault();
            alert("No se ha eliminado el producto");
        }
    }
    let user = leer_ped().then((u) => {
        listar_ped(u);
    })
})

tabla_prov.addEventListener("click", (event) => {
    const ruta = "proveedores"
    if(event.target.classList.contains("bx-trash")){
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let confirmacion = confirm(`¿Seguro que deseas eliminar el producto con id ${id}?`);
        if (confirmacion) {
            event.preventDefault();
            form_d(event, ruta, id)
            let user = leer_prov().then((u) => {
                listar_prov(u);
            })
        }
        else{
            event.preventDefault();
            alert("No se ha eliminado el producto");
        }
    }
    let user = leer_prov().then((u) => {
        listar_prov(u);
    })
})

tabla_prov.addEventListener("click", (event) => {
    if(event.target.classList.contains("bx-edit-alt")){
        edit.classList.add("vista__form")
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block';
        rellenar_prov(id)
        let user = leer_prov().then((u) => {
            listar_prov(u);
        })
    }
})

edit_close.addEventListener("click", (event) => {
    edit.classList.remove("vista__form")
    let overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
    vaciar(event)
    
})

id_edit.addEventListener('keypress', (event) => {
    num(event, id_edit);
})

id_edit.addEventListener('keyup', (event) => {
    num(event, id_edit);
})

id_edit.addEventListener('blur', (event) => {
    num(event, id_edit);
})

tel_edit.addEventListener('keypress', (event) => {
    num(event, tel_edit);
})

tel_edit.addEventListener('keyup', (event) => {
    num(event, tel_edit);
})

tel_edit.addEventListener('blur', (event) => {
    num(event, tel_edit);
})

nom_edit.addEventListener('keypress', (event) => {
    letras(event, nom_edit);
})

nom_edit.addEventListener('keyup', (event) => {
    letras(event, nom_edit);
})

nom_edit.addEventListener('blur', (event) => {
    letras(event, nom_edit);
})

edit.addEventListener("submit", (event) => {
    const ruta = "proveedores"
    let validar = ".edit__form > [required]"
    if(val(validar)){
        console.log(val())
        const datos = {
            "id": id_edit.value,
            "nom": nom_edit.value,
            "tel": tel_edit.value
        }
        event.preventDefault();
        update(id_edit.value, datos, ruta)
        let user = leer_prov().then((u) => {
            listar_prov(u);
        }) 
    }
    else{
        event.preventDefault();
        alert("NO es posible agregar, por favor digite todos los campos");
        
    }
    let user = leer_prov().then((u) => {
        listar_prov(u);
    })
})

sessionStorage.removeItem('adminVisited');