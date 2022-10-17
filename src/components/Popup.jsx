import React, {Component} from "react";
import uniqid from "uniqid";
import fetchArray from "../utils/storageUtils";


class Popup extends Component {
    constructor(props) {
        super(props);

        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeProject = this.onChangeProject.bind(this);
        this.handleTask = this.handleTask.bind(this);

        this.state = {
            name: props.task.name || '',
            notes: props.task.notes || '',
            project: props.project || '',
            priority: props.task.priority || 'moderate',
            dueDate: props.task.dueDate || '',
            id: uniqid()
        }

    }


    onChangeTask(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeNotes(e) {
        this.setState({
            notes: e.target.value
        });
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState ({
            dueDate: e.target.value
        })
    }

    onChangeProject(e) {
        this.setState ({
            project: e.target.value
        })
    }

    handleTask(e) { 
        const { index, currentProject } = this.props;

        let taskList = fetchArray(currentProject);

        if (index !== false) {
            taskList[index] = this.state
        } else {
            taskList.push(this.state)
        }

        window.localStorage.setItem(currentProject, JSON.stringify(taskList))
        window.location.reload(false)
    }

    render() {
        const { content, handleClose, createProject } = this.props;
        const { name, notes, priority, dueDate, project } = this.state;

        let form;

        if (content === 'task') {
            form = 
                <form className="popup-form task-form">
                    <div className="task-entry-box">
                        <div className="form-left">
                            <textarea className="task-name-input" 
                                name="taskName" 
                                id="taskName" 
                                rows="1" 
                                placeholder="I want to..." 
                                maxLength={1000} 
                                value={name}
                                onChange={this.onChangeTask}
                                autoFocus
                            />
                            <div className="form-notes-header">NOTES</div>
                            <textarea className="task-notes" 
                                name="taskNotes" 
                                id="taskNotes" 
                                rows="2" 
                                placeholder="Insert notes here" 
                                maxLength={2000}
                                value={notes}
                                onChange={this.onChangeNotes}
                            />
                        </div>
                        <div className="form-right">
                            <div className="list-box">
                                <span>LIST</span>
                            </div>

                            <div className="priority-box">
                                <span>PRIORITY</span>
                                <div className="priority-choices">
                                    <select value={priority} onChange={this.onChangePriority}>
                                        <option value="high">High</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                            </div>

                            <div className="date-box">
                            <label htmlFor="dueDate">Due date:</label>
                            <input type="date" id="dueDate" name="due-date" value={dueDate} min={new Date().toISOString().split('T')[0]} onChange={this.onChangeDate}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-handlers">
                        <button className="close-btn" onClick={handleClose}>Cancel</button>
                        <button
                            className="submit-btn"
                            type="button"
                            onClick={this.handleTask}
                        >
                            Submit
                        </button>
                    </div>                
                </form>
        } else if (content === 'project') {
            form =                 
                <form className="popup-form project-form" action="post">
                    <div className="list-entry-box">
                            <div className="form-title">NAME THIS LIST</div>
                            <textarea 
                                className="task-name" 
                                name="taskName" 
                                id="taskName" 
                                rows="1" 
                                maxLength={1000} 
                                autoFocus
                                value={project}
                                onChange={this.onChangeProject}
                            >
                            </textarea>
                    </div>

                    <div className="form-handlers">
                        <button className="close-btn" onClick={handleClose}>Cancel</button>
                        <button className="submit-btn" type="submit" onClick={() => createProject(project)}>Create</button>
                    </div>   
                </form>
        }

        return(
            <div className="popup-box">
                <div className="box">
                    {form}
                </div>
            </div>
        )
    }


}

export default Popup;