import React, { useContext } from "react";
//import links
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { IoIosEye } from "react-icons/io";
import {CartContext} from '../context/CartContext'

const Product = ({ product }) => {
const {addToCart} = useContext(CartContext)

  // desturture product
  const { id, image, category, title, price } = product;
  // console.log(product);
  return (
    <div>
      <div
        className="border rounded-2xl border-slate-200 h-[300px] mb-4
      relative overflow-hidden group transition"
      >
        <div
          className="w-full h-full flex justify-center 
        items-center  "
        >
          {/*image*/}
          <div
            className="w-[200px] mx-auto flex justify-center items-center"
          >
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          {/* button */}
          <div className="absolute top-0 -right-11 group-hover:right-5
          p-2 flex flex-col items-center justify-center 
          gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={()=> addToCart(product,id)}>
              <div className="flex justify-center items-center rounded-sm text-white w-12 h-12 bg-red-500 ">
                <BiPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className=" w-12 h-12 bg-slate-400 rounded-sm flex justify-center items-center 
           text-primary drop-shadow-xl"
            >
              <IoIosEye />
            </Link>
          </div>
        </div>
      </div>
      {/* category,title,price */}
      <div>
        <div className="text-sm font-semibold capitalize text-red-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold mb-1" >$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
