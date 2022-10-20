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
      currentProject: projects[0] || '',
    };

    this.createProject = this.createProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
    this.handleTaskList = this.handleTaskList.bind(this);
  }

  createProject = (project) => {
    let projects = fetchArray('projects');

    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem(project, JSON.stringify([]));
    window.location.reload(false);
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


  render() {
    const { currentProject } = this.state;

    if (window.localStorage.getItem("projects") == null) {
      let projects = fetchArray('projects');
      projects.push("Personal", "Work");
      localStorage.setItem("Personal", JSON.stringify([]));
      localStorage.setItem("Work", JSON.stringify([]));
      localStorage.setItem('projects', JSON.stringify(projects));
    }
    
    return(
      <div className="app">
        <Header />
        <NavBar
          currentProject={currentProject}
          createProject={this.createProject} 
          removeProject={this.removeProject} 
          handleTaskList={this.handleTaskList}
        />
        <Main           
          currentProject={currentProject} />
      </div>
    );
  }
}

export default App;
