import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from "firebase/app";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      email: "test2@test.com",
      password: "secretpassword2",
      displayName: "Tester2"
    }
  }

  componentDidMount() {
    //listen for auth change
    this.authUnsub = firebase.auth().onAuthStateChanged(user => {
      this.setState({authenticated: user != null});
    });
  }

  componentWillUnmount() {
    this.authUnsub();
  }

  handleSignUp() {
    this.setState({working: true, errorMessage: undefined});
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => user.updateProfile({
        displayName: this.state.displayName
      }))
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));
  }

  handleSignOut() {
    this.setState({working: true, errorMessage: undefined});
    firebase.auth().signOut()
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));

  }

  handleSignIn() {
    this.setState({working: true, errorMessage: undefined});
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));
  }

  render() {
    return (
      <div className="App">
        <header className="jumbotron bg-dark">
          <h1 className="display-3 text-light">Firebase Auth Demo</h1>
        </header>
        <div className="container">
          {
            this.state.errorMessage ?
            <div className="alert alert-danger">{this.state.errorMessage}</div> :
            undefined
          }
          {
            this.state.authenticated ?
            <div className="alert alert-success">Welcome back {this.state.displayName}!</div> :
            undefined
          }
          <p>
            User is <strong>{this.state.authenticated ? "Authenticated!" : "Not Authenticated."}</strong> </p>
            <span> {this.state.working ? "Working on it!" : undefined} </span>
          <p>
              <button className="btn btn-primary" onClick={() => this.handleSignUp() }>Sign Up!</button>
          </p>

          <p>
              <button className="btn btn-success" onClick={() => this.handleSignIn() }>Sign In!</button>
          </p>

          <p>
              <button className="btn btn-danger" onClick={() => this.handleSignOut() }>Sign Out!</button>
          </p>

        </div>
      </div>
    );
  }
}

export default App;
