let dom = document;
let user = dom.querySelector(".user")
let pass = dom.querySelector(".pass")
let form = dom.querySelector("form")

const enter = (event)=>{
    let found = false;
    event.preventDefault();
    (async()=>{
    let response = await fetch("http://localhost:3000/admin")
    let admin = await response.json();
    console.log(admin)
    admin.map((x)=>{
        if(user.value === x.user && pass.value === x.passw){
            found = true;
            console.log("encontrado")
            location.href = "admin.html"
        }
        })
    if(!found){
        form.reset();
        alert("Usuario o Contraseña Incorrectos")
    }

    })();
}

form.addEventListener('submit', enter)


