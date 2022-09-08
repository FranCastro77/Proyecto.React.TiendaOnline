import React from 'react'
import ItemCount from './ItemCount'
import {Link} from "react-router-dom";

const Item = ({id, title, URLImg, price}) => {

  const onAdd = (contador) => {

    console.log ("El cliente ha seleccionado la siguiente cantidad:", contador, "del producto ", title)
  }


  return (
    <article className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">
        
        <h1 className="font-sans text-2xl">{title}</h1>
        <Link to= {`/Item/${id}`} key={id}>
        <img src={URLImg} alt=""/>
        </Link>
     
        <h2 className="font-sans text-2xl">{price}</h2>
        <ItemCount stock={17} initial={1} onAdd ={onAdd}/>

    </article>
  )
}

export default Item