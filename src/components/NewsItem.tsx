import React from 'react';
import { useDispatch } from 'react-redux';

import { timestampToDate } from '../services/timestampToDate';
import { getComments } from '../services/getComments';

// import { NewsItemType } from '../types/types';

const NewsItem = (item: any) => {
  const dispatch = useDispatch();
  return (
    <div
      className="newsItem"
      onClick={() => {
        dispatch(getComments(Number(item.id)));
      }}
    >
      <h2>{item.title}</h2>
      <p>points: {item.points}</p>
      <p>author: {item.user}</p>
      <p>date: {timestampToDate(item.time)}</p>
    </div>
  );
};

export default NewsItem;
