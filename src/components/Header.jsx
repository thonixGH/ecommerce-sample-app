import React, { useContext, useEffect, useState } from 'react'
//sidebar context
import { SideBarContext } from '../context/SideBarContext';
//icons 
import {BsCart2} from 'react-icons/bs'

import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
//header state
const [isActive,setIsActive] = useState(true);
  const {isOpen, setIsOpen} = useContext(SideBarContext);
  const {itemAmount} = useContext( CartContext)
  //event Listener
  useEffect (()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive (false);
    })
  })
  return (
    <header  className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'}
    fixed w-full z-10 transition-all`}>  
      <div className='container max-auto flex items-center justify-between
      h-full '>
            {/* logo */}
      <Link to={`/`}>
        <div>
          <img className='w-[40px]' src={Logo} alt="" />
        </div>
      </Link>
      
      {/* cart */}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative 
      '>
        <BsCart2 className='text-4xl'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2
        text-[14px] h-[20px] w-[20px] text-white 
        rounded-full flex justify-center items-center '>{itemAmount}</div>
      </div>
      </div>
    </header>
  )
}

export default Header