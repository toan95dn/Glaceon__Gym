import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Match from './match';
import Home from './home';
import Profile from './profile';
import Preference from './preference';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/match" element={<Match/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/preference" element={<Preference/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
