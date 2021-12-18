import React, { FC } from 'react';
import NewsItem from './NewsItem';

interface Props {
  newsArray: Array<any>;
}

const NewsList: FC<Props> = ({ newsArray }) => {
  return (
    <div>
      {newsArray &&
        newsArray.map((item: any, key: number) => {
          return (
            <>
              <p>{key + 1}</p>
              <NewsItem key={key} item={item} />
            </>
          );
        })}
    </div>
  );
};

export default NewsList;
