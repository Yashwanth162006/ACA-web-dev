import React, { useContext } from 'react'
import { ShopContext } from '../../contexts/ShopContext'
import Product from './Product'
import './Favourites.css'
import Product_List from '../../All_Products'

const Favorites = () => {
  const {favouriteItems} = useContext(ShopContext)
  
  function createFavourite(favourite,i){
    if(!favourite){
      return;
    }else{
      const product = Product_List[i];
      return <Product key={product.id} src={product.src1} name={product.name} brand={product.brand} rating={product.rating} price={product.price} id={product.id}/>
    }
  }
  return (
    <div className='favourites-container'>
      <div>
        <h1>Favourite Products</h1>
        {favouriteItems.filter((favourite)=>favourite===1).length===0?<p>You have no favourites</p>:null}
        <div>{favouriteItems.map(createFavourite)}</div>
      </div>
    </div>
  )
}

export default Favorites
