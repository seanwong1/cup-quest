import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const ShopOverview = () => {
  const [shop, setShop] = useState('');
  return (
    <div>
      <h1>Shop Overview</h1>
      <Link to='/'>
        <button>Logout</button>
      </Link>
      <h1>Jquery rulez</h1>
    </div>
  )
}