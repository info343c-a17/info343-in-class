import React, { Component } from 'react';

import firebase from "firebase/app";

import NewTaskForm from "./components/NewTaskForm"
// TaskList
// PurgeButton

class App extends Component {
  render() {
    let tasksRef = firebase.database().ref("tasks");
    return (
      <div>
        <div className="jumbotron bg-dark text-white">
          <div className="container">
            <h1 className="display-3">Tasks343</h1>
          </div>
        </div>
        <section>
          <div className="container">
          { 
            <NewTaskForm tasksRef={tasksRef} />
            //tasks here 
          }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
