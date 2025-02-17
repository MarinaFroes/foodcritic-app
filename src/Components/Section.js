import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionContainer = styled.section`
  margin: 0;
  width: 100%;
`

const Heading = styled.h2`
  margin: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
`

export default function Section({ heading, children }) {
  return (
  <SectionContainer>
    <Heading id={heading.toLowerCase().replace(" ", "-")}>
      {heading}
    </Heading>
      {children}
  </SectionContainer>
  )
}

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}
