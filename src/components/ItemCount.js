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
        <div className='flex-col text-center mr-96'>

            <div className='pt-5 -ml-36 mb-12'>
                <button onClick={disminuirContador}className="btn text-center">-</button>
                <span className='pl-5 pr-5'>{contador}</span>
                <button onClick={agregarContador} className="btn tex-center">+</button>

                
            </div>
            
            <div className='-ml-36'>
                <button className='btn' disabled={contador === 0} onClick={()=>onAdd(contador)}>Agregar a Carrito</button>
            </div>



        </div>
           

                
        
        
    );   



        
    }

    

export default ItemCount














