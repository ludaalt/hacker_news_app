import React from 'react';
import styled from 'styled-components';
import { CommentsItemType } from '../types/types';

const makeCommentItem = (item: CommentsItemType): React.ReactElement => {
  return (
    <CommentContent>
      {item.type === 'comment' && <div dangerouslySetInnerHTML={{ __html: item.content }}></div>}
    </CommentContent>
  );
};

const CommentContent = styled.div`
  padding: 5px;
  word-break: break-all;

  code {
    white-space: normal;
  }
`;

export default makeCommentItem;
