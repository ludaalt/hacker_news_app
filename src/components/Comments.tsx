import React, { useEffect } from 'react';

const Comments = ({ comments }: any) => {
  useEffect(() => {
    document.querySelectorAll('.drop-container > ul').forEach((item: any) => {
      item.classList.add('non-display');
    });
  }, []);

  const dropHandle = (target: any) => {
    target.innerHTML = target.innerHTML == '+' ? '-' : '+';
    target.nextSibling.classList.toggle('non-display');
  };

  return (
    <>
      {comments &&
        comments.map((item: any, key: any) => (
          <ul key={key}>
            {item.comments.length ? (
              <li className="drop-container">
                {item.content.replace(/<p>/gi, '')}
                <div className="drop" onClick={(event) => dropHandle(event.target)}>
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
