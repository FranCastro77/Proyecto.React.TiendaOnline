import React from 'react'
import Picturehome from "../assets/images/Home_picture.jpg"


const Home = () => {

    
  return (
    <div>
        <h1 className="text-center font-sans text-4xl mb-10">BIENVENIDOS</h1>
        <img src={Picturehome} alt="" />
       
    </div>
  )
}

export default Home