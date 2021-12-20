import React from 'react';
// import { useSelector, RootStateOrAny } from 'react-redux';
import { timestampToDate } from '../services/timestampToDate';
// import { getComments } from '../services/getComments';
// import { deleteComments } from '../services/updateComments';
// import { useDispatch } from 'react-redux';
// import store from '../store/store';
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

const NewsItem = (item: any, key: number, commentsArray: any) => {
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
