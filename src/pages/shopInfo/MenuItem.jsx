/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

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
      <span className="overview_menuItem--rating">
        {totalStars.map((starNo) => {
          if (starNo <= rating) {
            return <FontAwesomeIcon key={starNo} icon={solidStar} style={{ float: 'right' }} name="fa-star" alt="solid star"/>
          } else if (!Number.isInteger(rating)) {
            return (
              <>
                <FontAwesomeIcon key={starNo} icon={solidStar} style={{ clipPath: 'inset(0 9px 0 0)', float: 'right' }} name="fa-star" />
                <FontAwesomeIcon key={starNo} icon={regularStar} style={{ position: 'absolute', zIndex: 99, right: 0, top: 0,}} name="fa-star" />
              </>
            )
          } else {
            return <FontAwesomeIcon key={starNo} icon={regularStar} style={{ float: 'right'}} name="fa-star" />
          }
        })}
      </span>
    </div>
  )
}

export default MenuItem;

// {totalStars.map((starNo) => {
//   if (starNo <= rating) {
//     return <span key={starNo} className="overview_menuItem--rating">&#9733;</span>
//   } else if (!Number.isInteger(rating)) {
//     return <span key={starNo} className="overview_menuItem--rating">&#x2bea;</span>
//   } else {
//     return <span key={starNo} className="overview_menuItem--rating">&#9734;</span>
//   }
// })}
