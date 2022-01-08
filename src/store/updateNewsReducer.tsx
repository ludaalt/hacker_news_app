import { StateType, NewsItemType } from '../types/types';
import { ActionType, Action } from '../types/action';

const defaultState: StateType = {
  arrayNews: [],
};

export const updateNewsReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.ADD_NEWS: {
      const newState = { ...state, arrayNews: action.payload };
      if (newState.arrayNews && newState.arrayNews.length > 100) {
        const newArrayNews = newState.arrayNews
          .sort(function (a: NewsItemType, b: NewsItemType): number {
            if (a.time && b.time) return b.time - a.time;
            else return Number(null);
            // return b?.time - a?.time;
          })
          .slice(0, 100);
        return { ...newState, arrayNews: newArrayNews };
      }

      return newState;
    }

    case ActionType.DELETE_NEWS: {
      return defaultState;
    }

    default:
      return state;
  }
};

export function addNewsAction(payload: Array<NewsItemType>): Action {
  return { type: ActionType.ADD_NEWS, payload };
}

export function deleteNewsAction(): Action {
  return { type: ActionType.DELETE_NEWS };
}
