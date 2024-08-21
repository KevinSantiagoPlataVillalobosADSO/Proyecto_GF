const listar_prov = (u) =>{
        let tbody = document.querySelector(".tabla__proveedores > tbody")

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
            columna_n.innerText = x.nom

            let columna_s = document.createElement('td')
            columna_s.innerText = x.tel

            let columna_edit = document.createElement('td')
            let btn_edit = document.createElement('button')
            let i_edit = document.createElement('i')
            i_edit.classList.add("bx", "bx-edit-alt")
            btn_edit.appendChild(i_edit)
            btn_edit.classList.add("btn_edit")

            let btn_del = document.createElement('button')
            let i_del = document.createElement('i')
            i_del.classList.add("bx", "bx-trash")
            btn_del.appendChild(i_del)
            btn_del.classList.add("btn_del")

            columna_edit.append(btn_edit)
            columna_edit.append(btn_del)

            fila.appendChild(columna_ID)
            fila.appendChild(columna_n)
            fila.appendChild(columna_s)
            fila.appendChild(columna_edit)


            fragment_l.appendChild(fila)
        })

        tbody.appendChild(fragment_l)
}

export default listar_prov