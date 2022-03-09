import { StateType, NewsItemType } from '../types/types';
import { ActionType, Action } from '../types/action';

const REQUIRED_NUMBER_OF_NEWS = 100;

const defaultState: StateType = {
  arrayNews: [],
};

export const updateNewsReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.ADD_NEWS: {
      const newState = { ...state };
      if (action.payload) {
        newState?.arrayNews?.push(...action.payload);
      }

      if (newState.arrayNews && newState.arrayNews.length > REQUIRED_NUMBER_OF_NEWS) {
        const newArrayNews = newState.arrayNews
          .filter((item, index) => newState.arrayNews?.indexOf(item) === index)
          .sort(function (a: NewsItemType, b: NewsItemType): number {
            if (a.time && b.time) return b.time - a.time;
            else return Number(null);
            // return b?.time - a?.time;
          })
          .slice(0, 100);
        return { ...newState, arrayNews: newArrayNews };
      }

      return { ...newState, arrayNews: newState.arrayNews };
    }

    case ActionType.DELETE_NEWS: {
      return { arrayNews: [] };
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
