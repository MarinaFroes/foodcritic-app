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

export default function RestaurantList() {
  return (
    <React.Fragment>
      <h2>Stored establishments</h2>
      <List>
        {
          RESTAURANT_INFO.map(info => (
              <Restaurant
                name={info.name}
                key={info.name}
                category={info.category}
                location={info.location}
                rate={info.rate}
              />
          ))
        }
      </List>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </React.Fragment>
  )
}
