import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BgImg from './images/joseph-gonzalez-unsplash.jpg';

const MainPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 88%;
  background: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
  width: 200px;
  height: 40px;
  margin-bottom: 80px;
  border-radius: 5px;
  font-size: 20px;
  color: #000;

  &:hover {
    background-color: #7e7e7e;
    cursor: pointer;
  }
`;

export default function Home() {
  return (
    <MainPage>
      <Link to="/restaurant_list" style={{textDecoration: 'none'}}>
        <LinkContainer>View List</LinkContainer>
      </Link>
    </MainPage>
  )
}
