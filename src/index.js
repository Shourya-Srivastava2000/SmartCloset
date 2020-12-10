import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import firebase from 'firebase/app';
import firebaseConfig from './Config';
import { BrowserRouter as Router } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode> </Router>,
  document.getElementById('root')
);
