import React from 'react';
import { timestampToDate } from '../services/timestampToDate';
import { NewsItemType } from '../types/types';

const NewsItem: React.FC<NewsItemType> = ({ title, url, points, user, time, commentsCount }) => {
  return (
    <div className="newsItem">
      <h2>{title}</h2>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      ) : null}
      {points ? <p>points: {points}</p> : null}
      <p>author: {user}</p>
      {time ? <p>date: {timestampToDate(time)}</p> : null}
      {commentsCount ? <p>number of comments: {commentsCount}</p> : null}
    </div>
  );
};

export default NewsItem;
