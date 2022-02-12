import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import { HeaderProps } from '../types/props';

import Button from './Button';

const Header: React.FC<HeaderProps> = ({ updateNews, updateComments }) => {
  const { y } = useWindowScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="header-container">
      {location.pathname === '/' ? (
        <>
          <h1 style={{ marginRight: y < 800 ? `${y}px` : '800px' }}>Hacker News</h1>
          <Button title="Update News" className="update-news-button" hadleFunction={updateNews} />
        </>
      ) : (
        <>
          <Button title="Back" className="back-button" hadleFunction={goBackToHomePage} />
          <Button
            title="Update comments"
            className="update-comments-button"
            hadleFunction={updateComments}
          />
        </>
      )}
    </div>
  );
};

export default Header;
