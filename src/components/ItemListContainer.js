import React, {useEffect, useState} from 'react'
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
import myProducts from "../components/myProducts.json";



const ItemListContainer = () => {


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

      getProducts(myProducts,2000).then((res)=>{
        setProducts(res)
      }).catch((err)=>console.log(err, ":Producto inexistente"))

    }, []);


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