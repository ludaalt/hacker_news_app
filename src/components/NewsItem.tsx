import React from "react";
import styled from "styled-components";
import {
  faComment,
  faThumbsUp,
  faCalendarAlt,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { timestampToDate } from "../services/timestampToDate";
import { getDomain } from "../services/getDomain";
import { NewsItemType } from "../types/types";

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
    <Item>
      {index ? <Index>{index}</Index> : null}
      <div>
        <ItemTitle>{title}</ItemTitle>
        {url ? (
          <p>
            <FontAwesomeIcon icon={faShareSquare} />{" "}
            <a href={url} target="_blank" rel="noreferrer">
              {getDomain(url)}
            </a>
          </p>
        ) : null}
        {points ? (
          <p>
            <FontAwesomeIcon icon={faThumbsUp} /> {points}
          </p>
        ) : null}
        <p>
          by <Author>{user}</Author>
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
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 60px;
  background-color: #cccc;
  color: black;
  font-family: sans-serif;
  margin: 10px auto;
  padding: 10px;
  border-radius: 20px;
  text-decoration: none;
  padding: 10px 20px;
  font-size: calc(0.5em + 1vw);

  @media (max-width: 620px) {
    padding: 5px 10px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const ItemTitle = styled.h2`
  margin: 10px 0;
`;

const Index = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  font-size: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 30px;
  padding: 20px;

  @media (max-width: 620px) {
    margin-right: 10px;
  }
`;

const Author = styled.span`
  color: #fc6600;
`;

export default NewsItem;
