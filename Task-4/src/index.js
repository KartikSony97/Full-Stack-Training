import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./app/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./app/store";


ReactDOM.render(
 <Provider store={store}>
   <PersistGate persistor = {persistor}>
   <App/>
   </PersistGate>
 </Provider>,
  document.getElementById('root')
);



