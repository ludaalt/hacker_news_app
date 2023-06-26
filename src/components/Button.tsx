import React from "react";
import styled from "styled-components";

export interface ButtonProps
  extends React.BaseHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return <ButtonElement {...props}>{title}</ButtonElement>;
};

const ButtonElement = styled.button`
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

  &.up {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 10000;

    @media (max-width: 620px) {
      opacity: 0.9;
    }
  }
`;

export default Button;
