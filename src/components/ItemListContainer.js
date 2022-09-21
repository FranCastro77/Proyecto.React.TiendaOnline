import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore'; 


const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [products, setProducts] = useState([]);

  
    useEffect(()=>{

    const queryDb = getFirestore();
    const queryCollection = collection (queryDb, 'products');
   
    
    if(categoryId){
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
          .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
          .catch(err => console.log(err, ": Disculpas. Esta categoria aún no existe."));
    }else{
      getDocs(queryCollection)
          .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
          .catch(err => console.log(err, ": Disculpas. Esta categoria aún no existe."));
    }  



}, [categoryId]);
    

  return (
    <>

      <main className="justify-center">


        <h1 className="text-center font-sans text-4xl"> NUESTROS PRODUCTOS</h1>
       

        <section className="overflow-auto">

          
          <ItemList products={products}/>

        </section>

        

      </main>
        
    </>
  ) 

  }

export default ItemListContainer