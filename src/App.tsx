import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NewsItemPostPage from './pages/NewsItemPostPage';
import HomePage from './pages/HomePage';
import { getNews } from './services/getNews';
import { updateNews } from './services/updateNews';

function App({ buttonFunction }: any) {
  const fn = () => {
    dispatch(updateNews());
    dispatch(getNews());
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  });

  setInterval(fn, 60000);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage buttonFunction={buttonFunction} />} />
          <Route path="/items/:id" element={<NewsItemPostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
