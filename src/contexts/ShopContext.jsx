import React,{createContext,useState,useEffect} from "react";
import Product_List from "../All_Products";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const loadFromLocalStorage = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
    return defaultValue;
  };

export const ShopContext = createContext(null);
function getDefaultCart(){
    let cart = [];
    for(let i=0;i<Product_List.length;i++){
        cart[i] = 0;
    }
    return cart;
}
function getDefaultFavourites(){
    let favourites = [];
    for(let i=0;i<Product_List.length;i++){
        favourites[i] = false;
    }
    return favourites;
}
function ShopContextProvider(props){
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState(loadFromLocalStorage('cartItems', getDefaultCart()));
    const [favouriteItems,setFavouriteItems] = useState(getDefaultFavourites());

    useEffect(() => {
        saveToLocalStorage('cartItems', cartItems);
      }, [cartItems]);
    
    function addToCart(id,qty){
        let items = [...cartItems];
        items[id-1] = qty;
        setCartItems(items);
        toast('Added To Cart');
    }
    function removeFromCart(id){
        let items = [...cartItems];
        items[id-1] = 0;
        setCartItems(items);
        toast('Removed From Cart');
    }
    function addToFavourites(id){
        let favourites = favouriteItems;
        for(let i=0;i<favouriteItems.length;i++){
            if(id===i+1){
                favourites[i] = true;
            }
        }
        setFavouriteItems(favourites);
    }
    function removeFromFavourites(id){
        let favourites = favouriteItems;
        for(let i=0;i<favouriteItems.length;i++){
            if(id===i+1){
                favourites[i] = false;
            }
        }
        setFavouriteItems(favourites);
    }
    const contextValue = {Product_List,selectedProduct,setSelectedProduct,cartItems,setCartItems,favouriteItems,setFavouriteItems,addToCart,removeFromCart,addToFavourites,removeFromFavourites};
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;