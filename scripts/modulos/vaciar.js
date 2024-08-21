export default vaciar

function vaciar(event){
    event.preventDefault();
    let vacio = document.querySelectorAll("form > [required]")
    vacio.forEach((x) => {
        if(x.classList.contains('sel')){
            x.value = "Seleccionar"
            x.classList.remove("sucess")
            x.classList.remove("no_send")
        }
        else{
            x.value = "";
            x.classList.remove("sucess")
            x.classList.remove("no_send")
        }
    })
}
