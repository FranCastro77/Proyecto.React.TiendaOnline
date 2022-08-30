import React, {useEffect, useState} from 'react'
import Sprinkle from "../assets/images/Sprinkle.jpg" 
import ItemCount from './ItemCount'
import ItemList from './ItemList'



const ItemListContainer = () => {

  const onAdd = (contador) => {

    console.log ("El cliente ha seleccionado la siguiente cantidad:", contador)
  }


  return (

    <main>


      <div className="Catalogo">
            <img src={Sprinkle} alt="" />

      </div>

      <h1 className="bg-primary">
      Esmalte Sprinkle - Chico
      </h1>

      <ItemCount stock={17} initial={1} onAdd ={onAdd}/>

   
     
    </main>

  )
}

export default ItemListContainer