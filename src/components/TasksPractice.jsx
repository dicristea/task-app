import React, { Component } from 'react';
import Overview from './CreateList';
import uniqid from "uniqid";

class Task extends Component {
  constructor() {
    super();

    this.state = {
    };
  }




  render() {

    return(
      <div className="taskWrapper">
        <div className="tasks-header">
            <h1 className="title">Task List</h1>
            {/* should change when project/view is selected*/}
            <hr />
        </div>
        <div className="task-holder">
          <Overview />
        </div>
        {/* <form className="quick-task-form" onSubmit={this.onSubmitTask}>
          <input className="quick-task-name" onChange={this.handleChange} value={task.title} type="text" id="taskInput" placeholder='Quickly create a task' />
          <button type="submit" className='create-task-btn'>+</button>
        </form> */}
      </div>
    );
  }
}

export default Task;




//EXAMPLE
  // handleChange = (e) => {
  //   this.setState((state) => ( // can use () or {} return - peep onSubmitTask
  //     {
  //       task : {
  //         title: e.target.value,
  //         id: this.state.task.id,
  //         priority: this.state.task.priority,
  //       }
  //     }
  //   ))
  // };

  // onSubmitTask = (e) => {
  //   e.preventDefault(); // preventing default behavior of refreshing the form anytime it's submitted
  //   this.setState((state) => {
  //     return {
  //       tasks: this.state.tasks.concat(this.state.task), // can't use push method(mutating) bc can't directly assign state, concat(non-mutating)
  //       task: {
  //         title: '',
  //         id: uniqid(), 
  //       }} //reset input to add another
  //     });
  // };