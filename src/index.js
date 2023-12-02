import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserSignup from './components/UserSignup';

// url = "https://one01304595-comp3123-assignment1.onrender.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UserSignup/>
  </React.StrictMode>
);

