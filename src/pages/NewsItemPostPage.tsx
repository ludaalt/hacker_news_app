import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { timestampToDate } from '../services/timestampToDate';
import Button from '../components/Button';

import { useDispatch } from 'react-redux';
import { updateComments } from '../services/updateComments';
import { renderComments } from '../services/renderComments';

const NewsItemPostPage = ({ news, comments }: any) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newsItem = news.find((item: any) => item.id == id);

  const rootElementToRender = document.querySelector('.newsItemPostContainer ul');

  useEffect(() => {
    console.log(comments);
    updateComments(dispatch, Number(id));
    renderComments(comments, rootElementToRender);
  }, []);

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
        <p>{newsItem && timestampToDate(newsItem.time)}</p>
        <p>{newsItem && newsItem.user}</p>
        <p>{newsItem && newsItem.comments_count}</p>

        <ul>{comments.length > 0 ? null : <li>No comments yet</li>}</ul>
      </div>
    </>
  );
};

export default NewsItemPostPage;
