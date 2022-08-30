import React, {useEffect, useState} from 'react'
// import Sprinkle from "../assets/images/Sprinkle.jpg" 
import ItemCount from './ItemCount'
import ItemList from './ItemList'
ch


const ItemListContainer = () => {


  const onAdd = (contador) => {

    console.log ("El cliente ha seleccionado la siguiente cantidad:", contador)
  }
  

  const [products, setProducts] = useState([])

    useEffect(() => {
      const URL = 'https://fakestoreapi.com/products'
      fetch( URL )
        .then( res => res.json() )
        .then( data => {
          console.log( data);
          setProducts( data)
        })
    }, [])

  return (
    <>

      <main>

          <div>Ejemplo Productos </div>
          <ItemList products={products}/>
{/* 

          <div className="Catalogo">
            <img src={Sprinkle} alt="" />

          </div>

          <h1 className="bg-primary">
          Esmalte Sprinkle - Chico
          </h1> */}

          <ItemCount stock={17} initial={1} onAdd ={onAdd}/>
          <section>
            <ItemList data={products}/>
          </section>

      </main>
        
    </>
  ) 


    // const getData = new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve(FetchData);
    //     }, 2000);
    // })
    // getData.then(res => {
    //     setProducts(res);
    // });





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