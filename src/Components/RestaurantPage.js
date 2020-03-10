import React, { Component } from 'react'
import { getRestaurants } from '../utils/api'
import RestaurantDetails from './RestaurantDetails'
import Section from './Section'
import EditIcon from './EditIcon'

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
    const restaurant = restaurants !== null ? restaurants.filter(restaurant => restaurant.rid === rid) : null
    
    return (
      <Section heading={restaurant !== null ? restaurant[0].name : "Loading..."}>
        { restaurant !== null 
          && (<>
              <RestaurantDetails
                  location={restaurant[0].location}
                  category={restaurant[0].category}
                  cuisine={restaurant[0].cuisine}
                  rating={restaurant[0].rating}
              />
              <EditIcon rid={rid} />
            </>
            )
        }
      </Section>
    )
  }
}

export default RestaurantPage