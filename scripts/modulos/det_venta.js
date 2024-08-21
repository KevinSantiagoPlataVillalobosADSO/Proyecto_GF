import { enviar } from "./enviar.js";
import { traer_stock } from "./traer_stock.js";
import { update_inv } from "./update_inv.js";

const tabla = document.querySelector('.lista__add > tbody');
const filas = tabla.getElementsByTagName('tr');
const datos_A = [];
const ahora = new Date();
const ruta = "venta"
let total = 0;
const $total = document.querySelector('#ttl')

export const detal = async()=>{
    if(tabla.rows.length === 0){
        alert("NO se puede enviar una venta vacia")
        $total.textContent = `Precio TOTAL: 0$`
    }
    else{
        for (let i = 0; i < filas.length; i++) {
            let pr = tabla.rows[i].cells[3].innerText.trim(); 
            if (pr !== '') { 
                let ttl = parseFloat(pr); 
                if (!isNaN(ttl)) { // Verifica que el valor sea un número
                    total += ttl; // Suma el valor al total
                }
            }
            const celdas = filas[i].getElementsByTagName('td');
            const obj = {
                id: celdas[0].innerText,
                nombre: celdas[1].innerText,
                cant: celdas[2].innerText,
                precio: celdas[3].innerText
            };
            datos_A.push(obj);
            const st_b = await traer_stock(celdas[0].innerText)
            let celdaCantidad = celdas[2];
            // Extrae el numero de gramos eliminando "Gr"
            let cantidadActual = parseFloat(celdaCantidad.textContent.replace("Lb", "").trim());
            // Suma la cantidad nueva a la existente
            let nuevaCantidad =  st_b - cantidadActual*500;
            console.log(nuevaCantidad);
            
            const new_bd = nuevaCantidad;
            
            update_inv(new_bd, celdas[0].innerText)
        }
        const datos = {
            fecha_v: ahora.toLocaleDateString(),
            detal: datos_A,
            total: total
        }
        enviar(datos, ruta)
    }

}
