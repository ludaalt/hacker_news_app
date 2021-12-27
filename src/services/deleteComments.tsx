import { Dispatch } from 'redux';

import { deleteCommentsAction } from '../store/updateCommentsReducer';

export const deleteComments = () => {
  return (dispatch: Dispatch) => {
    dispatch(deleteCommentsAction());
  };
};
