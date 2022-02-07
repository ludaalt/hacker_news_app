import React from 'react';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';
import { AppProps } from '../types/props';
import { NewsItemType } from '../types/types';

const NewsList: React.FC<AppProps> = ({ news }) => {
  return (
    <div className="news-container">
      {news &&
        news.map((item: NewsItemType, index: number) => {
          return (
            item && (
              <div key={index}>
                <Link to={`/items/${item.id}`} key={item.id}>
                  <NewsItem
                    title={item.title}
                    index={index + 1}
                    points={item.points}
                    user={item.user}
                    time={item.time}
                  />
                </Link>
              </div>
            )
          );
        })}
    </div>
  );
};

export default NewsList;
