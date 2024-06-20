import React from 'react'
import ProductCard from './Products/ProductCard';
import ProductCarousel from './Products/ProductCarousel';
import { Outlet,NavLink} from 'react-router-dom';
import Product_List from '../All_Products';
import Product from './Products/Product';
import DSLR_1 from '../Images/DSLR/DSLR-1.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  function createProductCard(product){
    const link = 'productCarousel'+product.id;
    return <ProductCard src={product.src1} name={product.name} rating={product.rating} brand={product.brand} price={product.price} link={link} id={product.id} />
  }
  function createSpecialProduct(product){
    return <Product src={product.src1} name={product.name} brand={product.brand} rating={product.rating} price={product.price} id={product.id}/>
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    }
  };
  return (
    <div className='home-container'>
      <div className='home-container-top'>
        <div className='product-cards-container'>
          {Product_List.slice(0,4).map(createProductCard)}
        </div>
        <button><i class="fa-solid fa-chevron-left"></i></button>
        <div className='product-carousel-container'>
          <Outlet />
        </div>
        <button><i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <div className='home-container-mid'>
        <h2>Welcome to our e-commerce platform! </h2>
        <p>Explore a diverse selection of high-quality products and exclusive deals tailored to your needs. Enjoy a seamless shopping experience with us.</p>
      </div>
      <div className='home-container-lower-mid'>
        <h1>Special Products</h1>
        <button>Shop</button>
      </div>
      <div className='home-container-bottom'>
        {Product_List.slice(4,10).map(createSpecialProduct)}
      </div>
    </div>
  )
}

export default Home
