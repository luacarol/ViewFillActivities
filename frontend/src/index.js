// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import ViewActivities from './pages/ViewActivities';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ViewActivities />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
