import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  padding: 1rem;
`
const StyledInfo = styled.p`
  font-size: 1.2rem;
  padding: 0.5rem;
`

function RestaurantDetails({ location, category, cuisine, rating }) {
  return (
    <RestaurantContainer>
      <StyledTitle>Restaurant Info</StyledTitle>
      <StyledInfo><strong>Location:</strong> {location}</StyledInfo>
      <StyledInfo><strong>Category:</strong> {category}</StyledInfo>
      <StyledInfo><strong>Cuisine:</strong> {cuisine}</StyledInfo>
      <StyledInfo><strong>Rating:</strong> {rating}</StyledInfo>
    </RestaurantContainer>
  )
}

export default RestaurantDetails

RestaurantDetails.propTypes = {
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}