// will handle the input field, logic, and manage state

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }


  render() {
    return(
      <div className="app">
        <Header />
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
