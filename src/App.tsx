import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NewsItemPostPage from './pages/NewsItemPostPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Loader from './components/Loader';
import { getNews } from './services/getNews';
import { deleteNews } from './services/deleteNews';
import { getComments } from './services/getComments';
import { deleteComments } from './services/deleteComments';
import { LoadingState, NewsItemType, CommentsItemType } from './types/types';

export interface AppProps {
  news?: Array<NewsItemType>;
  comments?: Array<CommentsItemType> | object;
}

const App: React.FC<AppProps> = () => {
  const loading = useSelector((state: LoadingState) => state.loadingStatus);
  console.log(loading?.loading);
  const dispatch = useDispatch();

  const updateData = (mode: string, id?: number | undefined) => {
    if (mode == 'news') {
      dispatch(deleteNews());
      dispatch(getNews());
    }

    if (mode == 'comments' && id) {
      dispatch(deleteComments());
      dispatch(getComments(id));
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header mode="news" updateData={updateData} />
                {loading?.loading && <Loader />}
                {<HomePage mode="news" updateData={updateData} />}
              </>
            }
          />
          <Route
            path="/items/:id"
            element={
              <>
                <Header mode="comments" updateData={updateData} />
                {loading?.loading && <Loader />}
                <NewsItemPostPage updateData={updateData} />
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
