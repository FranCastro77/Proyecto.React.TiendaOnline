import React from 'react'
import Item from './Item'
import Spinner from './Spinner';





const ItemList = ({products}) => {

 

  return (

    <>

    <div className="justify-items-center grid gap-6 grid-cols-3 grid-rows-2 text-center">

        
        {products.length ?  products.map((product) => <Item key={product.id} {...product} />)
        
        :
        
        <Spinner/>

        }

        {/* {products.length ?  products.map((product) => <Item key={product.id} {...product} />)  : <h3 className='text-end font-sans text-2xl'>Estamos preparando los colores...</h3>} */}
       
        

    </div>
      
       
    </>

  );
};

export default ItemList;