import React, { useEffect } from 'react';
import { AppProps } from '../types/types';

// interface HTMLCollectionOf<T extends Element> extends HTMLCollection {
//   item(index: number): T;
//   namedItem(name: string): T;
//   [index: number]: T;
// }

const Comments: React.FC<AppProps> = ({ comments }) => {
  useEffect(() => {
    document.querySelectorAll('.drop-container > ul').forEach((item: any) => {
      item.classList.add('non-display');
    });
  }, []);

  const dropHandle = (event: React.MouseEvent<Element, MouseEvent>): void => {
    const dropElement = event.target as HTMLElement;
    dropElement.innerHTML = dropElement.innerHTML === '+' ? '-' : '+';
    dropElement.classList.toggle('non-display');
  };

  return (
    <>
      {comments &&
        comments.map((item: any, key: number) => (
          <ul key={key}>
            {item.comments.length ? (
              <li className="drop-container">
                {item.content.replace(/<p>/gi, '')}
                <div className="drop" onClick={(event) => dropHandle(event)}>
                  +
                </div>
                <Comments comments={item.comments} />
              </li>
            ) : (
              <li>{item.content.replace(/<p>/gi, '')}</li>
            )}
          </ul>
        ))}
    </>
  );
};

export default Comments;
