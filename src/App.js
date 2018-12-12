import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskList from "./TaskLIst";
import uuidv4 from "uuid/v4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTask: "",
      tasks: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();

    this.setState({
      inputTask: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { inputTask, tasks } = this.state
    if (!inputTask) {
      alert('please fill task input')
      return
    }

    const newTask = {
      id: uuidv4(),
      name: inputTask
    };

    this.setState({
      inputTask: "",
      tasks: [
        ...tasks,
        newTask
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputTask}
            onChange={this.handleInputChange}
          />
        </form>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
