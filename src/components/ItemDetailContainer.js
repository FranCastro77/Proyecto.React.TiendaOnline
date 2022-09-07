import {useEffect, useState} from 'react'
import myProducts from "../components/myProducts.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {Link} from "react-router-dom";



const ItemDetailContainer = () => {

  // const getItem = () => { 
    
  //    return new Promise((resolve => {
  //     setTimeout(()=>{
  //       resolve (myProducts)
  //     }, 2000);
  //    }) 
  // }


  const {id} = useParams();

  const [item, setItem] = useState({});

    
  useEffect(()=>{

    new Promise((resolve) =>{

      setTimeout(() => {
        
            resolve(myProducts.find((p)=>p.id === id));
        }, 4000)
    }).then((data)=>{

      setItem(data)
    })

  }, [id])
    

      return (
        <>
    
      {/* <ul>
          <li>
            <NavLink className= "btn btn-active btn-ghost" to={'/Item'}>GoBack</NavLink>
            {/* <a href = "/#" > Quienes somos </a> */}
          {/* </li>
      </ul>   */} 


        <Link to={`/Item/:id/${item.id}`} key={item.id}>
            {item.length ?  item.map((item) => <ItemDetail key={item.id} {...item} />)  : <h3>Estamos por mostrar tu eleccion...</h3>}  
        {/* {Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>} */}
        </Link>
    
            
        </>
      ) 
  }
  
    
    export default ItemDetailContainer