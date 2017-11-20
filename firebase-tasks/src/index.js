import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
    apiKey: "AIzaSyA0Xl7HRjFHrKv8wcxYqXrPbmZuvWMSqus",
    authDomain: "tasks343.firebaseapp.com",
    databaseURL: "https://tasks343.firebaseio.com",
    projectId: "tasks343",
    storageBucket: "tasks343.appspot.com",
    messagingSenderId: "495513354551"
  };
firebase.initializeApp(config);

firebase.auth().signInAnonymously()
  .then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  })
  .catch(err => console.error(err));