const listar_B = (u) =>{
    let tbody = document.querySelector("tbody")

    let fragment_l = document.createDocumentFragment();
    let fila = document.querySelectorAll(".fila")
    fila.forEach((z) => {
        z.remove();
    })
    u.map((x)=>{
        let fila = document.createElement('tr')
        fila.classList.add("fila")
        fila.setAttribute("id", x.id)

        let columna_ID = document.createElement('td')
        columna_ID.innerText = x.id
        columna_ID.classList.add("id")

        let columna_n = document.createElement('td')
        columna_n.innerText = x.nombre

        let columna_s = document.createElement('td')
        columna_s.innerText = x.stock

        let columna_p = document.createElement('td')
        columna_p.innerText = x.precio

        let columna_c = document.createElement('td')
        columna_c.innerText = x.Categoria

        let columna_prov = document.createElement('td')
        columna_prov.innerText = x.proveedor
        
        let columna_venc = document.createElement('td')
        columna_venc.innerText = x.info_add

        let columna_edit = document.createElement('td')
        let btn_edit = document.createElement('button')
        let i_edit = document.createElement('i')
        i_edit.classList.add("bx", "bxs-truck")
        btn_edit.appendChild(i_edit)
        btn_edit.classList.add("btn_edit")

        columna_edit.append(btn_edit)

        fila.appendChild(columna_ID)
        fila.appendChild(columna_n)
        fila.appendChild(columna_s)
        fila.appendChild(columna_p)
        fila.appendChild(columna_c)
        fila.appendChild(columna_prov)
        fila.appendChild(columna_venc)
        fila.appendChild(columna_edit)


        fragment_l.appendChild(fila)
    })

    tbody.appendChild(fragment_l)
}

export default listar_B