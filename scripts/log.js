import { val } from "./modulos/validar.js";

let dom = document;
let user = dom.querySelector(".user")
let pass = dom.querySelector(".pass")
let formd = dom.querySelector("form")
let icon = dom.querySelector("i")
let btn = dom.querySelector('.btn_cmp');      


export const enter = async (event) => {
    event.preventDefault();
    let response = await fetch("http://localhost:3000/admin");
    let admin = await response.json();
    let validar = "form > [required]";
    let found = false;
    admin.forEach((x) => {
        if (user.value === x.user && pass.value === x.passw && val(validar)) {
            icon.classList.remove("bx-lock-alt");
            icon.classList.add("bx-lock-open-alt");
            found = true;
            setTimeout(() => {
                window.location.href = "admin.html";
            }, 1000);
        }
        sessionStorage.removeItem('adminVisited');
    });

    if (val(validar)) {
        if (!found) {
            alert("Usuario o Contraseña Incorrectos");
            pass.value = "";
        }
    } else {
        alert("Por favor rellene todos los campos");
    }
};

formd.addEventListener('submit', enter)



