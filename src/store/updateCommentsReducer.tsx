import { StateType, CommentsItemType } from '../types/types';
import { ActionType } from '../types/actionType';
import { Action } from '../types/action';

const defaultState: StateType = {
  arrayComments: [],
};

// const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
// const DELETE_COMMENTS = 'DELETE_COMMENTS';

export const updateCommentsReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENTS: {
      const newState = { ...state, arrayComments: [...state.arrayComments, action.payload] };
      // const newState = { arrayComments: action.payload };

      // newState.arrayComments = [...new Set(newState.arrayComments)];
      return newState;
    }

    case ActionType.DELETE_COMMENTS: {
      return { arrayComments: [] };
    }

    default:
      return state;
  }
};

// export const updateCommentsAction = (payload: Array<CommentsItemType>) => {
//   return {
//     type: UPDATE_COMMENTS,
//     payload,
//   };
// };

// export const deleteCommentsAction = () => {
//   return {
//     type: DELETE_COMMENTS,
//   };
// };

export function updateCommentsAction(payload: Array<CommentsItemType>): Action {
  return { type: ActionType.UPDATE_COMMENTS, payload };
}

export function deleteCommentsAction(): Action {
  return { type: ActionType.DELETE_COMMENTS };
}
