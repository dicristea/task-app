import React, { Component } from 'react';
import Overview from './Overview';
import uniqid from "uniqid";

class Task extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        number: 1,
        title: '',
        id: uniqid(),
      }, // handles what is typed into input field
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState((state) => ( // can use () or {} return - peep onSubmitTask
      {
        task : {
          title: e.target.value,
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
          title: '',
          id: uniqid(), 
          number: this.state.task.number +1,
        }} //reset input to add another
      });
  };


  render() {
    const { task, tasks } = this.state;

    return(
      <div className="taskWrapper">
        <h1 className="title">Task List</h1>
         {/* should change when project/view is selected*/}
        <hr />
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="tastInput">Enter task</label>
          <input onChange={this.handleChange} value={task.title} type="text" id="taskInput" />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default Task;
