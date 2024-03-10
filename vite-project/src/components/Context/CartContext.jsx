import { createContext, useState, useEffect} from "react";//desestructuro las funcionalidades que voy a usar


export const CartContext = createContext([])
//creo el contexto el cual se debe exportar y usar en los componentes que necesiten acceder al contexto

export function CartProvider({children}){
    //recibimos el children el cual seria todos los componentes que estaran dentro de el provider

    const [products,setProducts] = useState([])
    //array de objetos que contendra todos los productos que se agreguen al carrito
    const [totCantidad,setTotCantidad] = useState(0)

    const [Total, setTotal] = useState(0)

    useEffect(()=>{//uso el use effect para visualizar los productos una vez terminado la ejecucion
        console.log("products",products)
        console.log("totCantidad",totCantidad)
    },[totCantidad])


    function addToCart(product,cantidad){

        const items = {
            ...product,
            cantidad:cantidad
        };
        updateCantidad(cantidad)
        if (products.length === 0){
            setProducts([items])
        }else{
            const item = products.find((element) => element.id === items.id)
            const index = products.findIndex((element) => element.id === items.id)
            console.log("index",index)
          
            if(item){
                products[index].cantidad += cantidad
            }else{
                setProducts((prod) =>[...prod,items])
            }

        }
        
    }

    function updateCantidad(cant){
        setTotCantidad(totCantidad+cant)
    }

    function removeItem(id,cant){
        const index = products.findIndex((element) => element.id === id)
        products.splice(index,1)
        updateCantidad(cant*-1)
    }


    return <CartContext.Provider value={{products,setProducts,addToCart,totCantidad,removeItem,setTotal,Total,setTotCantidad}}>{children}</CartContext.Provider>
}