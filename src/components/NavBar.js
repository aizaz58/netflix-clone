import React, { useState } from 'react'
import "./navBar.css"
import netflix from "../img/netflix-logo.png"
import avatar from "../img/avatar.png"
import { useStateContext } from '../context/stateProvider'
const NavBar = () => {
  const [navBlack, setnavBlack] = useState(true)
  const {InView} =useStateContext()
  

  return (
    <div className={`w-full fixed ${!InView && "bg-textColor" } transition-all duration-500 ease-in-out  flex items-center justify-center md:px-5 px-2 mt-4 md:mt-0 z-50` }>
    <div className='flex justify-between w-full items-center'>

    <img className='w-20 md:h-20 object-contain cursor-pointer' src={netflix} alt='logo'></img>
    <img className='nav_avatar w-6 h-6 cursor-pointer rounded-full bg-gray-300 ' src={avatar} alt='avatar'></img>
    
    </div>
    </div>
  )
}

export default NavBar