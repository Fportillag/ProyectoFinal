import { Link } from "react-router-dom";

const Item = ({ id, name, price, img, stock }) => {
  const precio = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} ></img>
      </div>
      <div className="card-info">
        <p className="text-title">{name}</p>
      </div>
      <div className="card-footer">
        <span className="text-title">{precio}</span>
        <Link to={`/item/${id}`} className="detalle" >Detalle Producto</Link>
      </div>
      
      
    </div>
  );
};

export default Item;
