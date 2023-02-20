import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SamplePage from './pages/SamplePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/sample" element={ <SamplePage/> } />
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
    </div>
  );
}

export default App;
