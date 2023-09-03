import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import Link from './Links/Link';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/app" element={<App />} />
      <Route path="/link" element={<Link />} />
    </Routes>
  </Router>
);




