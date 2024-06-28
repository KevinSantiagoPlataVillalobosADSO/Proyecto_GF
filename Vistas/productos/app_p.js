import {data} from "../productos/datos.js";

let dom = document;
let $padre = dom.querySelector(".container");
let $cards = dom.querySelector(".cards");
let fragment = dom.createDocumentFragment();

data.map((x) => {
    let card = dom.createElement("div")
    card.classList.add("card")
        let img = dom.createElement("img")
        img.setAttribute("src", x.src)
        card.appendChild(img)

        let card_inf = dom.createElement("div")
        card_inf.classList.add("card__info")
            let card_par = dom.createElement("div")
            card_par.classList.add("info_paragraph")
                for (let i = 0; i < 3; i++) {
                    let p = dom.createElement("p")
                    if (i == 0) {
                        p.classList.add("card__name");
                        p.textContent = `Nombre: ${x.nombre}`;
                    }
                    else if (i == 1) {
                        p.classList.add("card__price");
                        p.textContent = `Precio: ${x.precio}`;
                    }
                    else if (i == 2) {
                        p.classList.add("card__stock");
                        p.textContent = `Stock: ${x.stock}`;
                    }
                    card_par.appendChild(p)
                }
            card_inf.appendChild(card_par)
        card.appendChild(card_inf)

        let card_pls = dom.createElement("div")
        card_pls.classList.add("card__plus")
            let p2 = dom.createElement("p")
            p2.classList.add("plus__info")
            p2.textContent = x.info_add
        card_pls.appendChild(p2)
    card_inf.appendChild(card_pls)
    fragment.appendChild(card)
})

$cards.appendChild(fragment)