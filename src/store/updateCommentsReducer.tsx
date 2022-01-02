import { StateType, CommentsItemType } from '../types/types';
import { ActionType } from '../types/actionType';
import { Action } from '../types/action';

const defaultState: StateType = {
  arrayComments: [],
};

export const updateCommentsReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENTS: {
      return { ...state, arrayComments: action.payload };
    }

    case ActionType.DELETE_COMMENTS: {
      return { arrayComments: [] };
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
