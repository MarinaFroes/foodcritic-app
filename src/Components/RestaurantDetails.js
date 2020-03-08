import React from 'react'

function RestaurantDetails({ name, location, rid, category }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>rid: {rid}</p>
      <p>Category: {category}</p>
    </div>
  )
}

export default RestaurantDetails