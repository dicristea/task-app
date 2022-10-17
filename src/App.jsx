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

    this.createProject = this.createProject.bind(this);
    this.handleTaskList = this.handleTaskList.bind(this);
  }

  createProject = (project) => {
    let projects = fetchArray('projects');

    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem(project, JSON.stringify([]));
  }

  handleTaskList = (project) => {
    this.setState({
      currentProject: project
    })

  }

  render() {
    const { currentProject } = this.state;

    let projects = fetchArray('projects');

    return(
      <div className="app">
        <Header />
        <NavBar projects={projects} currentProject={currentProject} createProject={this.createProject} handleTaskList={this.handleTaskList}/>
        <Main currentProject={currentProject} />
      </div>
    );
  }
}

export default App;
