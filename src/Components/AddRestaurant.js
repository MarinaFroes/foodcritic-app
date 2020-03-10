import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Section from './Section'
import RestaurantForm from './RestaurantForm'
import { saveRestaurant } from '../utils/api'

class AddRestaurant extends Component {
  state = {
    toList: false
  }
  
  handleSubmit = (event, data) => {
    event.preventDefault();
    const { name, location, category, cuisine, rating } = data
    const author = "marinacosta"
    
    saveRestaurant({ name, location, category, cuisine, rating, author })

    this.setState({
      toList: true
    })
  }
  
  render() {
    const { toList } = this.state

    if (toList === true) {
      return <Redirect to="/restaurant_list" />
    }

    return (
      <Section heading="Restaurant Info">
        <RestaurantForm
          handleSubmit={this.handleSubmit}
        />
      </Section>
    )
  }
  
}

export default AddRestaurant