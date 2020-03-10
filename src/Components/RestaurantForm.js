import React, { Component } from 'react'
import styled from 'styled-components'


const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const InputText = styled.input`
  font-size: 1rem;
  width: 18rem;
  height: 1.8rem;
  background-color: #caccd3;
  margin-bottom: 2rem;
  border: none;
  padding-left: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #949599;
  display: flex;
`;

const Select = styled.select`
  font-size: 1rem;
  width: 18rem;
  height: 1.8rem;
  max-width: 20rem;
  background-color: #caccd3;
  margin-bottom: 2rem;
  border: none;
  border-radius: 0;
`;

const Submit = styled.input`
  align-self: center;
  font-family: Arial;
  background-color: #e9b839;
  color: #fff;
  width: 7rem;
  height: 2rem;
  font-size: 1rem;
  padding: auto;
  border-radius: 5px;
`;

class RestaurantForm extends Component {
  state = {
    name: this.props.name || "",
    location: this.props.location || "",
    category: this.props.category || "",
    cuisine: this.props.cuisine || "",
    rating: this.props.rating || ""
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
  
  render() {
    const { handleSubmit } = this.props
    console.log("---RESTAURANT FORM PROPS---")
    console.log(this.props)

    const { name, location, category, cuisine, rating } = this.state
    
    const newData = {
      name,
      location, 
      category,
      cuisine,
      rating
    }

    return (
      <Form onSubmit={(event) => handleSubmit(event, newData)}>

        <Label htmlFor="name">Name</Label>
        <InputText
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />

        <Label htmlFor="location">Location</Label>
        <InputText
          type="text"
          id="location"
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
          required
        />

        <Label htmlFor="category">Category</Label>
        <Select
          id="category"
          name="category"
          onChange={this.handleChange}
          required
          defaultValue={this.state.category}
        >
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
          value={this.state.cuisine}
          onChange={this.handleChange}
          required
        />

        <Label htmlFor="rating">Rating</Label>
        <Select
          id="rating"
          name="rating"
          onChange={this.handleChange}
          defaultValue={this.state.rating}
          required
        >
          <option value="">--choose a rating--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>

        <Submit type="submit" value="Save" />
      </Form>
    )
  }
  
}

export default RestaurantForm