

//es un componente de presentacion

import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { collection, doc, getDocs, getFirestore, query, where} from "firebase/firestore"
const ItemDetailContainer = () =>{

const [product,setProduct] = useState(null);
const { itemId } = useParams();


useEffect(()=>{
    const db = getFirestore();
    const productoRef = query( collection(db, "productos"), where('id', '==', itemId));
    getDocs(productoRef).then((collection)=>{
        const productos = collection.docs.map((doc)=>{
            return doc.data();
        })
        const item = {
            ...productos
        }
        setProduct(item[0])
    });
},[itemId])


return (
    <div className='itemContainer'>
    
    <ItemDetail {...product}/>
    </div>
)



}

export default ItemDetailContainer;