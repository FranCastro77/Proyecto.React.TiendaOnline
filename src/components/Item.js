import React from 'react'
import {Link} from "react-router-dom";

const Item = ({id, title, URLImg, price}) => {

  

  return (
    <article className="card w-96 bg-base-100 shadow-xl text-center mt-20 ">
        
        <h1 className="font-sans text-2xl">{title}</h1>
        <Link to= {`/Item/${id}`} key={id}>
        <img src={URLImg} alt=""/>
        </Link>
     
        <h2 className="font-sans text-2xl">Precio: $ {price}</h2>


    </article>
  )
}

export default Item