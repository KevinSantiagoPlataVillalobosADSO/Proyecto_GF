import { leer } from "./leer.js"
const tabla = document.querySelector(".lista__add > tbody");

export const buscar = async(x, cant) =>{
    const prod = await leer()
    const producto = prod.find(e => e.nombre == x)
    if(producto){
        let encontrado = false;    
        if(producto.stock < cant){
            alert("No es posible añadir, el stock es menor a lo pedido")
        }
        else{
            for (var i = 0; i < tabla.rows.length; i++) {
                let primeraCelda = tabla.rows[i].cells[0].innerHTML;
                if (primeraCelda === producto.id) {
                    encontrado = true;
                    // Obtén la celda que contiene la cantidad actual
                    let celdaCantidad = tabla.rows[i].cells[2];
                    // Extrae el número de gramos, eliminando "Gr"
                    let cantidadActual = parseFloat(celdaCantidad.textContent.replace("Gr", "").trim());
                    // Suma la cantidad nueva a la existente
                    let nuevaCantidad = cantidadActual + cant;
                    celdaCantidad.textContent = `${nuevaCantidad} Lb`;
                    // Actualiza el precio total en la fila
                    let celdaPrecio = tabla.rows[i].cells[3];
                    let nuevoPrecioTotal = producto.precio * nuevaCantidad;
                    celdaPrecio.textContent = nuevoPrecioTotal;
                    break;
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
        
                fila.classList.add(`${producto.id}`)
                celda1.textContent = producto.id
                celda2.textContent = producto.nombre
                celda3.textContent = `${cant}Lb`     
                
                celda4.textContent = prc_tp
        
                let btn_del = document.createElement('button')
                let i_del = document.createElement('i')
                i_del.classList.add("bx", "bx-trash", `${producto.id}`)
                btn_del.appendChild(i_del)
                btn_del.classList.add("btn_del")
                
                celda5.appendChild(btn_del)
        
                btn_del.addEventListener('click', ()=>{
                    tabla.removeChild(fila); 
                })
            }
        }
        
    }
    else{
        alert("No existe el producto")
    }
}