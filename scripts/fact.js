import { leer_fact } from "./modulos/leer.js";
import listar_fact from "./modulos/mostrar_fact.js";

addEventListener('DOMContentLoaded', (event)=>{
    let facts = leer_fact().then((u)=>{
        listar_fact(u)
    })
})

sessionStorage.removeItem('adminVisited');
