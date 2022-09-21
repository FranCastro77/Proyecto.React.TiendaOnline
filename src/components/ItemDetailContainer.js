import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from './Spinner';


const ItemDetailContainer = () => {

  
  const {id} = useParams();

  const [item, setItem] = useState();

    useEffect(()=>{

    
    const queryDb = getFirestore();
    const queryDoc = doc (queryDb, 'products', id);
      

    getDoc(queryDoc)
      .then((res => setItem({id: res.id, ...res.data() })),{
      }).catch((err)=>console.log(err, ":Producto inexistente"))
        

    }, [id]);


    return (
      <>
        
        <main className="justify-center">

          <section className="flex-row">

          {     
            item ? <ItemDetail item = {item} />:<Spinner/> 
          } 
              

          </section>
  
        </main>
          
      </>
    ) 

  }

    
    export default ItemDetailContainer