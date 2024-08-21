export const traer_stock = async(i)=>{
    let response = await fetch(`http://localhost:3000/productos/${i}`)
    let data = await response.json();
    const stock_t = data.stock
    return stock_t;
}

