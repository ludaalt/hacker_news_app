import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsItemPostPage from './pages/NewsItemPostPage';
import HomePage from './pages/HomePage';
import { AppProps } from './types/types';

const App: React.FC<AppProps> = () => {
  const news = useSelector((state: RootStateOrAny) => state.news?.arrayNews);
  const comments = useSelector((state: RootStateOrAny) => state.comments?.arrayComments);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage news={news} comments={comments} />} />
          <Route path="/items/:id" element={<NewsItemPostPage news={news} comments={comments} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
