export const filtro = async (filtro) => {
    try {
        let response = await fetch("http://localhost:3000/productos");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let datos = await response.json();
        console.log(datos);

        let dom = document;
        let $cards = dom.querySelector(".cards");
        let fragment = dom.createDocumentFragment();
        let card = dom.querySelectorAll('.card')
        card.forEach((x) => {
            $cards.removeChild(x)
        })
        datos.forEach((x) => {
            console.log(filtro);
            if (x.Categoria == filtro) {
                console.log(filtro);
                
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
            }
        });

        $cards.appendChild(fragment);
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
};

