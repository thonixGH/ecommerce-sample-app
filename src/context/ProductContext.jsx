import React,{children,createContext,useState,useEffect} from 'react'

//create a conetxt
export const ProductContext = createContext ();

const ProductProvider = ({children}) =>{
  //product state
  const [product, setProducts] = useState([]);
  //fetch product
  useEffect (()=>{
    const fetchProducts = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  },[]);

return(
<ProductContext.Provider value={{product}}>{children}</ProductContext.Provider>

) 
}

// const ProductContext = () => {
//   return (
//     <div>ProductContext</div>
//   )
//}

export default ProductProvider