import React from 'react';
import { useDispatch } from 'react-redux';

import { timestampToDate } from '../services/timestampToDate';
import { getComments } from '../services/getComments';

const NewsItem = (item: any, key: number, commentsArray: Array<object>) => {
  const dispatch = useDispatch();
  return (
    <div
      className="newsItem border"
      onClick={() => {
        dispatch(getComments(Number(item.item.id)));
      }}
    >
      <h2>{item.item.title}</h2>
      <p>points: {item.item.points}</p>
      <p>author: {item.item.user}</p>
      <p>date: {timestampToDate(item.item.time)}</p>
    </div>
  );
};

export default NewsItem;
