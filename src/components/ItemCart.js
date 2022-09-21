import React from 'react'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({product}) => {
  const {removeItem} = useCartContext (); 
  return (
    <div className="flex">
        <img className='imgItem max-h-60 ml-10' src={product.URLImg} alt=""/>

        <div className='justify-center py-12 pl-12'>
            <p className='italic font-semibold underline pb-3'> {product.title}</p>
            <p> Cantidad: {product.quantity}</p>
            <p> Precio: $ {product.price}</p>
            <p className='font-bold py-3'> Subtotal: $ {product.quantity * product.price}</p>
            <button className='btn' onClick={() => removeItem(product.id)}>ELIMINAR</button>
        </div>
    
    </div>
  )
}

export default ItemCart