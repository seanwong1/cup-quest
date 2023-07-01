import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Review } from './reviews/Review.jsx';
import ShopInformation from './shopInfo/ShopInformation';
/* eslint-disable react/prop-types */

export const ShopOverview = ({ shopID, userId }) => {
  return (
    <div>
      <Link to='/home'>
        <button className="button_back">Back</button>
      </Link>
      <Link to='/home'>
        <span className="logo_home--container">
         <img src="../logo-no-background.svg" alt="CupQuest Logo" className="logo logo_home"/>
        </span>
      </Link>
      <Link to='/'>
        <button className='button_logout'>Logout</button>
      </Link>
      <ShopInformation shopID={shopID} />
      <Review shop={shopID} userId={userId}/>
    </div>
  )
}