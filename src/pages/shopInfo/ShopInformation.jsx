import React, { useState, useEffect } from 'react';
import ShopMenu from './ShopMenu.jsx';

const ShopInformation = ({ shop, menu }) => {
  return (
    <div className="overview_info--visible">
      I am a shop with information
      <ShopMenu menu={menu} />
    </div>
  )
}

export default ShopInformation;
