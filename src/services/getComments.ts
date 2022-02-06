import { updateCommentsAction } from '../store/updateCommentsReducer';
import { Dispatch } from 'redux';

import { Action } from '../types/action';

export const getComments = (id: number): unknown => {
  return (dispatch: Dispatch<Action>) => {
    fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(updateCommentsAction(json));
      })
      .catch((error) => console.error('Error: ', error));
  };
};
