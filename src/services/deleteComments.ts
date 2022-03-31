import { Dispatch } from 'redux';
import { deleteCommentsAction } from '../store/updateDataReducer';

export const deleteComments = (): unknown => {
  return (dispatch: Dispatch) => {
    dispatch(deleteCommentsAction());
  };
};
