const listar_fact = (u) =>{
        let con = document.querySelector(".container")
        let fragment_l = document.createDocumentFragment();
        u.map((x)=>{
            const card = document.createElement('div')
            card.classList.add(`${x.id}`)
            const info_up = document.createElement('div')
            const id = document.createElement('h1')
            id.textContent = `Factura ID: ${x.id}`
            const fecha = document.createElement('h2')
            fecha.textContent = `Fecha: ${x.fecha_v}`
            info_up.appendChild(id)
            info_up.appendChild(fecha)
            
            // tabla
            const con_t = document.createElement('div')
            con_t.classList.add('tabla__container')

            const tabla = document.createElement('table')
            const the = document.createElement('thead')
            const th1 = document.createElement('th')
            th1.textContent = "ID"
            const th2 = document.createElement('th')
            th2.textContent = "Nombre"
            const th3 = document.createElement('th')
            th3.textContent = "Cantidad"
            const th4 = document.createElement('th')
            th4.textContent = "Precio"

            
            card.appendChild(info_up)
            fragment_l.appendChild(card)
            
            tabla.appendChild(the)
            the.appendChild(th1)
            the.appendChild(th2)
            the.appendChild(th3)
            the.appendChild(th4)

            
            const tbo = document.createElement('tbody')
            x.detal.forEach(element => {
                const tr = document.createElement('tr')
                const td1 = document.createElement('td')
                td1.textContent = element.id
                const td2 = document.createElement('td')
                td2.textContent = element.nombre
                const td3 = document.createElement('td')
                td3.textContent = element.cant
                const td4 = document.createElement('td')
                td4.textContent = element.precio
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tbo.appendChild(tr)
            });
            const ttl = document.createElement('h1')
            ttl.textContent = `Total: ${x.total}`

            const metodo = document.createElement('h1')
            metodo.classList.add("metodo")
            metodo.textContent = `Metodo: ${x.metodo}`
            
            tabla.appendChild(tbo)
            con_t.appendChild(tabla)
            card.appendChild(con_t)
            card.appendChild(metodo)
            card.appendChild(ttl)


        })
        con.appendChild(fragment_l)
    }

export default listar_fact