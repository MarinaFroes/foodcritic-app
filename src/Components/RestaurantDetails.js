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
      <StyledTitle>{name}</StyledTitle>
      <StyledInfo>Location: {location}</StyledInfo>
      <StyledInfo>rid: {rid}</StyledInfo>
      <StyledInfo>Category: {category}</StyledInfo>
      <StyledInfo>Cuisine: {cuisine}</StyledInfo>
    </RestaurantContainer>
  )
}

export default RestaurantDetails