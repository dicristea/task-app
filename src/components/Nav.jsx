import React, { Component } from "react";

class NavBar extends Component {
    constructor() {
        super();

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
          visible: true,
        };
      }
    
    toggleNav = (e) => {
      const currentState = this.state.active;
      this.setState({
        active: !currentState,
      });
    };

    render() {
      return(
        <div className= 'navbar card'>
          <div>
            <button className="menu-icon" type="button" onClick={this.toggleNav}>
              Menu
            </button>
          </div>
          <h1 className="title">Nav Bar</h1>
          
        </div>
      );
    }
}

export default NavBar;