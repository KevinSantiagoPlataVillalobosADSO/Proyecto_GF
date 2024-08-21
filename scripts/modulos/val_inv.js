export function val_inv(inv){
    let inpus_r = document.querySelector(".edit__stock")
    let pasar = true
    console.log(inv);
    console.log(inpus_r.value);
    if(inpus_r.value < inv){
        pasar = false
    }    
    console.log(pasar);
    
    return pasar
}