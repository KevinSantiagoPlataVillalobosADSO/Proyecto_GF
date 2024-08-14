export default ema_il;

// const ema_il = (event, element) => {
//     let email = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
//     if(email.test(element.value)){
//         element.classList.remove("no_send")
//         element.classList.add("sucess")
//         if(element.value == ""){
//             element.classList.remove("sucess")
//             element.classList.add("no_send")
//         }
//     }
//     else{
//         element.classList.remove("sucess")
//         element.classList.add("no_send")
//     }
// };

function ema_il (event, element){
    let email = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    if(email.test(element.value)){
        element.classList.remove("no_send")
        element.classList.add("sucess")
        if(element.value == ""){
            element.classList.remove("sucess")
            element.classList.add("no_send")
        }
    }
    else{
        element.classList.remove("sucess")
        element.classList.add("no_send")
    }
}