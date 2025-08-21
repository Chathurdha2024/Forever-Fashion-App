import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();
{
  /*This is a Context API*/
}

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartItems] = useState({});

  
  const addToCart = async (itemId,size) => {

    {/*Display an error message if we didn't select a product size as s,m,l,xl*/}    
    if (!size) {
      toast.error('Select Product Size');
      return;
    }



    
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;     {/*items with same itemId and same size(S,M,L,XL) are added together inside the cart*/}
      }
      else{
        cartData[itemId][size] = 1;      {/*items with same itemId and different sizes are added as a new entry to the cart*/}
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;        {/*items with different itemId's that means different items are added as a seperate new entry to the cart*/}
    }

    setCartItems(cartData);

  }

  const getCartCount = () => {
     let totalCount = 0;
     for(const items in cartItems){
        for(const item in cartItems[items]){
            try {
              if (cartItems[items][item] > 0) {
                totalCount += cartItems[items][item];
              }
            } catch (error) {
              
            }
        }
     }
     return totalCount;
  }

 


  
  {/*when we add variable,state variable or a function inside this value object then we can access it in any component using the context API */}
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
