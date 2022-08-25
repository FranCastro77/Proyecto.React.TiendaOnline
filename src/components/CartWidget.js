import React from 'react'
import Cartpicture from "../assets/images/CartWidget.png" 

const CartWidget = () => {
  return (
        <div className="CartWidgetContainer">
          <img src={Cartpicture} alt="" />
        </div>
        
  );
};

export default CartWidget