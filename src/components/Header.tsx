import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import { HeaderProps } from '../types/props';

import styled from 'styled-components';

import Button from './Button';

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #fc6600;
  top: 0;
  padding: 35px;
  font-size: 25px;
  z-index: -100;
`;

const MainTitle = styled.div`
  font-family: sans-serif;
  color: #fff;
`;

const Header: React.FC<HeaderProps> = ({ updateNews, updateComments }) => {
  const { y } = useWindowScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      {location.pathname === '/' ? (
        <>
          <MainTitle style={{ marginRight: y < 800 ? `${y}px` : '800px' }}>Hacker News</MainTitle>
          <Button title="Update News" className="update-news-button" hadleFunction={updateNews} />
        </>
      ) : (
        <>
          <Button title="Back" className="back-button" hadleFunction={goBackToHomePage} />
          <Button title="Update comments" hadleFunction={updateComments} />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
