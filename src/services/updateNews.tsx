import { Dispatch } from 'redux';
import { deleteNewsAction } from '../store/updateNewsReducer';

export const updateNews = () => {
  return (dispatch: Dispatch) => {
    dispatch(deleteNewsAction());
  };
};
