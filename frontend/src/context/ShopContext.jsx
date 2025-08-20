import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
{
  /*This is a Context API*/
}

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  {
    /*when we add variable,state variable or a function inside this value object then we can access it in any component using the context API */
  }
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
