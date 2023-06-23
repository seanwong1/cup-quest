import React, { useState } from 'react';
/* eslint-disable react/prop-types */

export const ReviewList = (props) => {
  const [starting, setStarting] = useState(0);
  const back = () => {
    if (starting !== 0) {
      return (
        <button id='reviewListNext' onClick={() => setStarting(starting - 2)}>&#8249;</button>
      )
    }
  }

  const next = () => {
    if (starting !== props.reviewList.length - 1) {
      <button id='reviewListBack' onClick={() => setStarting(starting + 2)}>&#8250;</button>
    }
  }
  return (
    <div className='reviewList'>
      <h1>Reviews List</h1>
      {props.reviewList[starting]}
      {props.reviewList[starting + 1]}
      {back}
      {next}
    </div>
  )
}