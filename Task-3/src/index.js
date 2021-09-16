//import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseReducer from './useReducer';

ReactDOM.render(
  <BrowserRouter>
  <Route exact path = "/"><App/> </Route>
  
  <Route path = "/UseReducer"><UseReducer/></Route>   
  </BrowserRouter>
  ,document.getElementById('root')
);

reportWebVitals();

