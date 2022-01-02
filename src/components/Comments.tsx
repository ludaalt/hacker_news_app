import React, { useEffect } from 'react';
import { AppProps, CommentsItemType } from '../types/types';

const Comments: React.FC<AppProps> = ({ comments }) => {
  useEffect(() => {
    const nonDisplayCollection = document.querySelectorAll('.drop-container > ul');
    for (let i = 0; i < nonDisplayCollection.length; i += 1) {
      nonDisplayCollection[i].classList.add('non-display');
    }
  }, []);

  const dropHandle = (event: React.MouseEvent<Element, MouseEvent>): void => {
    const dropElement = event.target as HTMLElement;
    dropElement.innerHTML = dropElement.innerHTML === '+' ? '-' : '+';

    dropElement.nextElementSibling &&
      dropElement.nextElementSibling.classList.toggle('non-display');
  };

  return (
    <>
      {comments &&
        comments.map((item: CommentsItemType, key: number) => (
          <ul key={key}>
            {item.comments ? (
              <li className="drop-container">
                {item.content && item.content.replace(/<p>/gi, '')}
                <div className="drop" onClick={(event) => dropHandle(event)}>
                  +
                </div>
                <Comments comments={item.comments} />
              </li>
            ) : (
              <li>{item.content && item.content.replace(/<p>/gi, '')}</li>
            )}
          </ul>
        ))}
    </>
  );
};

export default Comments;
