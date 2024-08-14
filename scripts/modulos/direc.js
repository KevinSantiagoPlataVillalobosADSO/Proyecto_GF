export default direc;

// let direc = (event, element)=>{
//     if(element.value == ""){
//         element.classList.remove("sucess")
//         element.classList.add("no_send")
//     }
//     else{
//         element.classList.remove("no_send")
//         element.classList.add("sucess")
//     }
// }

function direc(event, element){
    if(element.value == ""){
        element.classList.remove("sucess")
        element.classList.add("no_send")
    }
    else{
        element.classList.remove("no_send")
        element.classList.add("sucess")
    }
}