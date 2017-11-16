import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiB4BNfGE22Kn2D9-tlYKK4bq7dwbDdzE",
    authDomain: "info343-demo-2cc69.firebaseapp.com",
    databaseURL: "https://info343-demo-2cc69.firebaseio.com",
    projectId: "info343-demo-2cc69",
    storageBucket: "info343-demo-2cc69.appspot.com",
    messagingSenderId: "718818312079"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
