
import { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({id,name,price,category,img,stock,description})=>{

  //usamos para formatear la moneda
  const precio = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);

  

    return (
        <div className="contenedorDetail">
        <div className="contenedorDetail-img">
          <img src={img} ></img>
        </div>

        <div className="detail">
        <div className="contenedorDetail-info">
          <p className="contenedorDetail-title">{name}</p>
        </div>
        <div className="contenedorDetail-footer">
        <p className="contenedorDetail-desc">{description}</p>
          <span className="contenedorDetail-title">{precio}</span>
          <ItemCount id={id} name={name} price={price} img={img} stock={stock} initial={1}/>
        </div>
       
        </div>
      </div>
    )
}


export default ItemDetail;