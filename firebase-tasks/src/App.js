import React, { Component } from 'react';

import firebase from "firebase/app";

import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import PurgeButton from "./components/PurgeButton";

class App extends Component {
  render() {
    let tasksRef = firebase.database().ref("tasks");
    let awesomeRef = firebase.database().ref("awesomeTasks");
    return (
      <div>
        <div className="jumbotron bg-dark text-white">
          <div className="container">
            <h1 className="display-3">Tasks343</h1>
          </div>
        </div>
        <section>
          <div className="container"> 
            <NewTaskForm tasksRef={tasksRef} />
            <div className="pt-3">
              <TaskList tasksRef={tasksRef} />
            </div>
            <PurgeButton tasksRef={tasksRef} />
          </div>
        </section>
        
        <section>
        
          <div className="container"> 
          <h2 className="display-4 pt-4">Awesome Tasks</h2>
            <NewTaskForm tasksRef={awesomeRef} />
            <div className="pt-3">
              <TaskList tasksRef={awesomeRef} />
            </div>
            <PurgeButton tasksRef={awesomeRef} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
