import React from 'react';
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';



const ItemDetail = ({id, title, URLImg, price, description}) => {
   
  


    const onAdd = (count) => {

        console.log ("El cliente ha seleccionado la siguiente cantidad:", count, "del producto ", title)
        
      }


    return (

    
  

    <article className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">

        <h1>{title} - {id}</h1>
        <img className='imgItem' src={URLImg} alt=""/>
        <h2>{description}</h2>
        <h3>{price}</h3>
     
          <Link to={'/Cart'}><button>FINALIZAR LA COMPRA</button></Link>:  
          <ItemCount stock={17} initial={1} onAdd ={onAdd}/>
       
    </article>
      

  );
};

export default ItemDetail;