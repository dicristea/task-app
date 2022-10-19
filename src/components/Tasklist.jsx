import React, { Component } from "react";
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
        window.localStorage.setItem(currentProject, JSON.stringify(taskList));
        window.location.reload(false);
    }

    render() {        
        const { handleEdit, currentProject } = this.props;

        let taskList = fetchArray(currentProject);

        let projects = fetchArray('projects');

        return(
            <div>
                { 
                taskList.map((task, index) =>
                    <div className="tasks-box" key={task.id}>
                        <div className="task-box-top">
                            <div className="task-name" style={{fontWeight: 600}}>{task.name}</div>
                            <div className="date-box">{task.dueDate}</div>
                            <div className="priority-box">{task.priority}</div>
                            <button
                                className="edit-task-btn"
                                type="button"
                                id="editTask"
                                onClick={() => handleEdit(index)}
                            />
                            <button
                                className="delete-task-btn"
                                type="button"
                                id="deleteTask"
                                onClick={() => this.handleDelete(index)}
                            />
                        </div>
                        <div className="task-notes">{task.notes}</div>
                    </div>
                )}
            </div>
        )
    };
};

export default Tasklist;