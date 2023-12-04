import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import reportWebVitals from './reportWebVitals';
import TheNav from 'components/TheNav';
import App from 'App';
import Router from 'components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TheNav/>
    <Router/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
