let dom = document;
let user = dom.querySelector(".user")
let pass = dom.querySelector(".pass")
let form = dom.querySelector("form")
let icon = dom.querySelector("i")
let btn = dom.querySelector('.btn_cmp');      

const enter = (event)=>{
    let found = false;
    event.preventDefault();
    (async()=>{
    let response = await fetch("http://localhost:3000/admin")
    let admin = await response.json();
    console.log(admin)
    admin.map((x)=>{
        if(user.value === x.user && pass.value === x.passw){
            icon.classList.remove("bx-lock-alt")
            icon.classList.add("bx-lock-open-alt")
            found = true;
            setTimeout(() => {
                window.location.href = "admin.html"
            }, 1000);
        }
        })
    if(!found){
        form.reset();
        alert("Usuario o Contraseña Incorrectos")
    }

    })();
}

let text = (e, el)=>{
    if(e.type == "mouseover"){
        el.innerHTML = "<<<"
    }
    else{
        el.innerHTML = "Volver"
    }
}     
    
btn.addEventListener('mouseover', (event) => {
    text(event, btn)
})

btn.addEventListener('mouseout', (event) => {
    text(event, btn)
})

form.addEventListener('submit', enter)


