import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  background-image: linear-gradient(#193377, #8C46BD);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 5rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-left: 0.8rem;
  font-weight: normal;
`;

const Logo = styled.img`
  height: 2.5rem;
  margin-left: 1.1rem;
`;

export default function Header( { title }) {
  return (
    <HeaderContainer id="header">
      <Link to="/"><Logo src={logo} alt="" /></Link>
      <Heading>{title}</Heading>
    </HeaderContainer>
  )
};

