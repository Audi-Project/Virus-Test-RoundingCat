import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from './pages/Result';
import Main from './pages/Main';
import QuestionPage from './pages/QuestionPage';
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result/:params" element={<Result />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
