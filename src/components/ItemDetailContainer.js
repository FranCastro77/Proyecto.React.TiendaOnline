import {useEffect, useState} from 'react'
import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';




const ItemDetailContainer = () => {


  const {id} = useParams();

  const [item, setItem] = useState({});

    const getItem = (products, time, idParams) => new Promise ((resolve, reject) => {
      
      setTimeout(() => {
        
        if(products) {
        
          resolve(products.find( element => element.id === idParams ) )
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
  
  
          {/* <h1 className="text-center font-sans text-4xl"> NUESTROS PRODUCTOS</h1> */}
         
  
          <section className="flex-row">

          { Object.entries(item).length === 0 ?
                <div>
                  <h3>Obteniendo mas datos de tu producto...</h3>
                </div>
            : 
               <ItemDetail {...item} />
            }
          
          
          
             
            {/* <ItemDetail {...item}/> */}
            
            
  
          </section>
  
          
  
        </main>
          
      </>
    ) 



  }

    
    export default ItemDetailContainer