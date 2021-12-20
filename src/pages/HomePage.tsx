import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Button from '../components/Button';
import NewsList from '../components/NewsList';

const HomePage = () => {
  const newsArray = useSelector((state: RootStateOrAny) => state.news?.arrayNews);

  return (
    <>
      <Button />
      <NewsList newsArray={newsArray} />
    </>
  );
};

export default HomePage;
