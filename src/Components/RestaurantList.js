import React from 'react';
// import Restaurant from './Restaurant';
import styled from 'styled-components';
import AddButton from './AddButton';
import Section from './Section';
// import { RESTAURANT_INFO } from './restaurantsInfo';
import { getRestaurants } from '../utils/api'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #fff;
`;

class RestaurantList extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    users: []
  }

  componentDidMount() {
    fetch(getRestaurants())
      .then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            restaurants: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { restaurants } = this.state
    const { error } = this.state
    return (
      <Section heading="List of Restaurants">
        <List>
          {/* {
            RESTAURANT_INFO.map(info => (
              <Restaurant
                name={info.name}
                location={info.location}
                rate={info.rate}
                key={info.name}
              />
            ))
          } */}

        </List>
        <ButtonContainer>
          <AddButton />
        </ButtonContainer>
      </Section>
    )
  }
}

export default RestaurantList

