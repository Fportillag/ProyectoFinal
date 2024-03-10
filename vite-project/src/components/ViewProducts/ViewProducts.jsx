import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ListProducts from '../ListProducts/ListProducts'


const  ViewProducts = ()=>{

    const { products } = useContext(CartContext)

    const myJsonString = JSON.stringify(products);

    return (
        <div className="listproducts">
        <ListProducts products={products}></ListProducts>
        </div>
    
    )
}

export default ViewProducts;