import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NewsItemPostPage from './pages/NewsItemPostPage';
import HomePage from './pages/HomePage';

import { getNews } from './services/getNews';
import { updateNews } from './services/deleteNews';

import { AppProps } from './types/types';

function App({ news, comments, buttonFunction }: AppProps) {
  const dispatch = useDispatch();

  const updateNewsFunction = () => {
    dispatch(updateNews());
    dispatch(getNews());
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  setInterval(updateNewsFunction, 60000);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage buttonFunction={buttonFunction} news={news} comments={comments} />}
          />
          <Route path="/items/:id" element={<NewsItemPostPage news={news} comments={comments} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
