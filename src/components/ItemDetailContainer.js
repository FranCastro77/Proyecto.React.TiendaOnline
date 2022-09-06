import {useEffect, useState} from 'react'
import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = ({id}) => {

  const {id} = useParams()

  const [productDetail, setProductDetail] = useState([]);

    const getProductDetail = (data, time) => new Promise((resolve, reject) =>{

      setTimeout(() => {
        
        if({id}){
            resolve(data)
        }else{
          reject("Error")
        }

      }, time);
    })

    useEffect(()=>{

        getProductDetail(myProducts,2000).then((res)=>{
          setProductDetail(res)
        }).catch((err)=>console.log(err, ":Producto inexistente"))
  
      }, []);
    
      return (
        <>
    
          <main className="justify-center">
    
    
            <h1 className="text-center font-sans text-4xl"> NUESTROS PRODUCTOS</h1>
           
    
            <section className="flex-row">
              
              <ItemDetail products={productDetail}/>
    
            </section>
    
            
    
          </main>
            
        </>
      ) 
    
      }
    
    export default ItemDetailContainer