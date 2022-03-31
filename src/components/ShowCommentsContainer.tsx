import React, { useState } from 'react';
import styled from 'styled-components';
import ShowCommentsButton from './ShowCommentsButton';
import Comments from './Comments';
import { CommentsItemType } from '../types/types';
import makeComment from '../services/makeComment';

export interface ShowCommentsContainerProps {
  item: CommentsItemType;
}

const ShowCommentsContainer: React.FC<ShowCommentsContainerProps> = ({ item }) => {
  const [commentsBlockShow, setCommentsBlockShow] = useState({ isShow: false, toShow: '+' });

  const showComments = (): void => {
    const newState = {
      isShow: !commentsBlockShow.isShow,
      toShow: commentsBlockShow.toShow === '+' ? '-' : '+',
    };
    setCommentsBlockShow(newState);
  };

  return (
    <Container>
      {makeComment(item)}
      <ShowCommentsButton showComments={showComments} value={commentsBlockShow.toShow} />
      {commentsBlockShow.isShow && <Comments comments={item.comments} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 20px;
`;

export default ShowCommentsContainer;
