import React, { useState } from 'react';
import ShowCommentsButton from './ShowCommentsButton';
import Comments from './Comments';
import { ShowCommentsContainerProps } from '../types/props';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 20px;
  // display: none;
  /* border: 3px solid red; */
  min-height: 100px;
`;

const ShowCommentsContainer: React.FC<ShowCommentsContainerProps> = ({ item }) => {
  const [CommentsBlockShow, setCommentsBlockShow] = useState({ isShow: false, toShow: '+' });

  const showComments = (): void => {
    const newState = Object.assign({}, CommentsBlockShow);
    newState.isShow = !newState.isShow;
    newState.toShow = newState.toShow === '+' ? '-' : '+';
    setCommentsBlockShow(newState);
  };

  return (
    <Container>
      <div>{item.type === 'comment' && item.content}</div>
      <ShowCommentsButton showComments={showComments} value={CommentsBlockShow.toShow} />
      {<Comments comments={item.comments} />}
    </Container>
  );
};

export default ShowCommentsContainer;
