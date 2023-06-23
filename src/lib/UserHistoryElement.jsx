import React, { useState, useEffect } from 'react';

const UserHistoryElement = (props) => {
  return (
    <div className='history-element'>
      <div className='location-name'></div>
      <div className='review-content'>
        <div className='review-stars'></div>
        <div className="review-date"></div>
        <div className="review-drink"></div>
      </div>
    </div>
  );
};

export default UserHistoryElement;