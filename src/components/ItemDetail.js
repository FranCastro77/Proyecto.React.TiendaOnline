import React from 'react';
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useState } from 'react';


const ItemDetail = ({item}) => {



    const [quantity, setQuantity] = useState (0)

    const {addItem} = useCartContext ()

    function onAdd (quantity) {

        setQuantity(quantity)

        addItem(item, quantity)

        console.log ("El cliente ha seleccionado la siguiente cantidad:", quantity, "del producto ", item.title)

      }

    return (

   
    
    <article className='text-center flex-col ml-35'>

      <div className='flex row justify-center'>

          <h1 className=' mx-12 italic font-semibold mt-40'>{item.title} - {item.id}</h1>

          <img className='imgItem max-h-80 mt-30' src={item.URLImg} alt=""/>
      
          <div>
            <h2 className='flex-row mt-40 ml-5'>{item.description}</h2>
            <h2 className='ml-5 font-semibold'> Precio: $ {item.price}</h2>
          </div>
          
      </div>
        
        {
        quantity ? (

        <div className='mt-16 ml-96 -ml-56'>
          <Link to={'/Cart'}>
            <button className='btn btn-success'>Ir al Carrito</button>
          </Link>
          <Link to={'/Item'}>
            <button className='ml-10 btn btn-success'>Seguir comprando</button>
          </Link>
        </div>

        ):
        
        <div className='ml-28'>
          <ItemCount stock={item.stock} initial={1} onAdd ={onAdd}/>
        </div>  
        
        }

    </article>
    

  );
};

export default ItemDetail;