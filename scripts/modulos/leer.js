export async function leer(){
    let response  = await fetch('http://localhost:3000/productos');
    let datos = await response.json();
    return datos;
}

export async function leer_b(){
    let response  = await fetch('http://localhost:3000/Bodega');
    let datos = await response.json();
    return datos;
}

export const sel = async(link)=>{
    let response = await fetch(`http://localhost:3000/${link}`)
    let data = await response.json();
    return data
    
}

export async function leer_prov(){
    let response  = await fetch('http://localhost:3000/proveedores');
    let datos = await response.json();
    return datos;
}

export async function leer_ped(){
    let response  = await fetch('http://localhost:3000/Pedido');
    let datos = await response.json();
    return datos;
}

export async function leer_emp(){
    let response  = await fetch('http://localhost:3000/Empleados');
    let datos = await response.json();
    return datos;
}

export async function leer_fact(){
    let response  = await fetch('http://localhost:3000/venta');
    let datos = await response.json();
    return datos;
}