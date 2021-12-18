import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import NewsList from './components/NewsList';
import { getNews } from './services/request';

function App() {
  const dispatch = useDispatch();
  // const newsArray = useSelector((state) => state.news.arrayNews);
  const newsArray = useSelector((state: RootStateOrAny) => state.news?.arrayNews);

  return (
    <div className="App">
      <button onClick={() => dispatch(getNews())}>Update News</button>
      <NewsList newsArray={newsArray} />
    </div>
  );
}

export default App;
