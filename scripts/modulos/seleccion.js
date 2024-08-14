export default seleccion

function seleccion(event, element){
    if(element.value == "Seleccionar"){
        element.classList.remove("sucess")
        element.classList.add("no_send")
    }
    else{
        element.classList.remove("no_send")
        element.classList.add("sucess")
    }
}