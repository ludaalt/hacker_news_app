import { Dispatch } from 'redux';
import { deleteNewsAction } from '../store/updateNewsReducer';

import { Action } from '../types/action';

export const deleteNews = (): unknown => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(deleteNewsAction());
  };
};
