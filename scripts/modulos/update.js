export const update = ((id, datos, ruta)=>{
    fetch(`http://localhost:3000/${ruta}/${id}`, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
        alert("Actualizado correctamente");
    });
    let inputs = document.querySelectorAll("input")
    inputs.forEach(x => {
        x.classList.remove("sucess")
    })
}); 