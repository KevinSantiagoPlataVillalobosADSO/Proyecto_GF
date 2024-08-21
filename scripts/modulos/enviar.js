export const enviar = ((datos, ruta)=>{
    fetch(`http://localhost:3000/${ruta}`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
        alert("Añadido con exito");
    });
    let inputs = document.querySelectorAll("input")
    inputs.forEach(x => {
        x.classList.remove("sucess")
    })
});