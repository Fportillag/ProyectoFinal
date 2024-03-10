import { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { CartContext } from "../Context/CartContext";
import TrashWidget from "../TrashWidget/TrashWidget";
import {  Link  } from 'react-router-dom';
const ListProducts = ({ products }) => {
  console.log("listproducts", products);

  const { addToCart, removeItem, setTotal } = useContext(CartContext);
  const [cantProducts, setCantProducts] = useState(0);
  let total = 0;
  useEffect(() => {
    console.log("cant", cantProducts);
  }, [cantProducts]);
  function incrementar(product) {
    const name = product.name;
    const id = product.id;
    const price = product.price;
    const img = product.img;
    const item = {
      id,
      name,
      price,
      img,
    };
    addToCart(item, 1);
  }

  function decrementar(product) {
    const name = product.name;
    const id = product.id;
    const price = product.price;
    const img = product.img;
    const item = {
      id,
      name,
      price,
      img,
    };
    if (product.cantidad > 0) {
      addToCart(item, -1);
    }
  }

  return (
    <>
      <Table striped bordered hover style={{ verticalAlign: "middle" }}>
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            //aca van los productos, recorrer .map()
            products.map((prod) => (
              <>
                <div className="totales">
                  {
                    ///ESTE DIV ARROJA ERROR REVISAR
                    (total += parseFloat(
                      (prod.price * prod.cantidad).toFixed(3)
                    ))
                  }
                </div>

                <tr key={prod.id}>
                  <td>{<img src={prod.img} className="imagen"></img>}</td>
                  <td>{prod.name}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          incrementar(prod);
                        }}
                      >
                        +
                      </button>
                      <button type="button" className="btn btn-info texto">
                        {prod.cantidad}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          decrementar(prod);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td>
                    {new Intl.NumberFormat("es-CO", {
                      style: "currency",
                      currency: "COP",
                      minimumFractionDigits: 0,
                    }).format(prod.price)}
                  </td>
                  <td>
                    {new Intl.NumberFormat("es-CO", {
                      style: "currency",
                      currency: "COP",
                      minimumFractionDigits: 0,
                    }).format(prod.price * prod.cantidad)}
                  </td>

                  <td>
                    {
                      <div
                        className="eliminar"
                        onClick={() => {
                          removeItem(prod.id, prod.cantidad);
                          setCantProducts(prod.id);
                        }}
                      >
                        <TrashWidget />
                      </div>
                    }
                  </td>
                </tr>
              </>
            ))
          }
        </tbody>
      </Table>

      <div className="info-panels">
        <div className="input-color-group-one">
          <input
            className="input-color"
            name="text"
            type="text"
            required=""
            placeholder="0000"
            readOnly
            value={new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(total)}
          />
          <label className="color-label">Total Factura</label>
        </div>
      </div>
      <div>
        {
         total > 0 ? <Link to='/checkout'><button className="btn_carrito" onClick={() => {setTotal(total)}}>Finalizar Compra</button></Link>: null
        }
      </div>
    </>
  );
};

export default ListProducts;
