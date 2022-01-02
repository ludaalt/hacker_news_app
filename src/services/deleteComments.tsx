import { Dispatch } from 'redux';

import { deleteCommentsAction } from '../store/updateCommentsReducer';
// import { Action } from '../types/action';

export const deleteComments = (): unknown => {
  return (dispatch: Dispatch) => {
    dispatch(deleteCommentsAction());
  };
};
