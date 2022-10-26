import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter} from 'react-router-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {Home} from "./Home";
import {Header} from "./header";
import Footer from "./footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <Footer />
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
