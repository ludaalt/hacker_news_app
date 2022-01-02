import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import NewsList from '../components/NewsList';
import { getNews } from '../services/getNews';
import { AppProps } from '../types/types';

const HomePage: React.FC<AppProps> = ({ news, comments }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);

  // setInterval(getNewsFunction, 60000);

  return (
    <>
      <Header />
      <NewsList news={news} comments={comments} />
    </>
  );
};

export default HomePage;
