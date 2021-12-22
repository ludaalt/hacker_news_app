import React from 'react';

import Button from '../components/Button';
import NewsList from '../components/NewsList';

const HomePage = ({ news, comments, buttonFunction }: any) => {
  return (
    <>
      <Button title="Update News" buttonFunction={buttonFunction} />
      <NewsList newsArray={news} comments={comments} />
    </>
  );
};

export default HomePage;
