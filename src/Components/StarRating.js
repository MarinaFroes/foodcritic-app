import React from 'react'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'

export default function StarRating({rating}) {
  return (
    <div>
      <StarRatings
        numberOfStars={5}
        rating={typeof rating === "number" ? rating : Number(rating)}
        starDimension="20px"
        starRatedColor="#8C46BD"
        starEmptyColor="#fff"
        starSpacing="10px"
      />
    </div>
  )
}

StarRating.propTypes = { 
  rating: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}
