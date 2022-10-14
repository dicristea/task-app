//Will display/render all our tasks

import React, { Component } from "react";
// import { format } from 'date-fns';
import editIcon from "../assets/edit.png"
// import deleteIcon from "../assets/delete.png"



class CreateList extends Component {
    constructor (props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }


    handleDelete = (index) => {
        let taskList = [];
        
        if (window.localStorage.getItem('tasks') !== null) {
            taskList = JSON.parse(window.localStorage.getItem('tasks'));
        }
        
        taskList.splice(index, 1)
        window.localStorage.setItem('tasks', JSON.stringify(taskList)) // localStorage cannot hold any data type except for strings
        window.location.reload(false)
    }

    render() {        
        const { handleEdit } = this.props;

        let taskList = [];

        if (window.localStorage.getItem('tasks') !== null) {
            taskList = JSON.parse(window.localStorage.getItem('tasks'))
        }

        return(
            <div className="tasks-box">
                { 
                taskList.map((task, index) =>
                    <div key={task.id}>
                        <div className="task-name" style={{fontWeight: 600}}>{task.name}</div>
                        <div className="task-notes">{task.notes}</div>
                        <button 
                            className="edit-task-btn" 
                            type="button" 
                            id="editTask" 
                            // src={editIcon}
                            onClick={() => handleEdit(index)} 
                        >
                            Edit
                        </button>
                        <button 
                            className="delete-task-btn" 
                            type="button" 
                            id="deleteTask" 
                            // src={deleteIcon}
                            onClick={() => this.handleDelete(index)}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        )
    };
};

export default CreateList;