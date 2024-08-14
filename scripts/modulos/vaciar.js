export default vaciar

function vaciar(event){
    event.preventDefault();
    let vacio = document.querySelectorAll("form > [required]")
    vacio.forEach((x) => {
        if(x.classList.contains("select__cat") || x.classList.contains("select__prov")){
            x.value = "Seleccionar"
            x.classList.remove("sucess")
        }
        else{
            x.value = "";
            x.classList.remove("sucess")
        }
    })
}
