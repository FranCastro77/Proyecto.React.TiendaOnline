import React from 'react'
import Emptycart from "../assets/images/Empty_cart.jpg"
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';




const CartView = ({id, title, price}) => {

  const {cart, clear} = useCart ();
  const eventHandler = (id) =>

     clear(id)
     console.log(cart); 


    return (

    <section className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">

       
          <div>

            <div className="text-center mt-20">
            <h1 className="text-center font-sans text-4xl mb-10">EN CONSTRUCCION</h1>        
            <img className="inline w-20 h-20 " src={Emptycart} alt="" />

          </div>
      
          
          <div>
            <h2>{title} - {id}</h2>
            <h4>${price}</h4>
            <button onClick={eventHandler}>LIMPIAR CARRITO</button>            


            (<Link to={'/'}>
              <button>HOME</button>
            </Link>)

          </div>
         
         
            

          </div>


    </section>


  );



  
};

export default CartView