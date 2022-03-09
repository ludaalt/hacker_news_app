import React from 'react';
import styled from 'styled-components';
import { ShowCommentsButtonProps } from '../types/props';

const ShowComments = styled.div`
  position: absolute;
  z-index: 10;
  left: -27px;
  top: 15px;
  width: 20px;
  height: 20px;
  /* background: darkgray; */
  background: black;
  text-align: center;
  font-weight: bold;
  font-size: 100%;
  cursor: pointer;
  border-radius: 50%;
  color: white;
`;

const ShowCommentsButton: React.FC<ShowCommentsButtonProps> = ({ value, showComments }) => {
  return <ShowComments onClick={showComments}>{value}</ShowComments>;
};

export default ShowCommentsButton;
