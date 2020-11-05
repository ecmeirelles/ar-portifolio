import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import {App} from "./components/App";
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
