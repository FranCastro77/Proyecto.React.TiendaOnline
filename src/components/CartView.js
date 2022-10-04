// import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';



const CartView = () =>{
  const {cart, totalPrice, clearCart} = useCartContext()

  if (cart.length === 0){
    return (

        <div className='text-center flex-col mt-24'>

          <p className='font-bold'>Aun no tenes elementos en tu carrito</p>
          <NavLink className= "mt-32 btn btn-active btn-ghost" to={'/Item'}>COMPRAR</NavLink>

        </div>

          
        
    );   

  }

  return (

    <div className='flex-row'>  
         
         <div className='flex flex-wrap'>  
          {
              cart.map(product => 
              <ItemCart key={product.id} product={product} />)
          }
          </div>
          
          <p className='self-end pb-6 py-6 text-2xl text-center'>
            Total: ${totalPrice()}
          </p>

          <div className='text-center'>
            <button className='btn' onClick={clearCart}>VACIAR CARRITO</button>
          </div>


          <NavLink className='text-center mt-10' to={'/CheckOut'}>
            {/* <button className='btn btn-success' onClick={handleOrder}> Confirmar y Emitir Compra </button> */}
            <button className='btn btn-success mt-3'> Confirmar y Emitir Compra </button>
          </NavLink>  

         

    </div>

  )

  }


export default CartView