export default form_v


function form_v (event, datos){ 
    console.log(event)
    fetch('http://localhost:3000/productos', {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => alert("Registrado con exito", console.log(json)))
      .catch(err => {
        console.log("error", err)
        alert("No se registro")
      });
    
    form.reset()
    btn.setAttribute("disabled", "true")
    let inputs = document.querySelectorAll("input")
    inputs.forEach(x => {
        x.classList.remove("sucess")
    })
}