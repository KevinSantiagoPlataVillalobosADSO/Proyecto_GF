import { filtro } from "./modulos/filtros.js";
const dom = document;
const frutas = document.querySelector('.fruta');
const verdura = document.querySelector('.verdura');
const enlatado = document.querySelector('.enlatado');
const grano = document.querySelector('.grano');
const varios = document.querySelector('.varios');
const $cards = dom.querySelector(".cards");
const card = dom.querySelectorAll('.card')

const mostrar = async()=> {
    try {
        let response = await fetch("http://localhost:3000/productos");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let datos = await response.json();
        console.log(datos);
        let fragment = dom.createDocumentFragment();

        card.forEach((x) => {
            $cards.removeChild(x)
        })

        datos.forEach((x) => {
            let card = dom.createElement("div");
            card.classList.add("card");

            let img = dom.createElement("img");
            img.setAttribute("src", x.src);
            card.appendChild(img);

            let card_inf = dom.createElement("div");
            card_inf.classList.add("card__info");

            let card_par = dom.createElement("div");
            card_par.classList.add("info_paragraph");

            let p1 = dom.createElement("p");
            p1.classList.add("card__name");
            p1.textContent = `Nombre: ${x.nombre}`;
            card_par.appendChild(p1);

            let p2 = dom.createElement("p");
            p2.classList.add("card__price");
            p2.textContent = `Precio: ${x.precio}`;
            card_par.appendChild(p2);

            let p3 = dom.createElement("p");
            p3.classList.add("card__stock");
            p3.textContent = `Stock: ${x.stock}`;
            card_par.appendChild(p3);

            card_inf.appendChild(card_par);

            let card_pls = dom.createElement("div");
            card_pls.classList.add("card__plus");

            let p4 = dom.createElement("p");
            p4.classList.add("plus__info");
            p4.textContent = x.info_add;
            card_pls.appendChild(p4);

            card_inf.appendChild(card_pls);
            card.appendChild(card_inf);
            fragment.appendChild(card);
        });

        $cards.appendChild(fragment);
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
mostrar();

document.getElementById("menuToggle").addEventListener("click", function() {
    this.classList.toggle("toggle");
    document.getElementById("navLinks").classList.toggle("show");
});

frutas.addEventListener('click', async(event)=>{
    const cat = "Frutas"
    await filtro(cat)
})

verdura.addEventListener('click', async(event)=>{
    const cat = "Verduras"
    await filtro(cat)
})

grano.addEventListener('click', async(event)=>{
    const cat = "Granos"
    await filtro(cat)
})

enlatado.addEventListener('click', async(event)=>{
    const cat = "Enlatados"
    await filtro(cat)
})

varios.addEventListener('click', async(event)=>{
    mostrar();
})
