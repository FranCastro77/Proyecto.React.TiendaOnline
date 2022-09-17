import {useEffect, useState} from 'react'
// import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from './Spinner';


// ---------Recordar pasos para trabajar con Firebase ---------------

// 1- Traer el servicio de FireStore
// 2- Crear un puntero al dato que queremos traer
// 3- Traer el dato con una promesa


const ItemDetailContainer = () => {

  // const [item, setItem] = useState([]);
  // const {detailId} = useParams();
  
  const {id} = useParams();

  const [item, setItem] = useState();

  // const [loading, setLoading] = useState(true)

    // const getItem = (products, time, idParams) => new Promise ((resolve, reject) => {
      
    //   setTimeout(() => {
        
    //     if(products) {
        
    //       resolve(products.find( product => product.id === idParams ) )
    //     }else{
    //       reject("Error")
    //     }
    //   }, time, idParams);
    // })
    
    useEffect(()=>{

    
    const queryDb = getFirestore();
    const queryDoc = doc (queryDb, 'products', id);
      

    getDoc(queryDoc)
      .then((res => setItem({id: res.id, ...res.data() })),{
      }).catch((err)=>console.log(err, ":Producto inexistente"))
        
      // getItem(myProducts,2000, id).then((res)=>{
      //   setItem(res)
      // }).catch((err)=>console.log(err, ":Producto inexistente"))
      
      // setLoading(false)

    }, [id]);


    






    return (
      <>
        
        <main className="justify-center">

          <section className="flex-row">

          {     
            item ? <ItemDetail item = {item} />:<Spinner/> 
          } 
              


           

          {/* { item ? <ItemDetail item = {item} /> : <p>Cargando...</p> } */}

          </section>
  
        </main>
          
      </>
    ) 

  }

    
    export default ItemDetailContainer