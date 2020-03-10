import React, { Component } from 'react'
import { getRestaurants, editRestaurant } from '../utils/api'
import Section from './Section'
import { Redirect } from 'react-router-dom'
import RestaurantForm from './RestaurantForm'

class EditRestaurant extends Component {
  state = {
    restaurants: null,
    toList: false
  }

  componentDidMount() {
    getRestaurants()
      .then(res => {
        this.setState({
          restaurants: res
        })
      })
  }

  handleSubmit = (event, newRestaurant) => {
    event.preventDefault();
    
    const { rid } = this.props.match.params
    editRestaurant(newRestaurant, rid)

    this.setState({
      toList: true
    })
  }

  render() {
    const { rid } = this.props.match.params
    const { restaurants } = this.state

    const restaurant = restaurants !== null ? restaurants.filter(restaurant => restaurant.rid === rid) : null

    const { toList } = this.state

    if (toList === true) {
      return <Redirect to="/restaurant_list" />
    }

    return (
      <Section heading={restaurant !== null ? `Edit ${restaurant[0].name} info` : "Loading..."}>
        {restaurant !== null
          && (
          <>
            <RestaurantForm
              handleSubmit={this.handleSubmit}
              name={restaurant[0].name}
              location={restaurant[0].location}
              category={restaurant[0].category}
              cuisine={restaurant[0].cuisine}
              rating={restaurant[0].rating}
            />
          </>
          )
        }
      </Section>
    )
  }
}


export default EditRestaurant