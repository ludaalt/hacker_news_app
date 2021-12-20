import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';
import { getComments } from '../services/getComments';
import { deleteComments } from '../services/updateComments';
import { useDispatch } from 'react-redux';

interface Props {
  newsArray: Array<any>;
}

const NewsList: FC<Props> = ({ newsArray }: Props) => {
  const dispatch = useDispatch();

  const getCommentsFunction = (id: number) => {
    dispatch(deleteComments());
    dispatch(getComments(id));
  };

  return (
    <div>
      {newsArray &&
        newsArray.map((item: any, key: number) => {
          return (
            item && (
              <Link
                to={`/items/${item.id}`}
                key={item.id}
                onClick={() => {
                  getCommentsFunction(item.id);
                }}
              >
                {/* <p>{key + 1}</p> */}
                <NewsItem key={key} item={item} />
              </Link>
            )
          );
        })}
    </div>
  );
};

export default NewsList;
