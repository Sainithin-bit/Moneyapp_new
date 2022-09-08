import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './Blog';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('blog'));
root.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
