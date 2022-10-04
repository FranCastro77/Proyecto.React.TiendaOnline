import React from 'react'
import logo from '../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <header>
      <nav className="mb-8">
        <div className="align-center inline-flex gap-x-5 text-align ml-20 mt-5 pr-5">
          <NavLink to={'/'}>
            <img src={logo} alt="" />
          </NavLink>
          
          <ul className="inline-flex gap-x-2 mt-20 pt-10">
          <li>
            <NavLink className= "btn btn-active btn-ghost" to={'/Item'}>TODOS LOS PRODUCTOS</NavLink>
          </li>
          
            
          <li>
          <NavLink className="btn btn-active btn-ghost" to={'/category/nuevos'}>NUEVOS</NavLink>
          </li>
          
          <li>
          <NavLink className="btn btn-active btn-ghost" to={'/category/clasicos'}>CLASICOS</NavLink>
          </li>

          <li>
          <NavLink to={'/Cart'}>
            <CartWidget/>
          </NavLink>
          </li>  
          
          
        </ul>

        </div>
        
      </nav>
    </header>
  )
}

export default NavBar