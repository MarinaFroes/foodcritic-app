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

  handleSubmit = (event, data) => {
    event.preventDefault();
    const { name, location, category, cuisine, rating } = data
    const author = "marinacosta"
    const { rid } = this.props.match.params

    editRestaurant({ rid, name, location, category, cuisine, rating, author })

    this.setState({
      toList: true
    })
  }

  render() {
    const { rid } = this.props.match.params
    const { restaurants } = this.state

    const restaurant = restaurants !== null ? restaurants.filter(restaurant => restaurant.rid === rid) : null

    console.log("---RESTAURANT---")
    console.log(restaurant)

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
              rating="4"
            />
          </>
          )
        }

      </Section>
    )
  }
}


export default EditRestaurant