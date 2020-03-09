import React from 'react'
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

function RestaurantForm({ handleSubmit, handleChange }) {
  return (
    <Form onSubmit={handleSubmit}>

      <Label htmlFor="name">Name</Label>
      <InputText
        type="text"
        id="name"
        name="name"
        required
        onChange={handleChange}
      />

      <Label htmlFor="location">Location</Label>
      <InputText
        type="text"
        id="location"
        name="location"
        required
        onChange={handleChange}
      />

      <Label htmlFor="category">Category</Label>
      <Select id="category" name="category" onChange={handleChange} required>
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
        onChange={handleChange}
      />

      <Label htmlFor="rating">Rating</Label>
      <Select id="rating" name="rating" onChange={handleChange} required>
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

export default RestaurantForm