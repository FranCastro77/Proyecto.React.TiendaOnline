import React, {useState}  from 'react'
import Emptycart from "../assets/images/Empty_cart.jpg"
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CartView = (quantity) => {


  const [cart, setCart] = useState ([quantity])

    console.log(cart)

    const {clear} = useCart ()

    function clearall () {

        setCart()

        clear()

        console.log ("El cliente ha vaciado su carrito")

      }

    return (

    <article className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">

       

          <div>

            <>
            <div className="text-center mt-20">
            <h1 className="text-center font-sans text-4xl mb-10">EN CONSTRUCCION</h1>        
            <img className="inline w-20 h-20 " src={Emptycart} alt="" />
            </div>

            
              <button onClick={clearall} className="btn btn-danger w-50 mt-3">Eliminar</button>
            </> 

            <Link to={'/'}>
              <button>HOME</button>
            </Link>

          </div>

        

       

    

    </article>
    // <button onClick={onAdd}>Ir al Carrito</button>

  );



  // const {clear} = useCart()
  // // const [isActive, setActive] = useState(false);

  // const handlerVaciar = () => {

  //   clear();
  //   console.log("el carrito esta vacio")
  //   }
    
  
  // const handlerRemove = () => {

  //   cart.forEach(itemCart => {
  //     setActive(isActive);
  //     function pluralizeWord(singularWord, pluralWord) {
  //       return itemCart.cant > 1 ? pluralWord : singularWord;
  //   } 

  //   removeItem(itemCart.id)
  // })

  //   }

  //   useEffect(cart)
  //   console.log(cart)


  // return (

  //   <>
  //   <div className="text-center mt-20">
  //   <h1 className="text-center font-sans text-4xl mb-10">EN CONSTRUCCION</h1>        
  //   <img className="inline w-20 h-20 " src={Emptycart} alt="" />
  //   </div>

    
  //     <button onClick={handlerVaciar} className="btn btn-danger w-50 mt-3">Eliminar</button>
  //   </>
    
  // );
};

export default CartView