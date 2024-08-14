export default num;

function num (event, element){
    let numeros = /^[0-9+\s]$/
    if(numeros.test(event.key)){
        element.classList.remove("no_send")
        element.classList.add("sucess")    
    }
    else{
        if(element.value == ""){
            element.classList.remove("sucess")
            element.classList.add("no_send")
        }
        event.preventDefault();
    }
}