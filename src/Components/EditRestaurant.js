import React, { Component } from 'react'
import { getRestaurants, editRestaurant } from '../utils/api'
import Section from './Section'
import { Redirect } from 'react-router-dom'
import RestaurantForm from './RestaurantForm'

class EditRestaurant extends Component {
  state = {
    restaurants: null,
    name: "",
    location: "",
    category: "",
    rating: "",
    cuisine: "",
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
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, location, category, cuisine, rating } = this.state
    const author = "marinacosta"
    const { rid } = this.props.match.params

    editRestaurant({ rid, name, location, category, cuisine, rating, author })

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
                handleChange={this.handleChange}
                restaurant={restaurant}
              />
            </>
            )
          }

        </Section>
      )
    }
  }


export default EditRestaurant