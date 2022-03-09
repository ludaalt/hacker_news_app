import React from 'react';
import { CommentsProps } from '../types/props';
import { CommentsItemType } from '../types/types';

import ShowCommentsContainer from './ShowCommentsContainer';

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const makeCommentItem = (item: CommentsItemType) => {
    return <div>{item.type === 'comment' && item.content}</div>;
  };

  console.log(comments);

  return (
    <>
      {comments &&
        comments.comments?.map((item: CommentsItemType) => (
          <div key={item.id}>
            {item.comments && item.comments.length > 0 ? (
              <ShowCommentsContainer item={item} />
            ) : (
              <>{makeCommentItem(item)}</>
            )}
          </div>
        ))}
    </>
  );
};

export default Comments;
