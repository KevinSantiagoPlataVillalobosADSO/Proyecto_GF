import { sel, leer, leer_b } from "./modulos/leer.js"
import num from "./modulos/number.js"
import { val } from "./modulos/validar.js"
import { enviar } from "./modulos/enviar.js"
import vaciar from "./modulos/vaciar.js"
import listar_B from "./modulos/mostrar_bod.js"
import { rellenar_bd } from "./modulos/rellenar_bd.js"
import { existe_P } from "./modulos/existe__prod.js"
import { val_inv } from "./modulos/val_inv.js"
import { update_bod, update_inv } from "./modulos/update_inv.js"
import { traer_stock } from "./modulos/traer_stock.js"

const tabla = document.querySelector("table")
const button = document.querySelector(".card__mostrar")
const form = document.querySelector("form")
const back = document.querySelector("#a__back")
const select_cat = document.querySelector(".form__cat")
const select_prov = document.querySelector(".form__proveedor")
const id = document.querySelector(".form__id")
const nombre = document.querySelector(".form__name")
const stock = document.querySelector(".form__stock")

const form_b = document.querySelector(".edit__form")
const id_b = document.querySelector(".edit__id")
const nombre_b = document.querySelector(".edit__name")
const stock_b = document.querySelector(".edit__stock")
const fecha = document.querySelector(".edit__venc")
const s_cat = document.querySelector(".edit__cat")
const s_prov = document.querySelector(".edit__proveedor")
const price = document.querySelector(".edit__price")
const stockb = document.querySelector(".edit__stockb")


const precio = document.querySelector(".form__price") 
// const submit = document.querySelector(".form__submit")
const date = document.querySelector(".form__venc")
const edit = document.querySelector(".edit__form")
const add_close = document.querySelector(".add__form > .close__btn")
const edit_close = document.querySelector(".edit__form > .close__btn")
const contenedor_lista = document.querySelector(".contenedor__card")
let st_t = 0;

const ruta = "productos"

addEventListener("DOMContentLoaded", (event)=>{
    let prod = leer_b().then((d) => {
        listar_B(d);
    })
})

const ver = ((event) => {
    form.classList.add("vista__edit")
})

tabla.addEventListener("click", async (event) => {
    if(event.target.classList.contains("bxs-truck")){
        edit.classList.add("vista__edit")
        const row = event.target.closest("tr")
        let id = row.querySelector(".id").innerText;
        let overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block';
        rellenar_bd(id)

        st_t = await traer_stock(id); 

        const ruta = "productos"

        let user = leer_b().then((u) => {
            listar_B(u);
        })
    }
})

edit_close.addEventListener("click", (event) => {
    edit.classList.remove("vista__edit")
    let overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
})

form_b.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    let validar = ".edit__form > [required]";
    
    if(val(validar) && val_inv(stockb.value)){

        const new_st = parseInt(st_t) + parseInt(stockb.value);
        const new_bd = parseInt(stock_b.value) - parseInt(stockb.value);
        update_inv(new_st, id_b.value)
        update_bod(new_bd, id_b.value)

        let user = await leer_b(); 
        listar_B(user);
    }
    else{
        alert("EL stock es mayor a las existencias o no se digito");
    }
    let user = await leer_b(); 
        listar_B(user);
});

sessionStorage.removeItem('adminVisited');
