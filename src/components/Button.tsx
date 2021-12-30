import React from 'react';

import { ButtonType } from '../types/types';

const Button: React.FC<ButtonType> = ({ title, buttonFunction }) => {
  return (
    <button className="button" onClick={buttonFunction}>
      {title}
    </button>
  );
};

export default Button;
