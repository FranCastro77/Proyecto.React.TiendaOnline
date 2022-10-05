import { addDoc, collection, getFirestore, updateDoc, doc} from 'firebase/firestore';
import React, {useState} from 'react'
import { useCartContext } from '../context/CartContext';
import Swal from 'sweetalert2'



const CheckOut = () => {

  const {cart, totalPrice, clearCart} = useCartContext()

  const [datos, setDatos] = useState({

      nombre: '',
      email: '',
      telefono: ''

  })
  
   const handleInputChange = (event) =>{

    setDatos({

      ...datos, 
      [event.target.name] : event.target.value

    })
  }

  const theDate = new Date().toISOString().slice(0,10);

  const userData = (event) =>{
    event.preventDefault ();
    
    const order = {

      buyer:datos,  
      items: cart,
      total: totalPrice(),
      date: theDate

    }
    

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)

    

      .then(({id}) => Swal.fire({
            title: 'GRACIAS POR TU COMPRA '+ datos.nombre.toUpperCase() + "!",
            
            text: 'Tu numero de Orden es  ' + id  + '  y fue creada el  ' + theDate + '  , por un total de $  ' +  totalPrice()  + ' . -- En breve recibiras un correo al email  ' + datos.email + ' ,  para continuar con el proceso.',
            icon: 'success'
      }))
      clearCart()
      setDatos({nombre:"", email:"", telefono:""})


    const updateStock = (cart) => {
          cart.forEach(e=>{
          const {id, stock, quantity} = e
          console.log(quantity)
          let newStock = stock - quantity
          const product = doc(db, "products", id)
          updateDoc(product,{stock:newStock})
        }) 

    }  

    updateStock(cart)
  }


  return (

    <>
    
    
    <h1 className="text-center">Por favor complete sus datos</h1>

    <form className=" text-center w-full max-w-sm ml-96 pt-20" onSubmit={userData}>

      <div className='text-center'>

      <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Nombre y Apellido
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                   id="inline-full-name" 
                   type="text"
                   name="nombre" required
                   value={datos.nombre}
                   placeholder='Apellido Nombre'
                   onChange={handleInputChange}>
            </input>
          </div>
          
      </div>

      <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                   id="inline-full-name" 
                   type="email"
                   name="email" required
                   value={datos.email}
                   placeholder='xxxxxx@xxx.xxx'
                   onChange={handleInputChange}>
            </input>
          </div>
      </div>

      <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Telefono
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                   id="inline-full-name" 
                   type="tel"
                   name="telefono" required
                   value={datos.telefono}
                   placeholder='xxxx xxxx'
                   onChange={handleInputChange}>
              
            </input>
          </div>
      </div>

      </div>
        <div className='col-md-3 ml-80'>
            <button className='btn text-center mt-5' type="submit" disabled={totalPrice() === 0}>Procesar Orden</button>
        </div>

    </form> 


     
    </>

    
    
  )
}

export default CheckOut