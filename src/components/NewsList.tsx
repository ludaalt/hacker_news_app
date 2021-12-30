import React from 'react';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';
import { AppProps } from '../types/types';

const NewsList: React.FC<AppProps> = ({ news }) => {
  return (
    <div>
      {news &&
        news.map((newsItem: any, index: number) => {
          return (
            newsItem && (
              <Link to={`/items/${newsItem.id}`} key={newsItem.id}>
                <NewsItem key={index} item={newsItem} />
              </Link>
            )
          );
        })}
    </div>
  );
};

export default NewsList;
