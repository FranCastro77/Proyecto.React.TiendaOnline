import React, {useEffect, useState} from 'react'
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
import myProducts from "../components/myProducts.json";



const ItemListContainer = () => {


  // const onAdd = (contador) => {

  //   console.log ("El cliente ha seleccionado la siguiente cantidad:", contador)
  // }
  

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

  // const onAdd = (contador) => {

  //   console.log ("El cliente ha seleccionado la siguiente cantidad:", contador)
  // }


  // return (

  //   <main>


  //     <div className="Catalogo">
  //           <img src={Sprinkle} alt="" />

  //     </div>

  //     <h1 className="bg-primary">
  //     Esmalte Sprinkle - Chico
  //     </h1>

  //     <ItemCount stock={17} initial={1} onAdd ={onAdd}/>
  //     <section>
  //       <ItemList data={products}/>
  //     </section>

  //   </main>

  







//   const onAdd = (contador) => {

//     console.log ("El cliente ha seleccionado la siguiente cantidad:", contador)
//   }


//   return (

//     <main>


//       <div className="Catalogo">
//             <img src={Sprinkle} alt="" />

//       </div>

//       <h1 className="bg-primary">
//       Esmalte Sprinkle - Chico
//       </h1>

//       <ItemCount stock={17} initial={1} onAdd ={onAdd}/>

   
     
//     </main>

//   )
// }

export default ItemListContainer