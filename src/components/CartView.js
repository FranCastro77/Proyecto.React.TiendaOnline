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

    </div>


  )





  }




// const CartView = ({id, title, price}) => {

//   const {cart, clearCart} = useCartContext ();
//   const eventHandler = () =>

//      clearCart()
//      console.log(cart); 


//     return (

//     <section className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">

       
//           <div>

//             <div className="text-center mt-20">
//             <h1 className="text-center font-sans text-4xl mb-10">EN CONSTRUCCION</h1>        
//             <img className="inline w-20 h-20 " src={Emptycart} alt="" />

//           </div>
      
          
//           <div>
//             <h2>{title} - {id}</h2>
//             <h4>${price}</h4>
//             <button onClick={eventHandler}>LIMPIAR CARRITO</button>            


//             (<Link to={'/'}>
//               <button>HOME</button>
//             </Link>)

//           </div>
         
         
            

//           </div>


//     </section>


//   );



  
// };

export default CartView