import { Dispatch } from 'redux';
import { deleteNewsAction } from '../store/updateDataReducer';
import { changeLoadingStatus } from '../store/updateLoadingReducer';
import { Action } from '../types/action';

export const deleteNews = (): unknown => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(deleteNewsAction());
    dispatch(changeLoadingStatus(true));
  };
};
