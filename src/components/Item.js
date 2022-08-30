import React from 'react'
import ItemCount from './ItemCount'

const Item = ({id, title, price, stock}) => {
  return (
    <div>
        
        <h2>{id}</h2>
        <h1>{title}</h1>
        <span>{price}</span>
        <ItemCount/>
        </div>
  )
}

export default Item