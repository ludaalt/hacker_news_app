import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NewsItem from '../components/NewsItem';
import Comments from '../components/Comments';
import { StateType, NewsItemType } from '../types/types';

export interface PostPageProps {
  updateData: (mode: string, id?: number | undefined) => void;
}

const NewsItemPostPage: React.FC<PostPageProps> = ({ updateData }) => {
  const news = useSelector((state: StateType) => state.data?.news);
  const comments = useSelector((state: StateType) => state.data?.comments);

  const { id } = useParams();

  useEffect(() => {
    updateData('news');
    updateData('comments', Number(id));
    const updateTimer = setInterval(() => updateData, 60000);

    return () => {
      clearInterval(updateTimer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newsItem = useMemo(
    () => news && news.find((item: NewsItemType) => item.id === Number(id)),
    [news, id]
  );

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

export default NewsItemPostPage;
