import { Dispatch } from 'redux';
import { deleteNewsAction } from '../store/updateNewsReducer';

import { Action } from '../types/action';

export const updateNews = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(deleteNewsAction());
  };
};

// export function updateNews(): ThunkAction<void, StateType, void> {
//   return (dispatch: Dispatch<StateType>, getState: () => StateType): void => {
//     dispatch(deleteNewsAction());
//   };
// }

// export function thunkedActionCreator(): ThunkAction<void, IAppState, void> {
//   return (dispatch: Dispatch<IAppState>, getState: () => IAppState): void => {
//     // Do something async and dispatch actions or other thunks ...
//   };
// }
