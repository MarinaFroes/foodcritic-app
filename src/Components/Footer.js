import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  color: #000;
  padding: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  color: silver;
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const MARINA_LINKEDIN = "https://www.linkedin.com/in/marina-froes-a-costa/";
const MARINA_GITHUB = "https://github.com/MarinaFroes";
const MARINA_GMAIL = "facosta.marina@gmail.com";

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <p>Front-End by Marina Costa</p>
      <IconContainer>
        <Icon href={MARINA_GITHUB} target="_blank">
          {<FaGithub />}
        </Icon>
        
        <Icon
          href={MARINA_LINKEDIN}
          target="_blank"
        >
          {<FaLinkedin />}
        </Icon>

        <Icon href={`mailto:${MARINA_GMAIL}`} target="_blank">
          {<FaEnvelope />}
        </Icon>
      </IconContainer>
    </FooterContainer>
  )
};

