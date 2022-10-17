import React, { Component } from "react";
import './Main.css';
import Tasklist from "./Tasklist";
import Popup from "./Popup";
import fetchArray from "../utils/storageUtils";

class Main extends Component {
    constructor (props) {
        super(props)

        this.state = {
            displayEdit: false,
            taskIndex: '',
        }    
    }

    handleClose() {
        this.setState({
            displayEdit: !this.state.displayEdit,
        })
    }

    handleEdit = (index) => {
        this.setState({
            displayEdit: !this.state.displayEdit,
            taskIndex: index,
        })
    }


    render() {
        const { displayEdit, taskIndex } = this.state;
        const { currentProject } = this.props

        let project = fetchArray(currentProject);

        return(

            <div className="main-wrapper">
                <div className="card main">
                    <div className="tasks-header">
                        <h1 className="title">{currentProject || "Task List"}</h1>
                        <hr />
                    </div>
                    <div className="task-holder">
                        <Tasklist currentProject={currentProject} handleEdit={this.handleEdit}/>
                        {
                            displayEdit && 
                            <Popup 
                                content='task'
                                currentProject={currentProject} 
                                task={project[taskIndex]} 
                                index={taskIndex} 
                                handleEdit={this.handleEdit} 
                                handleClose={this.handleClose}
                            />
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Main;