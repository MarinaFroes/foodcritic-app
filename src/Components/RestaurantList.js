import React from 'react';
import Restaurant from './Restaurant';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { RESTAURANT_INFO } from './restaurantsInfo';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #fff;
`;

export default function RestaurantList() {
  return (
    <React.Fragment>
      <Title>List of Restaurants</Title>
      <List>
        {
          RESTAURANT_INFO.map(info => (
              <Restaurant
              name={info.name}
              location={info.location}
              rate={info.rate}
              key={info.name}
              />
          ))
        }
      </List>
      <ButtonContainer>
        <Fab size="medium" aria-label="add">
          <AddIcon />
        </Fab>
      </ButtonContainer>
    </React.Fragment>
  )
}
