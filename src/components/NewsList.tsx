import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NewsItem from './NewsItem';
import { AppProps, NewsItemType } from '../types/types';

const NewsList: React.FC<AppProps> = ({ news }) => {
  const ListContainer = styled.div`
    margin-top: 142px;
  `;

  const LinkContainer = styled.div`
    border: 5px solid transparent;
  `;
  console.log(news);
  return (
    <ListContainer>
      {news &&
        news.map((item: NewsItemType, index: number) => {
          return (
            item && (
              <LinkContainer key={index}>
                <Link to={`/items/${item.id}`} key={item.id}>
                  <NewsItem
                    title={item.title}
                    index={index + 1}
                    points={item.points}
                    user={item.user}
                    time={item.time}
                  />
                </Link>
              </LinkContainer>
            )
          );
        })}
    </ListContainer>
  );
};

export default NewsList;
