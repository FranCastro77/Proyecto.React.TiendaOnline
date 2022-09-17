import React from 'react'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({product}) => {
  const {removeItem} = useCartContext (); 
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">
        <img className='imgItem' src={product.URLImg} alt=""/>

        <div>
            <p> Producto: {product.title} - {product.id}</p>
            <p> Cantidad: {product.quantity}</p>
            <p> Precio: $ {product.price}</p>
            <p> Subtotal: $ {product.quantity * product.price}</p>
            <button onClick={() => removeItem(product.id)}>ELIMINAR</button>
        </div>
    
    </div>
  )
}

export default ItemCart