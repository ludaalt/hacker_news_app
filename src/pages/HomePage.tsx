import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../components/Button';
import NewsList from '../components/NewsList';

import { getNews } from '../services/getNews';
import { updateNews } from '../services/deleteNews';
import { AppProps } from '../types/types';

const HomePage: React.FC<AppProps> = ({ news, comments }) => {
  const dispatch = useDispatch();
  const getNewsFunction = () => {
    dispatch(updateNews());
    dispatch(getNews());
  };
  return (
    <>
      <Button title="Update News" buttonFunction={getNewsFunction} />
      <NewsList news={news} comments={comments} />
    </>
  );
};

export default HomePage;
