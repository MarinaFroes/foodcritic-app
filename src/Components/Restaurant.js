import React from 'react';
import styled from 'styled-components';

const RestaurantInfo = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  margin: 0.5rem 1rem;
  padding: 1rem;
`;

const Name = styled.h3`
  font-size: 1rem;
`;

const Info = styled.p`
  font-size: 0.8rem;
`;

export default function Restaurant({ name, category, location, rate }) {
  return (
    <RestaurantInfo>
      <Name>{name}</Name>
      <Info>Category: {category}</Info>
      <Info>Location: {location}</Info>
      <Info>Rating: {rate}</Info>
    </RestaurantInfo>
  )
}
