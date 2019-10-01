import React from 'react';
import styled from 'styled-components';

const RestaurantInfo = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  margin: 1rem;
`;

const Name = styled.h3`
  font-size: 1rem;
`;

const Info = styled.p`
  font-size: 0.8rem;
`;

export default function Restaurant({ name, category, location, evaluation }) {
  return (
    <RestaurantInfo>
      <Name>{name}</Name>
      <Info>{category}</Info>
      <Info>{location}</Info>
      <Info>{evaluation}</Info>
    </RestaurantInfo>
  )
}
