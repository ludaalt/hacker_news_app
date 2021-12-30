import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { timestampToDate } from '../services/timestampToDate';
import Button from '../components/Button';
import Comments from '../components/Comments';

import { useDispatch } from 'react-redux';
import { getComments } from '../services/getComments';

// import { deleteComments } from '../services/deleteComments';

import { AppProps, NewsItemType } from '../types/types';

const NewsItemPostPage: React.FC<AppProps> = ({ news, comments }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newsItem = news && news.find((item: NewsItemType) => item.id === Number(id));

  // const updateCommentsFunction = () => {
  // dispatch(deleteComments());
  // dispatch(getComments(Number(id)));
  // };

  useEffect(() => {
    dispatch(getComments(Number(id)));
  }, []);

  // setInterval(updateCommentsFunction, 60000);

  const goBackToHomePage = () => {
    navigate(-1);
  };

  return (
    <>
      <Button title="Back" buttonFunction={goBackToHomePage} />

      <div className="newsItemPostContainer newsItem">
        <h1>{newsItem && newsItem.title}</h1>
        <a href={newsItem && newsItem.url} target="_blank" rel="noreferrer">
          {newsItem && newsItem.url}
        </a>
        <p>date: {newsItem && timestampToDate(newsItem.time)}</p>
        <p>author: {newsItem && newsItem.user}</p>
        <p>number of comments: {newsItem && newsItem.commentsCount}</p>

        <Comments comments={comments} />
      </div>
    </>
  );
};

export default NewsItemPostPage;
