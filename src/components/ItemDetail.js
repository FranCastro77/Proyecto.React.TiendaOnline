import React from 'react';
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';




const ItemDetail = ({item}) => {

  
   
    const [quantity, setQuantity] = useState (0)

    console.log(quantity)
  
    const {addItem} = useCart ()

    // const addHandler = (quantity) => { 

    //   addItem(item)
    //   console.log(item);
    //  }

    function onAdd (quantity) {

        setQuantity(quantity)

        addItem(item, quantity)

        console.log ("El cliente ha seleccionado la siguiente cantidad:", quantity, "del producto ", item.title)
        
      }


    return (

    
  

    <article className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">

        
        
        <h1>{item.title} - {item.id}</h1>
        <img className='imgItem' src={item.URLImg} alt=""/>
        <h2>{item.description}</h2>
        <h3> Precio: $ {item.price}</h3>
        {
        quantity ? (
          
          <div>

            <Link to={'/Cart'}>
              <button onClick={onAdd}>Ir al Carrito</button>
            </Link> 

          </div>
          
        ):

          (<ItemCount stock={17} initial={1} onAdd ={onAdd}/>)

        }

        {/* <>
        
          <Link to={'/Cart'}>
              <ItemCount stock={17} initial={1} onAdd ={onAdd}/>
          </Link>  
        
          <button onClick={(event)=> {addHandler(event, title)}}>Agregar Articulo</button>
        
        </> */}
          
    </article>
      

  );
};

export default ItemDetail;