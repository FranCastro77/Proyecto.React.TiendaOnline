import {useParams} from 'react-router-dom'
import Item from './Item'

const ItemDetail = ({products}) => {
    const {id} = useParams ()
        console.log ('ID producto: ' + id); 
    

    return (

    <>

    <div className="justify-items-center grid gap-6 grid-cols-3 grid-rows-2 text-center">

        {products.length ?  products.map((product) => <Item key={product.id} {...product} />)  : <h3>Estamos preparando los colores...</h3>}
              
    </div>
      
       
    </>

  );
};

export default ItemDetail;