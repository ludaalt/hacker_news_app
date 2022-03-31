import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

export interface ShowCommentsButtonProps {
  value: string;
  showComments: MouseEventHandler<HTMLDivElement>;
}

const ShowCommentsButton: React.FC<ShowCommentsButtonProps> = ({ value, showComments }) => {
  return <ShowComments onClick={showComments}>{value}</ShowComments>;
};

const ShowComments = styled.div`
  cursor: pointer;
  position: absolute;
  left: -5px;
  top: 15px;
  width: 20px;
  height: 20px;
  background: black;
  text-align: center;
  font-weight: bold;
  font-size: 100%;
  cursor: pointer;
  border-radius: 50%;
  color: white;
`;

export default ShowCommentsButton;
