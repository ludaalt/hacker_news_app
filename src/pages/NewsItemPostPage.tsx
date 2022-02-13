import React, { useEffect, SetStateAction } from 'react';
import { useParams } from 'react-router';
import { useSelector, RootStateOrAny } from 'react-redux';
import styled from 'styled-components';

import NewsItem from '../components/NewsItem';
import Comments from '../components/Comments';

import { NewsItemType, NewsItemPostPageProps } from '../types/types';

const NewsItemPostContainer = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  padding: 10px;
  text-align: justify;
  max-width: 60%;
  border-radius: 20px;
  background-color: #cccc;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

const NewsItemPostPage: React.FC<NewsItemPostPageProps> = ({ passCurrentNewsItemId }) => {
  const news = useSelector((state: RootStateOrAny) => state.news?.arrayNews);
  const comments = useSelector((state: RootStateOrAny) => state.comments.arrayComments);

  const { id } = useParams();

  const functionHandler = (id: SetStateAction<string>) => {
    passCurrentNewsItemId(id);
  };

  useEffect(() => {
    id && functionHandler(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newsItem = news && news.find((item: NewsItemType) => item.id === Number(id));

  return (
    <NewsItemPostContainer>
      {newsItem && (
        <NewsItem
          title={newsItem.title}
          url={newsItem.url}
          time={newsItem.time}
          user={newsItem.user}
          commentsCount={newsItem.commentsCount}
          points={newsItem.points}
        />
      )}
      <Comments comments={comments} />
    </NewsItemPostContainer>
  );
};

export default NewsItemPostPage;
