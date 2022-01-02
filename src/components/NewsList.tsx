import React from 'react';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';
import { AppProps, NewsItemType } from '../types/types';

const NewsList: React.FC<AppProps> = ({ news }) => {
  return (
    <div>
      {news &&
        news.map((item: NewsItemType, index: number) => {
          return (
            item && (
              <Link to={`/items/${item.id}`} key={item.id}>
                <NewsItem
                  key={index}
                  title={item.title}
                  points={item.points}
                  user={item.user}
                  time={item.time}
                />
              </Link>
            )
          );
        })}
    </div>
  );
};

export default NewsList;
