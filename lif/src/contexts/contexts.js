import React, { createContext, useState } from "react";


// export the context so that other components can import
export const StoreContext = createContext();

function StoreContextProvider(props) {

  const [cartItems,setCartItems] = useState([]);

  function addToCart(item){
    setCartItems(cartItems.concat(item))
  }

  function removeFromCart(item){
    for (let i = 0 ; i < cartItems.length ; i++ ) {
        if (cartItems[i] === item){
            setCartItems(cartItems.splice(i,1))
            return;
        }
    }
  }

  function setQuantity(item, num) {
      setCartItems(cartItems.filter( i => !(i === item)))
      for (let item = 0 ; item < num ; item ++){
        setCartItems(cartItems.pop(item))
      }
  }

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setQuantity,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider; // export this component as default
