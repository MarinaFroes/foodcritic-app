import React from "react";
import styled from "styled-components";
import logo from "./images/logo.svg";


const HeaderContainer = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  background-image: linear-gradient(#193377, #8C46BD);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-left: 1rem;
`;

const Logo = styled.img`
  height: 2rem;
`;

export default function Header( { title }) {
  return (
    <HeaderContainer id="header">
      <Logo src={logo} alt=""/>
      <Heading>{title}</Heading>
    </HeaderContainer>
  )
};

