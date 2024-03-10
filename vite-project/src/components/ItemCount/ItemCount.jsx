import {useContext, useState} from "react";
import { CartContext } from '../Context/CartContext'

const ItemCount = ({id,name,price,img,stock,initial})=>{
    const [cant,setCant] = useState(initial)
    const { addToCart }   = useContext(CartContext);

    const incrementar= () =>{
        if (cant<stock){
            setCant(cant+1)
        }
    }

    const decrementar = ()=>{
        if (cant>1){
            setCant(cant-1)
        }
    }
    
    function addProduct(cant){

        const item = {
            id,name,price,img
        }
        addToCart(item, cant)
        setCant(initial)
    }
 

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Buttons" onClick={decrementar}>-</button>
                <h3 className="Number">{cant}</h3>
                <button className="Buttons" onClick={incrementar}>+</button>
            </div>

            <div>
                <button className="btn_carrito" onClick={()=>{
                    addProduct(cant)
                }}>Agregar Carrito</button>
            </div>

        </div>
    )
}


export default ItemCount;