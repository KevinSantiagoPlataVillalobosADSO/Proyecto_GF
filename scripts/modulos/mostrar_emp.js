const listar_emp = (u) =>{
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

            let columna_d = document.createElement('td')
            columna_d.innerText = x.documento

            let columna_tel = document.createElement('td')
            columna_tel.innerText = x.telefono

            let columna_sal = document.createElement('td')
            columna_sal.innerText = x.salario

            let columna_lugar = document.createElement('td')
            columna_lugar.innerText = x.lugar_t

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
            fila.appendChild(columna_d)
            fila.appendChild(columna_n)
            fila.appendChild(columna_tel)
            fila.appendChild(columna_sal)
            fila.appendChild(columna_lugar)
            fila.appendChild(columna_edit)


            fragment_l.appendChild(fila)
        })

        tbody.appendChild(fragment_l)
}

export default listar_emp