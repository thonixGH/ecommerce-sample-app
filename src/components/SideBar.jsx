import React, { useContext } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { IoArrowForward } from "react-icons/io5";
import {FiTrash2} from 'react-icons/fi'
import {CartContext} from '../context/CartContext'
import { Link } from "react-router-dom";

import CartItem from '../components/CartItem'

const SideBar = () => {
  //from side bar context
  const { isOpen, handleClose } = useContext(SideBarContext);
  // console.log(useContext(CartContext));
  const { cart,clearCart,total,itemAmount } = useContext(CartContext);
  return (
    <div className=  {`${isOpen ? 'right-0' : '-right-full'}
    w-full bg-white fixed top-0 h-full shadow-2xl
   md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20
   px-4 lg:px-[35px]`}>
      <div
        className="flex items-center justify-between py-6
      border-b "
      >
        <div
          className="uppercase text-sm
        font-semibold "
        >
          shopping bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex
      justify-center items-center"
        >
          <IoArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex-col gap-y-2
      h-[500px] lg:[640px] overflow-y-auto overflow-x-hidden 
      border-b "> {cart.map( item =>{
        return <CartItem item={item} key={item.id}/>
      })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          {/* total price */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total: </span>${parseFloat (total).toFixed (2)}</div>
          {/* clear cart icon */}
          <div onClick={clearCart} className="cursor-pointer py-4 bg-red-500
          text-white w-12 h-12 flex
          justify-center items-center text-xl">
            <FiTrash2/>
          </div>
        </div>
        <Link to="/" 
        className="bg-gray-200 flex p-4 justify-center items-center 
        text-primary w-full font-medium">View cart</Link>
        <Link to="/" 
        className="bg-primary flex p-4 justify-center items-center 
        text-white w-full font-medium">Check Out</Link>
      </div>
    </div>
  );
};

export default SideBar;
