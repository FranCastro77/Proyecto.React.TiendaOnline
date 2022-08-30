import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title, description, image}) => {
  return (
    <div>
        
        <h1>{title}</h1>
        <h2>{description}</h2>
        <img src={image} alt=""/>
        <ItemCount/>
        </div>
  )
}

export default Item