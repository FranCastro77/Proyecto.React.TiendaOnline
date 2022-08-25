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
          <li>Quienes somos</li>
          <li>Como contactarnos</li>
          <li>
            <a href = "http://localhost:3000/#catalogo" > Nuestras propuestas </a>
            </li>
            
          <CartWidget/>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar