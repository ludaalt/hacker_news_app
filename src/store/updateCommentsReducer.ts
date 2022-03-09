import { StateType, CommentsItemType } from '../types/types';
import { ActionType, Action } from '../types/action';

const defaultState: StateType = {
  arrayComments: [],
};

export const updateCommentsReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENTS: {
      const newState = { ...state };
      if (action.payload) {
        newState.arrayComments = action.payload;
        // return { ...state, arrayComments: [action.payload] };
      }

      return newState;
    }

    case ActionType.DELETE_COMMENTS: {
      return defaultState;
    }

    default:
      return state;
  }
};

export function updateCommentsAction(payload: Array<CommentsItemType>): Action {
  return { type: ActionType.UPDATE_COMMENTS, payload };
}

export function deleteCommentsAction(): Action {
  return { type: ActionType.DELETE_COMMENTS };
}
