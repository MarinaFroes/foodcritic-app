import React from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'

const RestaurantInfo = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #caccd3;
  margin: 0.5rem 0;
  padding: 1rem;
  height: 6rem;
`;

const Name = styled.h3`
  font-size: 1rem;
  margin: 0.5rem;
`;

// const Info = styled.p`
//   font-size: 0.8rem;
// `;

function Restaurant({ name, location, ratings }) {
    const ratingsArray = Object.values(ratings)
    const totalOfRatings = Object.keys(ratings).length
    const sumOfRatings = ratingsArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    const avarageRating = sumOfRatings / totalOfRatings

    return (
      <RestaurantInfo>
        <Name>{name} - {location}</Name>
        {/* <Info>{category}</Info> */}
        <StarRating rating={avarageRating} />
      </RestaurantInfo>
    )
}

export default Restaurant