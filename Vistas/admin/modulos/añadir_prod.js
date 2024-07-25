const form_v = (event) =>{
    if(vacio()){
               
    }
    else{
        console.log(event)
        const datos = {
            "nombre": nombre.value,
            "apellido": last.value,
            "documento": doc.value,
            "tipo_doc": tipo_d.value,
            "correo": mail.value,
            "direccion": direccion.value
        }
        fetch('http://localhost:3000/users', {
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
}