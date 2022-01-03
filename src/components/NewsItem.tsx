import React from 'react';
import styled from 'styled-components';
import { timestampToDate } from '../services/timestampToDate';
// import { NewsItemType } from '../types/types';

import { faComment, faThumbsUp, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsItem: any = (props: any) => {
  const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 60px;
    background-color: #cccc;
    color: black;
    font-family: sans-serif;
    margin: 10px auto;
    max-width: 50%;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    & p {
      margin-bottom: 10px;
    }
  `;

  const Index = styled.p`
    background: black;
    color: white;
    font-size: 20px;
    padding: 9px 15px;
    border-radius: 50%;
    margin-right: 30px;
  `;

  const ItemTitle = styled.h2`
    margin: 10px 0;
  `;

  return (
    <Item>
      {props.index ? <Index>{props.index}</Index> : null}
      <div>
        <ItemTitle>{props.title}</ItemTitle>
        {props.url ? (
          <a href={props.url} target="_blank" rel="noreferrer">
            {props.url.split('/')[2]}
          </a>
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
    </Item>
  );
};

export default NewsItem;
