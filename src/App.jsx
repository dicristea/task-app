// will handle the input field, logic, and manage state

import React, { Component } from 'react';
import './App.css';
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        number: 1,
        text: '',
        id: uniqid(),
      }, // handles what is typed into input field
      tasks: [],
    };
  }

  handleChange= (e) => {
    this.setState((state) => ( // can use () or {} return - peep onSubmitTask
      {
        task : {
          text: e.target.value,
          id: this.state.task.id,
          number: this.state.task.number,
        }
      }
    ))
  };

  onSubmitTask = (e) => {
    e.preventDefault(); // preventing default behavior of refreshing the form anytime it's submitted
    this.setState((state) => {
      return {
        tasks: this.state.tasks.concat(this.state.task), // can't use push method(mutating) bc can't directly assign state, concat(non-mutating)
        task: {
          text: '',
          id: uniqid(), 
          number: this.state.task.number +1,
        }} //reset input to add another
      });
  };


  render() {
    const { task, tasks } = this.state; // destructuring state (for props too)

    return(
      <div className="formCard">
        <h1 className="title">Task List</h1>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="tastInput">Enter task</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="taskInput" />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
