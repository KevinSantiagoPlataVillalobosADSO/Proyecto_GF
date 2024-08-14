export async function leer(){
    let response  = await fetch('http://localhost:3000/productos');
    let datos = await response.json();
    return datos;
}

export const sel = async(link)=>{
    let response = await fetch(`http://localhost:3000/${link}`)
    let data = await response.json();
    return data
    
}