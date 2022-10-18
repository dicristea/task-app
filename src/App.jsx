import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Header from './components/Header';

import fetchArray from './utils/storageUtils';


class App extends Component {
  constructor() {
    super();
    
    let projects = fetchArray('projects');
    
    this.state = {
      currentProject: projects[0] || ''
    };

    this.handleAllProjects = this.handleAllProjects.bind(this);
    this.createProject = this.createProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
    this.handleTaskList = this.handleTaskList.bind(this);
  }

  createProject = (project) => {
    let projects = fetchArray('projects');

    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem(project, JSON.stringify([]));
  }

  removeProject = (project, index) => {
    let projects = fetchArray('projects');

    projects.splice(index, 1);
    window.localStorage.setItem('projects', JSON.stringify(projects));
    window.localStorage.removeItem(project);
    window.location.reload(false);
  }

  handleTaskList = (project) => {
    this.setState({
      currentProject: project
    })
  }

  handleAllProjects() {
    console.log("handling all projects")
  }


  render() {
    const { currentProject } = this.state;

    return(
      <div className="app">
        <Header />
        <NavBar 
          currentProject={currentProject}
          handleAllProjects={this.handleAllProjects} 
          createProject={this.createProject} 
          removeProject={this.removeProject} 
          handleTaskList={this.handleTaskList}
        />
        <Main currentProject={currentProject} />
      </div>
    );
  }
}

export default App;
