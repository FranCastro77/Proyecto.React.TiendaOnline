import React from 'react'
import Cartpicture from "../assets/images/CartWidget.png" 
import { useCartContext } from '../context/CartContext';





const CartWidget = () => {

  const {totalProducts} = useCartContext();

  return (
        <div className="ml-5">
          <img src={Cartpicture} alt="" />
          <span>{totalProducts() || ''}</span>

        </div>
        

  );
};

export default CartWidget


