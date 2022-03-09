import React from 'react';
import Button from './Button';
import { UpdateCommentsButtonProps } from '../types/props';

const UpdateComentsButton: React.FC<UpdateCommentsButtonProps> = ({ title, updateComments }) => {
  return <Button handleCommentsFunction={updateComments} title={title} />;
};

export default UpdateComentsButton;
