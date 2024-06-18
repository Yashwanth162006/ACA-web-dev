import React from 'react'
import ProductCard from './Products/ProductCard';
import ProductCarousel from './Products/ProductCarousel';
import { Outlet,NavLink} from 'react-router-dom';
import DSLR_1 from "../Images/DSLR/DSLR-1.png";
import Sketchers_1 from "../Images/Sketchers/Sketchers-1.png";
import Ipad_1 from "../Images/Ipad/Ipad-1.png";
import MacbookPro_1 from "../Images/Macbook Pro/Macbook pro-1.png";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='product-cards-container'>
        <ProductCard src={DSLR_1} name='DSLR' rating={5} brand='Canon' price={159} link='productCarousel1'/>
        <ProductCard src={Sketchers_1} name='Sketchers'rating={4} brand='Sketchers' price={99} link='productCarousel2'/>
        <ProductCard src={Ipad_1} name='Ipad' rating={5} brand='Apple' price={543} link='productCarousel3'/>
        <ProductCard src={MacbookPro_1} name='Macbook Pro'rating={5} brand='Apple' price={890} link='productCarousel4'/>
      </div>
      <div className='product-carousel-container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
