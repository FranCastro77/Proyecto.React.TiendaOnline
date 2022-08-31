import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (

    <>

    <div className="justify-items-center  grid gap-6 grid-cols-3 grid-rows-2">

        {products.length ?  products.map((product) => <Item key={product.id} {...product} />)  : <h3 className="text-center">Estamos preparando los colores...</h3>}
              
    </div>
      
       
    </>

  );
};

export default ItemList;