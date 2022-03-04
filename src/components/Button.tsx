import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../types/props';

const ButtonElem = styled.button`
  font-size: 20px;
  margin: 0;
  color: #fff;
  background: rgb(212, 75, 56);
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: rgb(232, 95, 76);
  }

  &:active {
    background: rgb(152, 15, 0);
  }

  .to-up-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
`;

const Button: React.FC<ButtonProps> = ({ title, className, hadleFunction }) => {
  return (
    <ButtonElem className={className} onClick={hadleFunction}>
      {title}
    </ButtonElem>
  );
};

export default Button;
