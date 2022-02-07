import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animationFunction } from '../services/animationFunction';
import { HeaderProps } from '../types/props';

const Header: React.FC<HeaderProps> = ({ page, updateNews, updateComments }) => {
  useEffect(() => {
    window.addEventListener('scroll', animationFunction);
  }, []);

  const navigate = useNavigate();
  const goBackToHomePage = () => {
    navigate(-1);
  };

  return (
    <div className="header-container">
      {page === 'home' ? (
        <>
          <h1 className="main-title">
            <a href={window.location.href}>Hacker News</a>
          </h1>
          <button className="button update-news-button" onClick={updateNews}>
            Update News
          </button>
        </>
      ) : (
        <>
          <button className="button back-button" onClick={goBackToHomePage}>
            Back
          </button>
          <button className="button update-comments-button" onClick={updateComments}>
            Update comments
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
