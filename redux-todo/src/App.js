import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Todo!</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>




        <header className="jumbotron bg-dark">
          <h1 className="display-3 text-white">Redux Todo</h1>
        </header>
        <section className="container">
          <form className="pb-3">
            <input type="text" className="form-control" placeholder="what do you want to do?"></input>
          </form>

          <ul className="list-group">
            <li className="list-group-item">To Do Item #1</li>
            <li className="list-group-item">To Do Item #2</li>
            <li className="list-group-item">To Do Item #3</li>
          </ul>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#all">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#active">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#all">Completed</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
