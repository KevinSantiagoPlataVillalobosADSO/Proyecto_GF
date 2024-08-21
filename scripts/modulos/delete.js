export const form_d = (event, ruta, id)=>{
    fetch(`http://localhost:3000/${ruta}/${id}`, {
        method: 'DELETE',
    }).then((d) => {
        console.log(d);
    })
    
}