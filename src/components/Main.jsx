import React, { Component } from "react";
import './Main.css';
import CreateList from "./CreateList";
import Popup from "./Popup";

class Main extends Component {
    constructor (props) {
        super(props)

        this.state = {
            displayEdit: false,
            taskIndex: ''
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
            taskIndex: index
        })
    }


    render() {
        const { displayEdit, taskIndex } = this.state;

        let taskList = [];

        if (window.localStorage.getItem('tasks') !== null) {
            taskList = JSON.parse(window.localStorage.getItem('tasks'))
        }

        return(

            <div className="main-wrapper">
                <div className="card main">
                    <div className="tasks-header">
                        <h1 className="title">Task List</h1>
                        {/* should change when project/view is selected*/}
                        <hr />
                    </div>
                    <div className="task-holder">
                        <CreateList handleEdit={this.handleEdit}/>
                        {
                            displayEdit && 
                            <Popup 
                                content='task' 
                                task={taskList[taskIndex]} 
                                index={taskIndex} 
                                handleEdit={this.handleEdit} 
                                handleClose={this.handleClose} />
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Main;