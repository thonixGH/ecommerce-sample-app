import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";
//product provider
import SideBarProvider from "./context/SideBarContext.jsx";
// //sidebar provider
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
     </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
);
