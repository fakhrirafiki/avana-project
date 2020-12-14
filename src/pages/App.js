import React from 'react';
import './App.css';
import { GlobalStyles } from './global-styles';
import { Routes } from '../config';
import { Provider } from 'react-redux';
import store from '../redux/store';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;
