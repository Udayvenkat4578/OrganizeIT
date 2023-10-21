import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import UserReducer from './UserReducer';

const store = configureStore({
  reducer : {
    users : UserReducer
  }
})
ReactDOM.render(
       <Provider store={store}>
       <App />
       </Provider>

,document.getElementById('root')
);

