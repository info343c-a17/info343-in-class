import React, { Component } from 'react';
//IMPORT REACT DOM
import ReactDOM from 'react-dom';
//IMPORT CLOCK CLASS
import Clock from './components/Clock';
//IMPORT TASKLIST CLASS, WHICH AUTOMAGICALLY IMPORTS TASK
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

import logo from './logo.svg';
import './App.css';

let starterTasks = [
  {id: 0, title: "Learn React State"},
  {id: 1, title: "Buy More Coffee!"},
  {id: 2, title: "Tell Everyone How Cool INFO 343 Is!"}
]

let nextID = starterTasks.length;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: starterTasks };
  }

  handleNewTask(task) {
    task.id = nextID++;
    this.setState({tasks: this.state.tasks.concat(task)});
  }

  toggleDone(taskID) {
    let newTasks = this.state.tasks.map(task => {
      if (task.id === taskID) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({tasks: newTasks});
  }

  purgeCompleted() {
    let purgedTasks = this.state.tasks.filter(task => !task.done);
    this.setState({tasks: purgedTasks});
  }
  
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock />
        <div className="container">
          <h2 className="display-4">Tasks!</h2>
          <NewTaskForm onNewTask={(task) => this.handleNewTask(task)} />
          <TaskList 
            tasks={this.state.tasks} 
            toggleDone={
              (taskID) => this.toggleDone(taskID)
            } />
          <button className="btn btn-primary" onClick={() => this.purgeCompleted()}>
            Purge Completed!!!
          </button>
        </div>
      </div>
    );
  }
}

export default App;