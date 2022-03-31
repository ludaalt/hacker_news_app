import { LoadingState } from '../types/types';
import { ActionType, Action } from '../types/action';

const defaultState: LoadingState = {
  loading: true,
};

export const updateLoadingReducer = (state = defaultState, action: Action): LoadingState => {
  switch (action.type) {
    case ActionType.CHANGE_LOADING_STATUS: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};

export function changeLoadingStatus(payload: boolean): Action {
  return { type: ActionType.CHANGE_LOADING_STATUS, payload };
}
