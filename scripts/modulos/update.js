export const update = ((id, datos)=>{
    fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
        let user = leer().then((u) => {
            listar(u);
        })
    });
    let inputs = document.querySelectorAll("input")
    inputs.forEach(x => {
        x.classList.remove("sucess")
    })
}); 