import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title, img, price}) => {

  const onAdd = (contador) => {

    console.log ("El cliente ha seleccionado la siguiente cantidad:", contador, "del producto ", title)
  }


  return (
    <article className="card w-96 bg-base-100 shadow-xl bg-secondary-focus text-center mt-20 ">
        
        <h1>{title}</h1>
        <img src={img} alt=""/>
        <h2>{price}</h2>
        <ItemCount stock={17} initial={1} onAdd ={onAdd}/>

    </article>
  )
}

export default Item