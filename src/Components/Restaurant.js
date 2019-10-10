import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';

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

export default function Restaurant({ name, category, location, rate }) {
  return (
    <RestaurantInfo>
      <Name>{name} - {location}</Name>
      {/* <p>Rate: {rate}</p> */}
      <StarRating rating={rate}/>
      {/* <Info>Category: {category}</Info>
      <Info>Location: {location}</Info>
      <Info>Rating: {rate}</Info> */}
    </RestaurantInfo>
  )
}
