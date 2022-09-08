import React from 'react'
import Emptycart from "../assets/images/Empty_cart.jpg"

const CartView = () => {
  return (
    <div className="text-center mt-20">
    <h1 className="text-center font-sans text-4xl mb-10">EN CONSTRUCCION</h1>        
    <img className="inline w-20 h-20 " src={Emptycart} alt="" />
    </div>
    
  );
};

export default CartView