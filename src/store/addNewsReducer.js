const defaultState = {
  arrayNews: [],
};

const ADD_NEWS = 'ADD_NEWS';

export const addNewsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      const newState = { ...state, arrayNews: [...state.arrayNews, ...action.payload] };
      if (newState.arrayNews.length > 100) {
        const newArrayNews = newState.arrayNews.slice(0, 100).sort((a, b) => b.time - a.time);
        return { newState, arrayNews: newArrayNews };
      }

      return newState;
    }

    default:
      return state;
  }
};

export const addNewsAction = (payload) => {
  return {
    type: ADD_NEWS,
    payload,
  };
};
