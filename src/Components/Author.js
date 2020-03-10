import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AuthorInfo = styled.div`
  margin: 0.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  color: silver;
  font-size: 1rem;
  margin: 0.3rem 1rem;
`;

export default function Author({ name, github, linkedin, gmail, stack }) {
  return (
    <React.Fragment>
      <AuthorInfo>
        <p>{stack}: {name}</p>
        <IconContainer>
          <Icon href={github} target="_blank">
            {<FaGithub />}
          </Icon>
          <Icon
            href={linkedin}
            target="_blank"
          >
            {<FaLinkedin />}
          </Icon>
          <Icon href={`mailto:${gmail}`} target="_blank">
            {<FaEnvelope />}
          </Icon>
        </IconContainer>
      </AuthorInfo>
    </React.Fragment>
  )
}

Author.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  gmail: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
}
