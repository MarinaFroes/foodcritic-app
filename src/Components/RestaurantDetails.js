import React from 'react'
import styled from 'styled-components'

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

function RestaurantDetails({ name, location, rid, category, cuisine }) {
  return (
    <RestaurantContainer>
      <StyledTitle>Restaurant Info</StyledTitle>
      {/* <StyledInfo>rid: {rid}</StyledInfo> */}
      <StyledInfo><strong>Location:</strong> {location}</StyledInfo>
      <StyledInfo><strong>Category:</strong> {category}</StyledInfo>
      <StyledInfo><strong>Cuisine:</strong> {cuisine}</StyledInfo>
    </RestaurantContainer>
  )
}

export default RestaurantDetails