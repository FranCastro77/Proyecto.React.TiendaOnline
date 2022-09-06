import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/images/logo.png'
import {NavLink} from "react-router-dom";


const NavBar = () => {
  return (
    <header>
      <nav className="mb-10">
        <div className="align-center inline-flex gap-x-5 text-align ml-20 mt-10">
          <img src={logo} alt="" />
          <ul className="inline-flex gap-x-2 mt-20 pt-10">
          <li>
            <NavLink className= "btn btn-active btn-ghost" to={'/AUs'}>NOSOTROS</NavLink>
            {/* <a href = "/#" > Quienes somos </a> */}
          </li>
          
            
          <li>
          <NavLink className="btn btn-active btn-ghost" to={'/Item'}>TENTATE</NavLink>
            {/* <a href = "/#" > Contactanos </a> */}
          </li>
          
          <li>
          <NavLink className="btn btn-active btn-ghost" to={'/Contact'}>UBICANOS</NavLink>
            {/* <a href = "/#" > Nuestras propuestas </a> */}
          </li>

          <li>
          <NavLink className="btn btn-active btn-ghost" to={'/'}>HOME</NavLink>
            {/* <a href = "/#" > Nuestras propuestas </a> */}
          </li>  
          
          <CartWidget/>
        </ul>

        </div>
        
      </nav>
    </header>
  )
}

export default NavBar