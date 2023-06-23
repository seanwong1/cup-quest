import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReviewPost } from './ReviewPost.jsx';
import { ReviewList } from './ReviewList.jsx';
import { ReviewEntry } from './ReviewEntry.jsx';
/* eslint-disable react/prop-types */

export const Review = (props) => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getReviews = () => {
    console.log('1');
    axios.get('/reviews', {
        shop: props.shop
      })
      .then((results) => {
        console.log('2: ', results.data);
        return results.data.map((review) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <ReviewEntry drink={review.drink} comments={review.comments} rating={review.rating} profilePic={review.profilePic} username={review.username}/>
          )
        })
      })
      .then((results) => {
        console.log('3: ', results);
        setReviewList(results);
      })
      .catch((err) => {
        console.log('error in getReviews: ', err);
      })
  }
  return (
    <div>
      <ReviewPost shop={props.shop} reviewList={reviewList} setReviewList={setReviewList} userId={props.userId}/>
      <ReviewList reviewList={reviewList} setReviewList={setReviewList} />
    </div>
  )
}