import React, { Component } from "react";
import Popup from './Popup';

import today from '../assets/today.png';
import week from '../assets/week.png';
import allTasks from '../assets/all-tasks.png';
import completedTasks from '../assets/completed-tasks.png';
import add from '../assets/add.png';

import githubLogo from "../assets/GitHub-Mark-64px.png"



class NavBar extends Component {
  constructor() {
    super();

    this.toggleTaskPopup = this.toggleTaskPopup.bind(this);
    this.toggleProjectPopup = this.toggleProjectPopup.bind(this);

    this.state = {
      newTask: false,
      newProject: false,
    }
  }


  toggleTaskPopup = (e) => {
    this.setState({
      newTask: !this.state.newTask,
    });
  };

  toggleProjectPopup = (e) => {
    this.setState({
      newProject: !this.state.newProject,
    });
  };



  render() {
    const { newTask, newProject } = this.state;

    return(
      <nav className= 'navbar card'>

        <div className="newTaskWrap">
          <button type='button' onClick={this.toggleTaskPopup}>+ Create a task</button>
          {newTask && <Popup content='task' task={false} index={false} handleClose={this.toggleTaskPopup}/>}
        </div>

        <div className="mainNav">

          <ul className="menuList">
            <li>
              <img src={today} alt="Today Icon" />
              Today
            </li>
            <li>
              <img src={week} alt="Today Icon" />
              This Week
              </li>
            <li>
            <img src={allTasks} alt="Today Icon" />
              All
            </li>
            <li>
            <img src={completedTasks} alt="Today Icon" />
              Completed
            </li>
          </ul>

          <div className="projectWrap">
            <div className="projectHeader">
              <h3>Projects</h3>
              <input className="add-task-btn" type="image" id="addProject" onClick={this.toggleProjectPopup} alt="Add Project" src={add} />
              {newProject && <Popup content='project' handleClose={this.toggleProjectPopup}/>}
            </div>
            <hr />
            <ul className="projectsList">
              <li>Personal</li>
              <li>Work</li>
            </ul>
          </div>
        </div>
        
        
        <footer>
          <hr />
          <div>
            <a href="https://github.com/dicristea/task-app">
              <img className="sourceGithub" src={githubLogo} alt="Project Source on Github" />
            </a>
            ddtea 2022
          </div>
        </footer>

      </nav>
    );
  }
}

export default NavBar;