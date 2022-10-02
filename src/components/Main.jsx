import React, { Component } from "react";
import './Main.css';
import Task from "./Task";
import taskPlaceholder from "../assets/task-pretty.png";

class Main extends Component {
    constructor () {
        super()

        this.state = {}
    }

    render() {
        return(
            <div className="main-wrapper">
                <div className="card">
                    <Task />
                </div>
                <div className="card display">
                    {/* if nothing to display, display the pretty task image */}
                    <img className="taskPlaceholder" src={taskPlaceholder} alt="Task Placeholder Image" />
                </div>
            </div>
        )
    }
}

export default Main;