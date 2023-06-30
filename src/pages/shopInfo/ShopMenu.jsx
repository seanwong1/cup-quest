/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem.jsx';

const ShopMenu = ({ menu, rating }) => {
  let key = 0;
  return (
    <div className="overview_menu">
      {menu.map((item) => {
        key++;
        return <MenuItem item={item} key={key} rating={rating} />
      })}
    </div>
  )
}

export default ShopMenu;