import React,{useContext} from 'react'
//import useparams
import { useParams } from 'react-router-dom'
// import product context
import { ProductContext } from '../context/ProductContext'
//import cart context
import { CartContext } from '../context/CartContext'

const ProductDetails = () => {


//get the product from the url
const {id}  = useParams();
const {product}= useContext (ProductContext);
const {addToCart} = useContext(CartContext)

//get the single product based on id

const products = product.find((item)=>{
return item.id === parseInt(id);
})
//if product is not found
if (!products) {
  return(
    <section className='h-screen flex justify-center items-center '>loading...</section>
  )  
}
// destructure product
const {title,price,description,image}=products;
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex
    items-center'>
      <div className="container mx-auto">
        {/* image and text wraper */}
        <div className='flex lg:flex-row items-center '>
        {/* image */}
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm ' src={image} alt="" /></div>
         {/* image */} 
         <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mx-auto lg:mx-0'>{title}</h1>
          <div className='text-xl text-red-500 font-medium
          mb-6'>$ {price}
          </div>
          <div>
          <p className="text-slate-500 mb-8  "> {description}</p>
          <button onClick={()=>{addToCart(products, products.id)}} className='bg-cyan-400 py-4 px-8 hover:bg-slate-500 
        text-slate-500 hover:text-white rounded-md font-semibold'>Add to cart</button>
          </div>
         </div>           
         </div>    
      </div>
    </section>
  )
}

export default ProductDetails