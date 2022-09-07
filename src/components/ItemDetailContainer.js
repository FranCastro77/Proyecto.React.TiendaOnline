import {useEffect, useState} from 'react'
import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';




const ItemDetailContainer = () => {


  const {id} = useParams();

  const [item, setItem] = useState({});

    const getItem = (data, time) => new Promise ((resolve, reject) => {
      
      setTimeout(() => {
        
        if(data){
          resolve(myProducts.find( element => element.id === id ) )
        }else{
          reject("Error")
        }
      }, time);
    })
    

    useEffect(()=>{

      getItem(myProducts,2000).then((res)=>{
        setItem(res)
      }).catch((err)=>console.log(err, ":Producto inexistente"))

    }, []);

    return (
      <>
  
        <main className="justify-center">
  
  
          {/* <h1 className="text-center font-sans text-4xl"> NUESTROS PRODUCTOS</h1> */}
         
  
          <section className="flex-row">
            
            <ItemDetail item={item}/>
  
          </section>
  
          
  
        </main>
          
      </>
    ) 



  }

    
    export default ItemDetailContainer