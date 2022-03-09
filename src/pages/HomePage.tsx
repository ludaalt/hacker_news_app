import React, { useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import NewsList from '../components/NewsList';
import Button from '../components/Button';
import { upPageFunction } from '../services/upPageFunction';
import { MainPageProps } from '../types/props';

const HomePage: React.FC<MainPageProps> = ({ updateNews }) => {
  const news = useSelector((state: RootStateOrAny) => state.news?.arrayNews);
  const comments = useSelector((state: RootStateOrAny) => state.comments?.arrayComments);

  useEffect(() => {
    updateNews();
    const updateTimer = setInterval(() => updateNews, 60000);

    return () => {
      clearInterval(updateTimer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NewsList news={news} comments={comments} />
      <Button title="Up" className="up" handleFunction={upPageFunction} />
    </>
  );
};

export default HomePage;
