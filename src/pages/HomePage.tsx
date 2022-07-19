import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../types/types';
import NewsList from '../components/NewsList';
import Button from '../components/Button';
import { upPageFunction } from '../services/upPageFunction';

export interface HomePageProps {
  mode: string;
  updateData: (mode: string, id?: number | undefined) => void;
}

const HomePage: React.FC<HomePageProps> = ({ updateData, mode }) => {
  const news = useSelector((state: StateType) => state.data?.news);
  const comments = useSelector((state: StateType) => state.data?.comments);

  useEffect(() => {
    updateData(mode);
    const updateTimer = setInterval(() => updateData, 60000);

    return () => {
      clearInterval(updateTimer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NewsList news={news} comments={comments} />
      <Button title="Up" className="up" onClick={upPageFunction} />
    </>
  );
};

export default HomePage;
