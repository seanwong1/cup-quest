import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ReviewPost } from './ReviewPost.jsx';

export const Review = () => {
  const [reviewList, setReviewList] = useState([]);
  return (
    <div>
      <ReviewPost reviewList={reviewList} setReviewList={setReviewList}/>
    </div>
  )
}