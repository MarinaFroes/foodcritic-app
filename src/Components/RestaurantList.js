import React from 'react';
import Restaurant from './Restaurant';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const RESTAURANT_INFO = [
  {
    name: "Restaurant 1",
    category: "Category 1",
    location: "Location 1",
    rate: 10
  },
  {
    name: "Restaurant 2",
    category: "Category 2",
    location: "Location 2",
    rate: 9
  },
  {
    name: "Restaurant 3",
    category: "Category 3",
    location: "Location 3",
    rate: 5
  }
]

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
