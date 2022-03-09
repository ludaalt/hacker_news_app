import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, RootStateOrAny } from 'react-redux';
import styled from 'styled-components';

import NewsItem from '../components/NewsItem';
import Comments from '../components/Comments';

import { NewsItemType } from '../types/types';
import { PostPageProps } from '../types/props';

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

const NewsItemPostPage: React.FC<PostPageProps> = ({ updateComments }) => {
  const news = useSelector((state: RootStateOrAny) => state.news?.arrayNews);
  const comments = useSelector((state: RootStateOrAny) => state.comments.arrayComments);

  const { id } = useParams();

  useEffect(() => {
    updateComments(Number(id));
    const updateTimer = setInterval(() => updateComments, 60000);

    return () => {
      clearInterval(updateTimer);
    };

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
