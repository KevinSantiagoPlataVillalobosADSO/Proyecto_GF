export function val(validar){
    let inpus_r = document.querySelectorAll(validar)
    let pasar = true
    console.log(inpus_r)
    inpus_r.forEach((x) => {
        if(x.value == "" || x.classList.contains("no_send")){
            pasar = false
        }
    })
    return pasar
}