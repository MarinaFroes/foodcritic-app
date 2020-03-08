import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StarRating from './StarRating'

const RestaurantInfo = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: #caccd3;
  margin: 0.5rem 0;
  padding: 1rem;
  height: 6rem;
  text-decoration: none;
  &:active {
    color: #9d9fa6;
  }
`;

const Name = styled.h3`
  font-size: 1rem;
  margin: 0.5rem;
  color: #000;
`;

// const Info = styled.p`
//   font-size: 0.8rem;
// `;

function RestaurantPreview({ name, location, ratings, rid }) {
    const ratingsArray = Object.values(ratings)
    const totalOfRatings = Object.keys(ratings).length
    const sumOfRatings = ratingsArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    const avarageRating = sumOfRatings / totalOfRatings

    return (
      <RestaurantInfo to={`/restaurant/${rid}`}>
        <Name>{name} - {location}</Name>
        {/* <Info>{category}</Info> */}
        <StarRating rating={avarageRating} />
      </RestaurantInfo>
    )
}

export default RestaurantPreview