import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDoView from './components/toDoList';
import TaskForm from './components/addTask';
import EditForm from './components/editTask';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </Link>
            </header>
            <Route exact path="/" component={ToDoView} />
            <Route exact path="/addTask" component={TaskForm} />
            <Route exact path="/editTask" component={EditForm} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
