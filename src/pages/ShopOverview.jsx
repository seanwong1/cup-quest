import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Review } from './reviews/Review.jsx';
import ShopInformation from './shopInfo/ShopInformation';

export const ShopOverview = () => {
  const [shop, setShop] = useState('');
  return (
    <div>
      <Link to='/'>
        <button className='button_logout'>Logout</button>
      </Link>
      <ShopInformation />
      <Review />
    </div>
  )
}