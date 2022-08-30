import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (

    <>

  
      {products?.map((p) =>
              
      <Item key={p.id} title={p.title} description={p.description} image={p.image} /> 
      )}
       
    </>

  );
}

export default ItemList;