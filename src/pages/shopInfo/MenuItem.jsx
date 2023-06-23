/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const MenuItem = ({ item }) => {

  let [isClicked, setClicked] = useState(false)
  const handleClick = (e) => {
    if (isClicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
    // if (e.target.classList.contains('overview_menuItem--unclicked')) {
    //   e.target.classList.remove('overview_menuItem--unclicked');
    //   e.target.classList.add('overview_menuItem--clicked');
    // }
  }

  const clickStyle = {
    border: isClicked ? '2px #95a2a5' : 'none'
  }

  return (
    <div onClick={handleClick} style={clickStyle} className="overview_menuItem">
      <b>{item}</b>
      <span className="overview_menuItem--rating">&#9734;</span>
      <span className="overview_menuItem--rating">&#9734;</span>
      <span className="overview_menuItem--rating">&#9734;</span>
      <span className="overview_menuItem--rating">&#9734;</span>
      <span className="overview_menuItem--rating">&#9734;</span>
    </div>
  )
}

export default MenuItem;