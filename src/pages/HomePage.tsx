import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import NewsList from '../components/NewsList';
import { getNews } from '../services/getNews';
import { deleteNews } from '../services/deleteNews';
import { upPageFunction } from '../services/upPageFunction';
import { AppProps } from '../types/types';

const HomePage: React.FC<AppProps> = ({ news, comments }) => {
  const updateNews = () => {
    dispatch(deleteNews());
    dispatch(getNews());
  };

  const dispatch = useDispatch();
  useEffect(() => {
    updateNews();
    setInterval(updateNews, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header page="home" updateNews={updateNews} />
      <NewsList news={news} comments={comments} />

      <button className="button to-up-button" onClick={upPageFunction}>
        Up
      </button>
    </>
  );
};

export default HomePage;
