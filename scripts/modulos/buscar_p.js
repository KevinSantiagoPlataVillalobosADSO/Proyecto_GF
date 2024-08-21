import { leer } from "./leer.js"
import { detal } from "./det_venta.js";

const tabla = document.querySelector(".lista__add > tbody");
const $total = document.querySelector('#ttl')
const $totalm = document.querySelector('#ttlm')
const recibidom = document.querySelector(".recibido__in")
const cambio_t = document.querySelector(".cambio_m")

let total = 0; // inicializa la variable

export const buscar = async(x, cant, c) =>{
    const prod = await leer()
    const producto = prod.find(e => e.nombre == x)
    let prc_ttl = 0;
    if(producto){
        let encontrado = false; 
        // console.log(producto.stock);
        // console.log(cant)
        if(parseInt(producto.stock) < c){
            alert("No es posible añadir, el stock es menor a lo pedido")
        }
        else{
            for (let i = 0; i < tabla.rows.length; i++) {
                prc_ttl += tabla.rows[i].cells[4]
                let primeraCelda = tabla.rows[i].cells[0].innerHTML;                
                if (primeraCelda === producto.id) {
                    
                    encontrado = true;
                    // Obtiene la celda que contiene la cantidad actual
                    let celdaCantidad = tabla.rows[i].cells[2];
                    // Extrae el numero de gramos eliminando "Gr"
                    let cantidadActual = parseFloat(celdaCantidad.textContent.replace("Lb", "").trim());
                    // Suma la cantidad nueva a la existente
                    let nuevaCantidad = cantidadActual + cant;
                    if(nuevaCantidad * 500 > producto.stock){
                        alert("no se puede añadir, el stock no es suficiente")
                    }
                    else{
                        celdaCantidad.textContent = `${nuevaCantidad} Lb`;
                        // Actualiza el precio total en la fila
                        let celdaPrecio = tabla.rows[i].cells[3];
                        let nuevoPrecioTotal = producto.precio * nuevaCantidad;
                        celdaPrecio.textContent = nuevoPrecioTotal.toFixed(2);
                        break;
                    }
                }
            }
            if (!encontrado) {
                // alert("Valor no encontrado");
                const prc_tp = producto.precio * cant;
                let fila = tabla.insertRow(); // Crea una nueva fila al final de la tabla
                let celda1 = fila.insertCell(0);
                let celda2 = fila.insertCell(1);
                let celda3 = fila.insertCell(2);
                let celda4 = fila.insertCell(3);
                let celda5 = fila.insertCell(4)
        
                fila.classList.add(`${producto.id}`, "new-row")
                celda1.textContent = producto.id
                celda2.textContent = producto.nombre
                celda3.textContent = `${cant}Lb`     
                
                celda4.textContent = prc_tp.toFixed(2)
        
                let btn_del = document.createElement('button')
                let i_del = document.createElement('i')
                i_del.classList.add("bx", "bx-trash", `${producto.id}`)
                btn_del.appendChild(i_del)
                btn_del.classList.add("btn_del")
                
                celda5.appendChild(btn_del)
        
                btn_del.addEventListener('click', ()=>{
                    fila.classList.remove("new-row")
                    fila.classList.add("remove-row")
                    tabla.removeChild(fila); 
                })
            }

            for (let i = 0; i < tabla.rows.length; i++) {
                let pr = tabla.rows[i].cells[3].innerText.trim(); 

                if (pr !== '') { 
                    let ttl = parseFloat(pr); 
                    

                    if (!isNaN(ttl)) { // verifica que el valor sea un numeor
                        total += ttl; // vuma el valor al total
                        $total.textContent = `Precio TOTAL: ${total}$`
                        $totalm.textContent = `TOTAL: ${total}$` 
                    }
                }
            } 
                    
        }
        
    }
    else{
        alert("No existe el producto")
    }
}

recibidom.addEventListener('keyup', ()=>{
    calc(recibidom.value)
})

const calc = (vuelto)=>{
    const cambio = vuelto - total
    cambio_t.textContent = `Cambio: ${cambio}`
}   