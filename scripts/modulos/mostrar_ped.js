const listar_ped = (u) =>{
        let tbody = document.querySelector(".pedido__tabla > tbody")

        let fragment_l = document.createDocumentFragment();
        let fila = document.querySelectorAll(".fila__ped")
        
        fila.forEach((z) => {
            z.remove();
        })
        u.map((x)=>{
            let fila = document.createElement('tr')
            fila.classList.add("fila__ped")
            fila.setAttribute("id", x.id)

            let columna_ID = document.createElement('td')
            columna_ID.innerText = x.id
            columna_ID.classList.add("id")

            let columna_n = document.createElement('td')
            columna_n.innerText = x.id_prod
            columna_n.classList.add("ip")

            let columna_s = document.createElement('td')
            columna_s.innerText = x.estado

            let columna_cant = document.createElement('td')
            columna_cant.innerText = x.cantidad
            columna_cant.classList.add("cnt")

            let columna_edit = document.createElement('td')

            let btn_edit = document.createElement('button')

            let i_edit = document.createElement('i')
            i_edit.classList.add("bx", "bx-check")
            btn_edit.appendChild(i_edit)
            btn_edit.classList.add("btn_check")

            let btn_del = document.createElement('button')

            let i_del = document.createElement('i')
            i_del.classList.add("bx", "bx-trash", "enable")
            btn_del.appendChild(i_del)

            if(x.estado == "Enviado"){
                btn_del.classList.add("btn__disable", "pedido__del")
                i_del.classList.remove("enable")
            }
            else{
                btn_del.classList.add("btn_del", "pedido__del")
            }

            columna_edit.append(btn_edit)
            columna_edit.append(btn_del)

            fila.appendChild(columna_ID)
            fila.appendChild(columna_n)
            fila.appendChild(columna_cant)
            fila.appendChild(columna_s)
            fila.appendChild(columna_edit)


            fragment_l.appendChild(fila)
        })

        tbody.appendChild(fragment_l)
}

export default listar_ped