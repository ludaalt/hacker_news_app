import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';
import { getComments } from '../services/getComments';

interface Props {
  newsArray: Array<object>;
  comments: Array<object>;
}

const NewsList: FC<Props> = ({ newsArray, comments }: Props) => {
  return (
    <div>
      {newsArray &&
        newsArray.map((item: any, index: number) => {
          return (
            item && (
              <Link to={`/items/${item.id}`} key={item.id} onClick={() => getComments(item.id)}>
                <NewsItem key={index} item={item} />
              </Link>
            )
          );
        })}
    </div>
  );
};

export default NewsList;
