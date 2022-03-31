import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { NewsItemType, CommentsItemType } from '../types/types';

export interface NewsListProps {
  news: Array<NewsItemType> | undefined;
  comments: Array<CommentsItemType> | undefined;
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <NewsContainer>
      {news &&
        news.map((item: NewsItemType, index: number) => {
          return (
            item && (
              <div key={item.id}>
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

const NewsContainer = styled.div`
  margin: auto;
  margin-top: 170px;
  max-width: 50%;
`;

export default NewsList;
