import { useEffect, useState } from "react";

import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from "react-router-dom";
import Loader from '../Loader/Loader'
import { collection, doc, getDocs, getFirestore, query, where} from "firebase/firestore"

 const ItemListContainer =({ greeting })=>{

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    
    useEffect(()=>{
        const db = getFirestore();
        const productoRef =categoryId ? query( collection(db, "productos"), where('category', '==', categoryId)): collection(db, "productos");//creamos la referencia

        getDocs(productoRef).then((collection)=>{
            const productos = collection.docs.map((doc)=>{
                return doc.data();
            })
            setLoading(false)
            setProducts(productos)
        });
    },[categoryId])


    return (
        <div className="box">
        <h1>{greeting}</h1>
        {
          loading ? <Loader></Loader> : <ItemList products={products}/>
        }
        
        </div>
    )


}
export default ItemListContainer;
