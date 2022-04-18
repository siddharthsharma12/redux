import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./Services/Reducers/index"
const store = createStore(rootReducer)
console.warn("storedata", store)

ReactDOM.render (

  <Provider store ={store}>
  <App/>
  </Provider>,

 
  document.getElementById('root')
);


