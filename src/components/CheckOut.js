import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, {useState} from 'react'
import { useCartContext } from '../context/CartContext';



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

  const userData = (event) =>{
    event.preventDefault ();
    
    const order = {


      buyer:datos,  

    //  buyer:{

    //   nombre: datos.nombre,
    //   email: datos.email,
    //   telefono: datos.telefono

    //  }, 

      // items: cart.map(product => ({id: product.id, title: product.title, price: product.price, cantidad: product.quantity})),
      items: cart,
      total: totalPrice(),
      date: serverTimestamp()

    }
    

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
    clearCart()


  }



  return (

    <>
    
    
    <h1 className="text-center">Por favor complete sus datos</h1>

    <form className="w-full max-w-sm " onSubmit={userData}>

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
                   name="nombre"
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
                   name="email"
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
                   name="telefono"
                   onChange={handleInputChange}>
              
            </input>
          </div>
      </div>

        
        <div className='col-md-3'>
            <button className='btn text-center mt-5' type="submit" disabled={totalPrice() === 0}>Procesar Orden</button>
        </div>


    </form> 


      <div>

          <h1>MUCHAS GRACIAS POR TU COMPRA</h1>
          <br></br>
            <p> {datos.nombre}, con fecha {serverTimestamp} has generado la Orden de Compra    , por un total a pagar de $ {totalPrice()} </p>
          <br></br>
            <p> Nos contactaremos en breve contigo al correo {datos.email} para continuar con el proceso. </p>



      </div>
    {/* {
        {totalPrice} > 0  (

        <div className="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Your purchase has been confirmed!</span>
            </div>
          </div>

        )
        
        
          
        
        } */}

     

          

        

    
        
        
        
     
        
    
    </>

    
    
  )
}

export default CheckOut