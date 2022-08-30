import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setcontador] = useState(initial)

    const agregarContador = () => {
        if (contador < stock)
            setcontador(contador + 1)
        }
    
    const disminuirContador = () => {
        if (contador > initial-1)
            setcontador(contador - 1)
        }

    return(
        <>
        
            <button onClick={disminuirContador}>-</button>
            <span>{contador}</span>
            <button onClick={agregarContador} className="btn">+</button>
            <div><button disabled={contador === 0} onClick={()=>onAdd(contador)}>Agregar a Carrito</button></div>
        
        </>
    );   



        
    }

    

export default ItemCount














