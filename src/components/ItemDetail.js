import React from 'react';
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import { useCart } from '../context/CartContext';



const ItemDetail = ({id, title, URLImg, price, description}) => {
   
  
    const {addItem} = useCart ()

    const addHandler = (title) => { 

      addItem(title)
     }

    const onAdd = (count) => {

        console.log ("El cliente ha seleccionado la siguiente cantidad:", count, "del producto ", title)
        
      }


    return (

    
  

    <article className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">

        <h1>{title} - {id}</h1>
        <img className='imgItem' src={URLImg} alt=""/>
        <h2>{description}</h2>
        <h3>{price}</h3>

        <>
        
          <Link to={'/Cart'}>
              <ItemCount stock={17} initial={1} onAdd ={onAdd}/>
          </Link>  
        
          <button onClick={()=> {addHandler({title})}}>Agregar Articulo</button>
        
        </>
          
    </article>
      

  );
};

export default ItemDetail;