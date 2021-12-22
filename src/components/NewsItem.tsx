import React from 'react';
import { timestampToDate } from '../services/timestampToDate';

const NewsItem = (item: any, key: number, commentsArray: Array<object>) => {
  return (
    <div className="newsItem">
      <h2>{item.item.title}</h2>
      <p>{item.item.points}</p>
      <p>{item.item.user}</p>
      <p>{timestampToDate(item.item.time)}</p>
    </div>
  );
};

export default NewsItem;
