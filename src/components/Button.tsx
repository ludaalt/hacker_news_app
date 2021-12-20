import React from 'react';
import { useDispatch } from 'react-redux';
// import { Dispatch } from 'redux';

import { getNews } from '../services/getNews';
import { updateNews } from '../services/updateNews';

const Button = () => {
  const dispatch = useDispatch();
  const update = () => {
    return (dispatch: any) => {
      dispatch(updateNews());
      dispatch(getNews());
    };
  };

  return (
    <button className="button" onClick={() => dispatch(update())}>
      Update News
    </button>
  );
};

export default Button;
