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
          <ul className="inline-flex gap-x-5 mt-20 pt-10">
          <li>
            <NavLink to={'/Item'}>QUIENES SOMOS </NavLink>
            {/* <a href = "/#" > Quienes somos </a> */}
          </li>
          
            
          <li>
          <NavLink to={'/'}>COONTACTANOS </NavLink>
            {/* <a href = "/#" > Contactanos </a> */}
          </li>
          
          <li>
          <NavLink to={'/'}>NUESTRAS PROPUESTAS </NavLink>
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