import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Review } from './reviews/Review.jsx';
import ShopInformation from './shopInfo/ShopInformation';

export const ShopOverview = () => {
  const [shop, setShop] = useState('');
  return (
    <div>
      <h1>Shop Overview</h1>
      <Link to='/'>
        <button>Logout</button>
      </Link>
      <Review />
      <ShopInformation />
      <h1>Jquery is my nemesis</h1>
    </div>
  )
}