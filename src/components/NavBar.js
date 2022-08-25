import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/images/logo.png'

const NavBar = () => {
  return (
    <header>
      <nav>
      <div className="Logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href = "/#" > Quienes somos </a>
          </li>
          
            
          <li>
            <a href = "/#" > Contactanos </a>
          </li>
          
          <li>
            <a href = "/#" > Nuestras propuestas </a>
            </li>
            
          <CartWidget/>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar