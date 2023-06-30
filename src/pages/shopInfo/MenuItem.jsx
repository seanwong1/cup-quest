/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const MenuItem = ({ item, rating }) => {

  // grab info for average rating for that specific drink of the shop in database
  const totalStars = [5, 4, 3, 2, 1];

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
      {totalStars.map((starNo) => {
        if (starNo <= rating) {
          return <span key={starNo} className="overview_menuItem--rating">&#9733;</span>
        } else if (!Number.isInteger(rating)) {
          return <span key={starNo} className="overview_menuItem--rating">&#x2bea;</span>
        } else {
          return <span key={starNo} className="overview_menuItem--rating">&#9734;</span>
        }
      })}
    </div>
  )
}

export default MenuItem;