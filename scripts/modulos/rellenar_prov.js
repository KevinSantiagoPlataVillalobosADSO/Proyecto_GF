import { leer_prov } from "./leer.js"
import { val } from "./validar.js"
import { update } from "./update.js"

const id_edit= document.querySelector('.edit__id')
const nom_edit = document.querySelector('.edit__name')
const tel_edit = document.querySelector('.edit__telefono')

export const rellenar_prov = async(i)=>{
    let response = await fetch(`http://localhost:3000/proveedores/${i}`)
    let data = await response.json();
    id_edit.value = data.id
    nom_edit.value = data.nom
    tel_edit.value = data.tel
}


