import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StarRating from './StarRating'
import PropTypes from 'prop-types'

const RestaurantInfo = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: #caccd3;
  margin: 0.5rem 0;
  padding: 1rem;
  height: 6rem;
  text-decoration: none;
  &:active {
    color: #9d9fa6;
  }
`;

const Name = styled.h3`
  font-size: 1rem;
  margin: 0.5rem;
  color: #000;
`;

function RestaurantPreview({ name, location, rating, rid }) {

    return (
      <RestaurantInfo to={`/restaurant/${rid}`}>
        <Name>{name} - {location}</Name>
        <StarRating rating={rating} />
      </RestaurantInfo>
    )
}

export default RestaurantPreview

RestaurantPreview.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  rid: PropTypes.string.isRequired,
}
