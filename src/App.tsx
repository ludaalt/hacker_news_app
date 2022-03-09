import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NewsItemPostPage from './pages/NewsItemPostPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';

import { getNews } from './services/getNews';
import { deleteNews } from './services/deleteNews';

import { getComments } from './services/getComments';
import { deleteComments } from './services/deleteComments';

import { AppProps } from './types/props';

const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();

  const updateNews = () => {
    dispatch(deleteNews());
    dispatch(getNews());
  };

  const updateComments = (id: number) => {
    dispatch(deleteComments());
    dispatch(getComments(id));
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header page="home" updateNews={updateNews} />
                <HomePage updateNews={updateNews} />
              </>
            }
          />
          <Route
            path="/items/:id"
            element={
              <>
                <Header page="post" updateComments={updateComments} />
                <NewsItemPostPage updateComments={updateComments} />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
