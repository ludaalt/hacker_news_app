import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import styled from 'styled-components';
import Button from './Button';

export interface HeaderProps {
  updateData: (mode: string, id?: number | undefined) => void;
  mode: 'news' | 'comments';
}

const Header: React.FC<HeaderProps> = ({ updateData, mode }) => {
  const { y } = useWindowScroll();
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      {mode === 'news' ? (
        <>
          <MainTitle style={{ marginRight: y < 800 ? `${y}px` : '800px' }}>Hacker News</MainTitle>
          <Button
            title="Update News"
            className="update-news-button"
            onClick={() => updateData(mode)}
          />
        </>
      ) : (
        <>
          <Button title="Back" className="back-button" onClick={goBackToHomePage} />
          <Button title="Update comments" onClick={() => updateData(mode)} />
        </>
      )}
    </HeaderContainer>
  );
};

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
  font-size: 40px;
  font-weight: bold;
`;

export default Header;
