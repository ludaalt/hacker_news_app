import { Dispatch } from 'redux';

import { deleteCommentsAction } from '../store/updateCommentsReducer';
import { getComments } from './getComments';

export const deleteComments = () => {
  return (dispatch: Dispatch) => {
    dispatch(deleteCommentsAction());
  };
};

export const updateComments = (dispatch: any, id: any) => {
  dispatch(deleteComments());
  dispatch(getComments(id));
};
