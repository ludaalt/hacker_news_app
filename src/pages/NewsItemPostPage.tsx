import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router';

import { timestampToDate } from '../services/timestampToDate';
import { renderComments } from '../services/renderComments';

// import { getComments } from '../services/getComments';
// import { deleteComments } from '../services/updateComments';
// import { useDispatch } from 'react-redux';
// import JsonTree from 'iso-json-tree';

const NewsItemPostPage = () => {
  const { id } = useParams();
  const newsItem = useSelector((state: RootStateOrAny) => state.news?.arrayNews).find(
    (item: any) => item.id == id
  );

  const commentsArray = useSelector((state: RootStateOrAny) => state.comments.arrayComments);
  const rootElementToRender = document.querySelector('.newsItemPostContainer');
  renderComments(commentsArray, rootElementToRender);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   {
  //     newsItem && dispatch(getComments(newsItem.id));
  //   }
  // }, []);

  // const fn = () => {
  //   dispatch(deleteComments());
  //   dispatch(getComments(newsItem.id));
  //   console.log(commentsArray);
  // };

  // setTimeout(fn, 10000);

  // setInterval(fn, 1000);

  return (
    <div className="newsItemPostContainer">
      <h1>{newsItem && newsItem.title}</h1>
      <a href={newsItem && newsItem.url} target="_blank" rel="noreferrer">
        {newsItem && newsItem.url}
      </a>
      <p>{newsItem && timestampToDate(newsItem.time)}</p>
      <p>{newsItem && newsItem.user}</p>
      <p>{newsItem && newsItem.comments_count}</p>
      {/* <JsonTree data={commentsArray} /> */}
    </div>
  );
};

export default NewsItemPostPage;
