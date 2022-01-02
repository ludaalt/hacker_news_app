import React from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';
import { getNews } from '../services/getNews';
import { deleteNews } from '../services/deleteNews';

import { AppProps } from '../types/types';

const Header: React.FC<AppProps> = () => {
  const dispatch = useDispatch();
  const updateNews = () => {
    dispatch(deleteNews());
    dispatch(getNews());
  };
  return (
    <>
      <h1>Hacker News</h1>
      <Button title="Update News" buttonFunction={updateNews} />
    </>
  );
};

export default Header;
