import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Button from '../components/Button';
import NewsList from '../components/NewsList';

// import { useDispatch } from 'react-redux';
// import { getNews } from '../services/getNews';
// import { updateNews } from '../services/updateNews';

const HomePage = ({ buttonFunction }: any) => {
  const newsArray = useSelector((state: RootStateOrAny) => state.news?.arrayNews);

  // const dispatch = useDispatch();
  // const update = () => {
  //   return (dispatch: any) => {
  //     dispatch(updateNews());
  //     dispatch(getNews());
  //   };
  // };

  return (
    <>
      <Button title="Update News" buttonFunction={buttonFunction} />
      <NewsList newsArray={newsArray} />
    </>
  );
};

export default HomePage;
