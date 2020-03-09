import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Section from './Section'
import RestaurantForm from './RestaurantForm'
import { saveRestaurant } from '../utils/api'

class AddRestaurant extends Component {

  state = {
    name: "",
    location: "",
    category: "",
    rating: "",
    cuisine: "",
    toList: false
  }
  
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state[name])
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { name, location, category, cuisine, rating } = this.state
    const author = "marinacosta"
    
    saveRestaurant({ name, location, category, cuisine, rating, author })

    this.setState({
      name: "",
      location: "",
      category: "",
      rating: "",
      cuisine: "",
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
          handleChange={this.handleChange}
          restaurant={null}
        />
      </Section>
    )
  }
  
}

export default AddRestaurant