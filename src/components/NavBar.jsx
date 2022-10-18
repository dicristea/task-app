import React, { Component } from "react";
import Popup from './Popup';
import fetchArray from "../utils/storageUtils";

import today from '../assets/today.png';
import week from '../assets/week.png';
import allTasks from '../assets/all-tasks.png';
import completedTasks from '../assets/completed-tasks.png';
import add from '../assets/add.png';
import remove from '../assets/remove.png';

import githubLogo from "../assets/GitHub-Mark-64px.png";



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
    const { handleAllProjects, handleTaskList, createProject, currentProject, removeProject } = this.props;

    let projects = fetchArray('projects');

    return(
      <nav className= 'navbar card'>

        <div className="newTaskWrap">
          <button type='button' onClick={this.toggleTaskPopup}>+ Create a task</button>
          {
            newTask && 
            <Popup 
              content='task' 
              task={false} 
              index={false}
              handleClose={this.toggleTaskPopup}
              currentProject={currentProject}
            />
          }
        </div>

        <div className="mainNav">
          <div className="menuList">
            <img src={today} alt="Today Icon" />
            <button type="button">
              Today
            </button>
          </div>
          <div className="menuList">
            <img src={week} alt="Today Icon" />
            <button type="button">
              This Week
            </button>
          </div>
          <div className="menuList">
            <img type='image' src={allTasks} alt="Today Icon" />
            <button type="button" onClick={handleAllProjects}>
              All
            </button>
          </div>
          <div className="menuList">
            <img type="image" src={completedTasks} alt="Today Icon" />
            <button type="button">
              Completed
            </button>
          </div>

          <div className="projectWrap">
            <div className="projectHeader">
              <h3>Projects</h3>
              <input className="add-task-btn" type="image" id="addProject" onClick={this.toggleProjectPopup} alt="Add Project" src={add} />
              {
                newProject && 
                <Popup 
                  content='project' 
                  task={false} 
                  index={false}
                  handleClose={this.toggleProjectPopup} 
                  createProject={createProject}
                />
              }
            </div>
            <hr />
            { 
              projects.map((project, index) =>
                <div className="projectsList" key={project}>
                  <button 
                    className="projectButton" 
                    type="button" 
                    onClick={() => handleTaskList(project)} 
                  > 
                    {project}
                  </button>
                <input className="remove-project-btn" type="image" id="removeProject" onClick={() => removeProject(project, index)} alt="Remove Project" src={remove} />
                </div>
              )
            }
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