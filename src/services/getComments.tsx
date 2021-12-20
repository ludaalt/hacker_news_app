import { updateCommentsAction } from '../store/updateCommentsReducer';
import { Dispatch } from 'redux';

export const getComments = (id: number) => {
  return (dispatch: Dispatch) => {
    fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(updateCommentsAction(json.comments));
      });
  };
};
