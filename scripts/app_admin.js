// import form_v from "./modulos/añadir_prod.js"
// import {val} from "./modulos/validar.js"
// import { leer } from "./modulos/leer.js"
// import listar from "./modulos/mostrar_tabla.js"

let form = document.querySelector("form")
let id = document.querySelector(".id__producto")
let nombre = document.querySelector(".nombre__producto")
let stock = document.querySelector(".stock__producto")
let precio = document.querySelector(".precio__producto")
let date = document.querySelector(".date__producto")
let name = document.querySelector(".name__container")

window.addEventListener('DOMContentLoaded', (event) => {
    // Verificar si el usuario ha visitado la vista de admin
    if (sessionStorage.getItem('adminVisited')) {
        // Redirigir a otra página si el usuario ya ha visitado la vista de admin
        window.location.href = 'Login.html';
    } else {
        // Establecer un indicador de que se ha visitado la vista de admin
        sessionStorage.setItem('adminVisited', 'true');
    }

    // Evitar el retroceso
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
        history.go(1);
    };
});

document.getElementById("menuToggle").addEventListener("click", function() {
    this.classList.toggle("toggle");
    document.getElementById("navLinks").classList.toggle("show");
});
