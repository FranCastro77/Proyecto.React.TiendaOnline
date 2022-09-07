import React from 'react';
import ItemCount from './Item'


const ItemDetail = ({id, title, price, description, img}) => {
   
  


    const onAdd = (contador) => {

        console.log ("El cliente ha seleccionado la siguiente cantidad:", contador, "del producto ", title)
      }


    
  


    return (

    <>
    <div>
        <h1>{title} - {id}</h1>
        <img src={img} alt=""/>
        <h2>{description}</h2>
        <h3>{price}</h3>
        <ItemCount stock={17} initial={1} onAdd ={onAdd}/>
    </div>
      
      
       
    </>

  );
};

export default ItemDetail;