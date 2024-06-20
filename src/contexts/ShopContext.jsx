import React,{createContext,useState} from "react";
import Product_List from "../All_Products";

export const ShopContext = createContext(null);

function ShopContextProvider(props){
    const [selectedProduct, setSelectedProduct] = useState(null);
    const contextValue = {Product_List,selectedProduct,setSelectedProduct};

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;