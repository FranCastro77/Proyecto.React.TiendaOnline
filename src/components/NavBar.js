import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/images/logo.png'

const NavBar = () => {
  return (
    <header>
      <nav className="mb-10">
        <div className="align-center inline-flex gap-x-20 text-align ml-20 mt-10">
          <img src={logo} alt="" />
          <ul className="inline-flex gap-x-20 mt-20 pt-10">
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

        </div>
        
      </nav>
    </header>
  )
}

export default NavBar