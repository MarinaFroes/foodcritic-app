import React, { Component } from 'react'
import { getRestaurants } from '../utils/api'
import RestaurantDetails from './RestaurantDetails'

class RestaurantPage extends Component {
  state = {
    restaurants: null
  }

  componentDidMount() {
    getRestaurants()
      .then(res => {
        this.setState({
        restaurants: res
      })
    })
  }

  render() {
    const { rid } = this.props.match.params
    const { restaurants } = this.state

    return (
      <div>
        <p>{rid}</p>
        {
          restaurants !== null && (
            restaurants.map(restaurant => (restaurant.rid === rid && <RestaurantDetails
              name={restaurant.name}
              location={restaurant.location}
              rid={restaurant.rid}
              category={restaurant.category}
            />))
          )
        }
      </div>
    )
  }
}

export default RestaurantPage