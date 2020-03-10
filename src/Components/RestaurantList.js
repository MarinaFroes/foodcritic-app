import React from 'react'
import styled from 'styled-components'

import AddButton from './AddButton'
import Section from './Section'
import RestaurantPreview from './RestaurantPreview'
import { getInitialData } from '../utils/api'

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
    users: [],
    restaurants: null
  }

  componentDidMount() {
    getInitialData()
      .then(({ users, restaurants }) => {
          this.setState({
            isLoaded: true,
            users: users,
            restaurants: restaurants
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
    return (
      <Section heading={restaurants === null ? "Loading..." : "List of Restaurants"}>
        <List>
          {restaurants !== null &&
            restaurants.map((restaurant, index) => (
              <RestaurantPreview
                key={index}
                rid={restaurant.rid}
                name={restaurant.name}
                location={restaurant.location}
                ratings={restaurant.ratings}
              />
            ))
          }
        </List>
        <ButtonContainer>
          <AddButton />
        </ButtonContainer>
      </Section>
    )
  }
}

export default RestaurantList

