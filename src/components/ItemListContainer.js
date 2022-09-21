import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
// import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore'; 
// import Spinner from './Spinner';



const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [products, setProducts] = useState([]);

  // const [loading, setLoading] = useState(true)

    // const getProducts = (data, time) => new Promise((resolve, reject) =>{

    //   setTimeout(() => {
          
        
    //     if(data){
    //         resolve(data)
    //     }else{
    //       reject("Error")
    //     }

    //   }, time);
    // })

    useEffect(()=>{

    const queryDb = getFirestore();
    const queryCollection = collection (queryDb, 'products');
    // const queryFilter = query(queryCollection, where('categoria', '==', categoryId))
    // getDocs(queryFilter)
    
    
    
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

      




    // if(categoryId){
    //     getProducts(myProducts,2000).then(res => setProducts(res.filter(product => product.category === categoryId)))
    //         .catch(err => console.log(err, ": Disculpas. Esta categoria aún no existe."));
    // }else{
    //     getProducts(myProducts,2000).then(res => setProducts(res))
    //         .catch(err => console.log(err, ": Disculpas. Esta categoria aún no existe."));
    // }
    // setLoading(false)

}, [categoryId]);
    

    // useEffect (() =>{
    //   const queryDb = getFirestore();
    //   const queryCollection = collection (queryDb, 'products');
    //   getDocs(queryCollection)
    //     .then(res => console.log(res.docs.map(product => ({id: product.id, ...product.data()}))))
    // }, [])



  return (
    <>

      <main className="justify-center">


        <h1 className="text-center font-sans text-4xl"> NUESTROS PRODUCTOS</h1>
       

        <section className="overflow-auto">


          {/* {
            loading ?
             <ItemList products={products} />:<Spinner/> 
          } */}


          
          <ItemList products={products}/>

        </section>

        

      </main>
        
    </>
  ) 

  }

export default ItemListContainer