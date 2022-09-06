import {useEffect, useState} from 'react'
import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {

  const {id} = useParams();

  const [item, setItem] = useState({});

    
  useEffect(()=>{

    new Promise((resolve) =>{

      setTimeout(() => {
        
            resolve(myProducts.find((element)=>element.id === id));
        }, 4000)
    }).then((data)=>{

      setItem(data)
    })

  }, [id])
    

      return (
        <>
    
       <div>
        
          {Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>}
        
        </div>
            
        </>
      ) 
  }
  
    
    export default ItemDetailContainer