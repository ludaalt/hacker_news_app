const defaultState = {
  arrayComments: [],
};

const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';

export const updateCommentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_COMMENTS: {
      return { ...state, arrayComments: [action.payload] };
    }

    case DELETE_COMMENTS: {
      return { arrayComments: [] };
    }

    default:
      return state;
  }
};

export const updateCommentsAction = (payload) => {
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
