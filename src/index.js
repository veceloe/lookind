import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Header from "./header";
import Home from "./Home";
import Footer from "./footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <Home/>
      <Footer/>
  </React.StrictMode>

);

reportWebVitals();
