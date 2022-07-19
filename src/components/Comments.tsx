import React from 'react';
import { CommentsItemType } from '../types/types';
import ShowCommentsContainer from './ShowCommentsContainer';
import makeComment from '../services/makeComment';

export interface CommentsProps {
  comments: CommentsItemType | Array<CommentsItemType> | undefined;
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const arrayOfComments = (Array.isArray(comments) && comments) || comments?.comments;

  return (
    <>
      {arrayOfComments &&
        arrayOfComments.map((item: CommentsItemType) => (
          <div key={item.id}>
            {item.comments && item.comments.length > 0 ? (
              <ShowCommentsContainer item={item} />
            ) : (
              <>{makeComment(item)}</>
            )}
          </div>
        ))}
    </>
  );
};

export default Comments;
