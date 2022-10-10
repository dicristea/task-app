import React, { Component } from "react";
import './Main.css';
import Tasks from "./TaskList";
import taskPlaceholder from "../assets/nothing-selected.png";
import Overview from "./Overview";

class Main extends Component {
    constructor () {
        super()

        this.state = {}
    }

    render() {
        return(
            <div className="main-wrapper">
                <div className="card main">
                    <div className="taskWrapper">
                        <div className="tasks-header">
                            <h1 className="title">Task List</h1>
                            {/* should change when project/view is selected*/}
                            <hr />
                        </div>
                        <div className="task-holder">
                        <Overview />
                        </div>
                    </div>
                </div>
                <div className="card display">
                    {/* if nothing to display, display the pretty task image */}
                    <img className="task-placeholder" src={taskPlaceholder} alt="Task Placeholder" />
                </div>
            </div>
        )
    }
}

export default Main;