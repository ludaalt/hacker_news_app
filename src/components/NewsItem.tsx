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

const NewsItem: React.FC<NewsItemType> = (props) => {
  return (
    <div className="item">
      {props.index ? <p className="index">{props.index}</p> : null}
      <div>
        <h2 className="item-title">{props.title}</h2>
        {props.url ? (
          <p>
            <FontAwesomeIcon icon={faShareSquare} />{' '}
            <a href={props.url} target="_blank" rel="noreferrer">
              {props.url.split('/')[2]}
            </a>
          </p>
        ) : null}
        {props.points ? (
          <p>
            <FontAwesomeIcon icon={faThumbsUp} /> {props.points}
          </p>
        ) : null}
        <p>
          by <span className="orange-text">{props.user}</span>
        </p>
        {props.time ? (
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} /> {timestampToDate(props.time)}
          </p>
        ) : null}
        {props.commentsCount ? (
          <p>
            <FontAwesomeIcon icon={faComment} /> {props.commentsCount}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default NewsItem;
