
let inpus_r = document.querySelectorAll(".form__prod > input[required]")

export function val(){
    let pasar = true
    console.log(inpus_r)
    inpus_r.forEach((x) => {
        if(x.value == "" || x.classList.contains("no_send")){
            pasar = false
        }
    })
    if(pasar == true){
        return true
    }
}