import React from 'react';
import { timestampToDate } from '../services/timestampToDate';
import { NewsItemType } from '../types/types';

import {
  faComment,
  faThumbsUp,
  faCalendarAlt,
  faShareSquare,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsItem: React.FC<NewsItemType> = ({
  index,
  title,
  url,
  points,
  user,
  time,
  commentsCount,
}) => {
  return (
    <div className="item">
      {index ? <p className="index">{index}</p> : null}
      <div>
        <h2 className="item-title">{title}</h2>
        {url ? (
          <p>
            <FontAwesomeIcon icon={faShareSquare} />{' '}
            <a href={url} target="_blank" rel="noreferrer">
              {url.split('/')[2]}
            </a>
          </p>
        ) : null}
        {points ? (
          <p>
            <FontAwesomeIcon icon={faThumbsUp} /> {points}
          </p>
        ) : null}
        <p>
          by <span className="orange-text">{user}</span>
        </p>
        {time ? (
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} /> {timestampToDate(time)}
          </p>
        ) : null}
        {commentsCount ? (
          <p>
            <FontAwesomeIcon icon={faComment} /> {commentsCount}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default NewsItem;
