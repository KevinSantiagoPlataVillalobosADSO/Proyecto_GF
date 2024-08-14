export default letras

function letras(event, element) {
    let letras_r = /^[a-zA-Zá-ÿ\s]+$/
    if(letras_r.test(event.key)){
        element.classList.remove("no_send")
        element.classList.add("sucess")
        if(element.value == ""){
            element.classList.remove("sucess")
            element.classList.add("no_send")
        }
    }
    else{
        event.preventDefault();
    }
}