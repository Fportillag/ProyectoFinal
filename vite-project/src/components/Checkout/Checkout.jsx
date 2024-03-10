import { useForm } from "react-hook-form";
import './Checkout.css'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore"
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

export default function Checkout() {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const { products, Total, setProducts, setTotal,setTotCantidad} = useContext(CartContext)

  const db= getFirestore()
  const ordenesRef = collection(db,"Ordenes")

  const enviar = handleSubmit((data)=>{
 
    const orden = {
        buyer:{
            ...data
        },
        items:[
            ...products
        ],
        total:Total
    }

    addDoc(ordenesRef,orden)
    .then((docref) =>{
        reset();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Orden Creada Con Exito",
            text: `Numero de Orden:  ${docref.id}`,
            showConfirmButton: false,
            timer: 2000
          });
          
          
    })

    
  })
  return (
    <div className="contenedor_form">
    <form className="form" onSubmit={enviar}>
      <span className="title">Datos Facturación</span>
      <label htmlFor="name" className="label">
        Nombre Completo
      </label>
      <input
        type="text"
        className="input"
        {...register("name",{
            required:{
              value:true,
              message:"El nombre es obligatorio"
            }
          })}
      />
      <label htmlFor="email" className="label">
        Correo Electronico
      </label>
      <input
        type="email"
        className="input"
        {...register("email", {
          required: {
            value: true,
            message: "El correo es obligatorio",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "El correo no es valido",
          },
        })}
      />
      <label htmlFor="phone" className="label">
        Telefono
      </label>
      <input
        type="text"
        className="input"
        {...register("phone",{
            required:{
              value:true,
              message:"El telefono es obligatorio"
            }
          })}
      />
      <button className="submit">
        Crear Orden
      </button>
      <Link to={'/'} className="volver">
      <button className="submit color-volver">
        Volver al Comercio
      </button>
      </Link>
    </form>
    </div>
  );
}
