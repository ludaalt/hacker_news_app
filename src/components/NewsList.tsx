import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NewsItem from './NewsItem';
import { AppProps } from '../types/props';
import { NewsItemType } from '../types/types';

const NewsContainer = styled.div`
  margin: auto;
  margin-top: 170px;
  max-width: 50%;
`;

const NewsList: React.FC<AppProps> = ({ news }) => {
  return (
    <NewsContainer>
      {news &&
        news.map((item: NewsItemType, index: number) => {
          return (
            item && (
              <div key={item.title}>
                <Link to={`/items/${item.id}`}>
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
    </NewsContainer>
  );
};

export default NewsList;
