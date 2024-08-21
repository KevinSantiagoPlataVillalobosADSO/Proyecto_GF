import { leer_emp } from "./leer.js"
import { val } from "./validar.js"

const e_id = document.querySelector(".forme__id")
const e_nombre = document.querySelector(".forme__name")
const e_doc = document.querySelector(".forme__documento")
const e_tel = document.querySelector(".forme__telefono")
const e_sal = document.querySelector(".forme__sal")
const e_lug = document.querySelector(".forme__lugar")


export const rellenar_emp = async(i)=>{
    let response = await fetch(`http://localhost:3000/Empleados/${i}`)
    let data = await response.json();
    e_id.value = data.id
    e_nombre.value = data.nombre
    e_doc.value = data.documento
    e_tel.value = data.telefono
    e_sal.value = data.salario
    e_lug.value = data.lugar_t
}


