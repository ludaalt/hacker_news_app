const defaultState = {
  arrayNews: [],
};

const ADD_NEWS = 'ADD_NEWS';
const DELETE_NEWS = 'DELETE_NEWS';

export const updateNewsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ADD_NEWS: {
      const newState = { ...state, arrayNews: [...state.arrayNews, ...action.payload] };
      if (newState.arrayNews.length > 100) {
        const newArrayNews = newState.arrayNews.slice(0, 100).sort((a, b) => b.time - a.time);
        return { newState, arrayNews: newArrayNews };
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

export const addNewsAction = (payload: any) => {
  return {
    type: ADD_NEWS,
    payload,
  };
};

export const deleteNewsAction = () => {
  return {
    type: DELETE_NEWS,
  };
};
