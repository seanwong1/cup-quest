/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem.jsx';

const ShopMenu = ({ menu }) => {
  let key = 0;
  return (
    <div className="overview_menu">
      {menu.map((item) => {
        console.log('inside the menu map function');
        key++;
        return <MenuItem item={item} key={key}/>
      })}
    </div>
  )
}

export default ShopMenu;