const defaultState = {
  arrayComments: [],
};

const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';

export const updateCommentsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case UPDATE_COMMENTS: {
      // const newState = { ...state, arrayComments: [...state.arrayComments, action.payload] };
      const newState = { arrayComments: action.payload };

      // newState.arrayComments = [...new Set(newState.arrayComments)];
      return newState;
    }

    case DELETE_COMMENTS: {
      return { arrayComments: [] };
    }

    default:
      return state;
  }
};

export const updateCommentsAction = (payload: any) => {
  return {
    type: UPDATE_COMMENTS,
    payload,
  };
};

export const deleteCommentsAction = () => {
  return {
    type: DELETE_COMMENTS,
  };
};
