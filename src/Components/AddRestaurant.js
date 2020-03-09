import React, { Component } from 'react'
// import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import Section from './Section'
import RestaurantForm from './RestaurantForm'
import { saveRestaurant } from '../utils/api'

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 2rem;
// `;

// const InputText = styled.input`
//   font-size: 1rem;
//   width: 18rem;
//   height: 1.8rem;
//   background-color: #caccd3;
//   margin-bottom: 2rem;
//   border: none;
//   padding-left: 0.5rem;
// `;

// const Label = styled.label`
//   font-size: 1rem;
//   color: #949599;
//   display: flex;
// `;

// const Select = styled.select`
//   font-size: 1rem;
//   width: 18rem;
//   height: 1.8rem;
//   max-width: 20rem;
//   background-color: #caccd3;
//   margin-bottom: 2rem;
//   border: none;
//   border-radius: 0;
// `;

// const Submit = styled.input`
//   align-self: center;
//   font-family: Arial;
//   background-color: #e9b839;
//   color: #fff;
//   width: 7rem;
//   height: 2rem;
//   font-size: 1rem;
//   padding: auto;
//   border-radius: 5px;
// `;

class AddRestaurant extends Component {

  state = {
    name: "",
    location: "",
    category: "",
    rating: "",
    cuisine: "",
    toList: false
  }
  // const [name, setName] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [category, setCategory] = useState(null);
  // const [rating, setRating] = useState(null);
  // const [cuisine, setCuisine] = useState(null);
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
    // setName(event.target.name.value);
    // setLocation(event.target.location.value);
    // setCategory(event.target.category.value);
    // setRating(event.target.rating.value);
    // setCuisine(event.target.cuisine.value);
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
        {/* <Form onSubmit={this.handleSubmit}>

          <Label htmlFor="name">Name</Label>
          <InputText
            type="text"
            id="name"
            name="name"
            required
            onChange={this.handleChange}
          />

          <Label htmlFor="location">Location</Label>
          <InputText
            type="text"
            id="location"
            name="location"
            required
            onChange={this.handleChange}
          />

          <Label htmlFor="category">Category</Label>
          <Select id="category" name="category" onChange={this.handleChange} required>
            <option value="">--choose a category--</option>
            <option value="restaurant">Restaurant</option>
            <option value="bar">Bar</option>
            <option value="cafe">Cafe</option>
            <option value="kiosk">Kiosk</option>
            <option value="snack bar">Snack bar</option>
            <option value="other">Other</option>
          </Select>

          <Label htmlFor="cuisine">Cuisine</Label>
          <InputText
            type="text"
            id="cuisine"
            name="cuisine"
            required
            onChange={this.handleChange}
          />

          <Label htmlFor="rating">Rating</Label>
          <Select id="rating" name="rating" onChange={this.handleChange} required>
            <option value="">--choose a rating--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>

          <Submit type="submit" value="Save" />
        </Form> */}
      </Section>
    )
  }
  
}

export default AddRestaurant