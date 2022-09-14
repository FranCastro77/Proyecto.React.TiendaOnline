import {useEffect, useState} from 'react'
import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [item, setItem] = useState();

    const getItem = (products, time, idParams) => new Promise ((resolve, reject) => {
      
      setTimeout(() => {
        
        if(products) {
        
          resolve(products.find( product => product.id === idParams ) )
        }else{
          reject("Error")
        }
      }, time, idParams);
    })
    
    useEffect(()=>{

      getItem(myProducts,2000, id).then((res)=>{
        setItem(res)
      }).catch((err)=>console.log(err, ":Producto inexistente"))

    }, [id]);

    return (
      <>
        
        <main className="justify-center">

          <section className="flex-row">

          { item ? <ItemDetail item = {item} /> : <p>Cargando...</p> }

          </section>
  
        </main>
          
      </>
    ) 

  }

    
    export default ItemDetailContainer