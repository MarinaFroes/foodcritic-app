import React from 'react';
import StarRatings from 'react-star-ratings';

export default function StarRating({rating}) {
  return (
    <div>
      <StarRatings
        numberOfStars={5}
        rating={rating}
        starDimension="20px"
        starRatedColor="#000"
        starEmptyColor="silver"
        starSpacing="10px"
      />
    </div>
  )
}
