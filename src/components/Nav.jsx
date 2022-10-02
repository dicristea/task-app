import React, { Component } from "react";
import menuBlue from "../assets/menu-bar-blue.png";
import menuWhite from "../assets/menu-bar-white.png"

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
        <nav className= 'navbar card'>
          {/* <img src={menuBlue} alt="Menu" className="menuIcon" /> */}
          <div className="navTop">
            <input className="menuBtn" type="image" id="image" onClick={this.toggleNav} alt="Menu" src={menuBlue} />
          </div>

          <div className="mainNav">
            <ul className="menuList">
              <li>
                <img src={menuBlue} alt="Today Icon" />
                Today
              </li>
              <li>
                <img src={menuBlue} alt="Today Icon" />
                This Week
                </li>
              <li>
              <img src={menuBlue} alt="Today Icon" />
                All
              </li>
              <li>
              <img src={menuBlue} alt="Today Icon" />
                Completed
              </li>
            </ul>

            <div className="projectWrap">
              <div className="projectHeader">
                <h3>Projects</h3>
                <input className="menuBtn" type="image" id="image" onClick={this.toggleNav} alt="Menu" src={menuBlue} />
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
            <div><a href="https://github.com/dicristea/">ddtea</a> ⚜ 2022</div>
          </footer>

        </nav>
      );
    }
}

export default NavBar;