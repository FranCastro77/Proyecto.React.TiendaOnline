import React from 'react';
import ItemCount from './ItemCount'



const ItemDetail = ({id, title, URLImg, price, description}) => {
   
  


    const onAdd = (contador) => {

        console.log ("El cliente ha seleccionado la siguiente cantidad:", contador, "del producto ", title)
      }


    return (

    <>
  

    <article className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">

        <h1>{title} - {id}</h1>
        <img className='imgItem' src={URLImg} alt=""/>
        <h2>{description}</h2>
        <h3>{price}</h3>
        <ItemCount stock={17} initial={1} onAdd ={onAdd}/>
    </article>
      
      
       
    </>

  );
};

export default ItemDetail;