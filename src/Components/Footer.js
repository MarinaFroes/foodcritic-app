import React from 'react'
import styled from 'styled-components'

import Author from './Author'
import { AUTHOR_INFO } from './authorsInfo'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  color: #000;
  margin: 1rem;
  border-top: 1.5px solid #f2f2f2;
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      {
        AUTHOR_INFO.map(info => (
          <Author
            key={info.name}
            name={info.name}
            stack={info.stack}
            github={info.github}
            linkedin={info.linkedin}
            gmail={info.gmail}
          />
        ))
      }
    </FooterContainer>
  )
};

