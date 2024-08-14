export const form_d = (event, id)=>{
    fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE',
    }).then((d) => {
        let user = leer().then((u) => {
            listar(u);
        })
    })
    
}