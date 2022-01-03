import React from 'react';
import styled from 'styled-components';

import { ButtonType } from '../types/types';

const Button: React.FC<ButtonType> = ({ title, buttonFunction }) => {
  const Button = styled.button`
    font-size: 20px;

    color: #fff;
    background: rgb(212, 75, 56);
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 30px 0 0 30px;

    &:hover {
      background: rgb(232, 95, 76);
    }

    &:active {
      background: rgb(152, 15, 0);
    }
  `;

  return (
    <Button className="button" onClick={buttonFunction}>
      {title}
    </Button>
  );
};

export default Button;
