import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import NewsItem from '../components/NewsItem';
import Comments from '../components/Comments';
import Header from '../components/Header';

import { useDispatch } from 'react-redux';
import { getComments } from '../services/getComments';
import { deleteComments } from '../services/deleteComments';
import { upPageFunction } from '../services/upPageFunction';

import { AppProps, NewsItemType } from '../types/types';

const NewsItemPostPage: React.FC<AppProps> = ({ news, comments }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const newsItem = news && news.find((item: NewsItemType) => item.id === Number(id));

  const updateComments = () => {
    dispatch(deleteComments());
    dispatch(getComments(Number(id)));
  };

  useEffect(() => {
    upPageFunction();
    updateComments();
    setInterval(updateComments, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header updateComments={updateComments} />
      <div className="news-item-post-container">
        {newsItem && (
          <NewsItem
            title={newsItem.title}
            url={newsItem.url}
            time={newsItem.time}
            user={newsItem.user}
            commentsCount={newsItem.commentsCount}
          />
        )}

        <Comments comments={comments && comments[0]?.comments} />
      </div>
    </>
  );
};

export default NewsItemPostPage;
