export const existe_P = async(id_p)=>{
    let p = await fetch(`http://localhost:3000/productos`)
    let data = await p.json();
    let existe = false;
    data.map((x)=>{
        if(id_p == x.id){
            console.log("existe")
            existe = true
        }
    })
    return existe  
};

export const existe_prov = async(id_p)=>{
    let p = await fetch(`http://localhost:3000/proveedores`)
    let data = await p.json();
    let existe = false;
    data.map((x)=>{
        if(id_p == x.id){
            console.log("existe")
            existe = true
        }
    })
    return existe  
};