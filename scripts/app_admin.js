import form_v from "./modulos/añadir_prod.js"
import {val} from "./modulos/validar.js"
import { leer } from "./modulos/leer.js"
import listar from "./modulos/mostrar_tabla.js"

let form = document.querySelector("form")
let id = document.querySelector(".id__producto")
let nombre = document.querySelector(".nombre__producto")
let stock = document.querySelector(".stock__producto")
let precio = document.querySelector(".precio__producto")
let date = document.querySelector(".date__producto")

document.getElementById("menuToggle").addEventListener("click", function() {
    this.classList.toggle("toggle");
    document.getElementById("navLinks").classList.toggle("show");
});

