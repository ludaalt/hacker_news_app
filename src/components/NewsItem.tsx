import React from 'react';

import { timestampToDate } from '../services/timestampToDate';
// interface NewsItem {
//   title: string;
//   rating: number;
//   user: string;
//   date: Date;
// }

// type NewsItemProps = {
//   item  {
//     title: string;
//     rating: number;
//     user: string;
//     date: Date;
//   }
// };

const NewsItem = (item: any, key: number) => {
  const divStyle = {
    backgroundColor: '#cccc',
    color: 'green',
    margin: '10px auto',
    maxWidth: '60%',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={divStyle}>
      <h2>{item.item.title}</h2>
      <p>{item.item.points}</p>
      <p>{item.item.user}</p>
      <p>{timestampToDate(item.item.time)}</p>
    </div>
  );
};

export default NewsItem;
