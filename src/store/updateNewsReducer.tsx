import { StateType, NewsItemType } from '../types/types';
import { Action } from '../types/action';

const defaultState: StateType = {
  arrayNews: [],
};

const ADD_NEWS = 'ADD_NEWS';
const DELETE_NEWS = 'DELETE_NEWS';

export const updateNewsReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ADD_NEWS: {
      // const newState = { ...state, arrayNews: [...state.arrayNews, ...action.payload] };
      const newState = { ...state, arrayNews: action.payload };
      if (newState.arrayNews && newState.arrayNews.length > 100) {
        const newArrayNews = newState.arrayNews
          .slice(0, 100)
          .sort((a: any, b: any) => b.time - a.time);
        return { ...newState, arrayNews: newArrayNews };
      }

      return newState;
    }

    case DELETE_NEWS: {
      return { arrayNews: [] };
    }

    default:
      return state;
  }
};

// export const addNewsAction = (payload: Array<NewsItemType>) => {
//   return {
//     type: ADD_NEWS,
//     payload,
//   };
// };

// export const deleteNewsAction: ActionType = () => {
//   return {
//     type: DELETE_NEWS,
//   };
// };

export function addNewsAction(payload: Array<NewsItemType>): Action {
  return { type: ADD_NEWS, payload };
}

export function deleteNewsAction(): Action {
  return { type: DELETE_NEWS };
}
