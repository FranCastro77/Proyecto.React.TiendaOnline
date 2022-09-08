import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [products, setProducts] = useState([]);

    const getProducts = (data, time) => new Promise((resolve, reject) =>{

      setTimeout(() => {
          
        
        if(data){
            resolve(data)
        }else{
          reject("Error")
        }

      }, time);
    })

    useEffect(()=>{

      

    if(categoryId){
        getProducts(myProducts,2000).then(res => setProducts(res.filter(product => product.category === categoryId)))
            .catch(err => console.log(err, ": Disculpas. Esta categoria aún no existe."));
    }else{
        getProducts(myProducts,2000).then(res => setProducts(res))
            .catch(err => console.log(err, ": Disculpas. Esta categoria aún no existe."));
    }
}, [categoryId]);
      


  return (
    <>

      <main className="justify-center">


        <h1 className="text-center font-sans text-4xl"> NUESTROS PRODUCTOS</h1>
       

        <section className="flex-row">
          
          <ItemList products={products}/>

        </section>

        

      </main>
        
    </>
  ) 

  }

export default ItemListContainer