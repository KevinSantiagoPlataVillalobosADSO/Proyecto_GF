export const update_inv = (inv, id)=>{
    fetch(`http://localhost:3000/productos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            stock: inv,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    
    
}

export const update_bod = (inv, id)=>{
    fetch(`http://localhost:3000/Bodega/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            stock: inv,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json), alert(("stock añadido")));
}
