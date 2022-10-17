//Will display/render all our tasks

import React, { Component } from "react";
// import { format } from 'date-fns';
import fetchArray from "../utils/storageUtils";



class Tasklist extends Component {
    constructor (props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }


    handleDelete = (index) => {
        const { currentProject } = this.props;
        let taskList = fetchArray(currentProject);
        
        taskList.splice(index, 1);
        window.localStorage.setItem(currentProject, JSON.stringify(taskList)); // localStorage cannot hold any data type except for strings
        window.location.reload(false);
    }

    render() {        
        const { handleEdit, currentProject } = this.props;

        let taskList = fetchArray(currentProject);

        return(
            <div className="tasks-box">
                { 
                taskList.map((task, index) =>
                    <div key={task.id}>
                        <div className="task-name" style={{fontWeight: 600}}>{task.name}</div>
                        <div className="task-notes">{task.notes}</div>
                        <div className="date-box">{task.dueDate}</div>
                        <div className="priority-box">{task.priority}</div>
                        <button 
                            className="edit-task-btn" 
                            type="button" 
                            id="editTask" 
                            onClick={() => handleEdit(index)} 
                        >
                        </button>
                        <button 
                            className="delete-task-btn" 
                            type="button" 
                            id="deleteTask" 
                            onClick={() => this.handleDelete(index)}
                         />
                    </div>
                )}
            </div>
        )
    };
};

export default Tasklist;