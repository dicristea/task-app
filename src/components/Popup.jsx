import React, {Component} from "react";
import Overview from "./Overview";
// import { format } from 'date-fns';


// can use ternarary operator and js for repeated parts

class Popup extends Component {
    constructor(props) {
        super(props);

        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.handleForm = this.handleForm.bind(this);
        // this.onRadioChange = this.onRadioChange(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            task: '',
            notes: '',
            list: 'Personal',
            priority: '',
            dueDate: ''
        }

    }


    onChangeTask(e) {
        this.setState({
            task: e.target.value
        });
    }

    onChangeNotes(e) {
        this.setState({
            notes: e.target.value
        });
    }

    // onRadioChange(e) {
    //     this.setState({
    //         selectedOption: e.target.value
    //     });
    // }

    handleForm(e) { 
        let taskList = [];
        
        if (window.localStorage.getItem('tasks') !== null) {
            taskList = JSON.parse(window.localStorage.getItem('tasks'));
            // console.log(taskList)
        }
        
        taskList.push(this.state)
        window.localStorage.setItem('tasks', JSON.stringify(taskList)) // localStorage cannot hold any data type except for strings
        window.location.reload(false)
    }


    render() {
        const { content, handleClose } = this.props;
        let form;

        if (content === 'task') {
            form = 
                <form className="popup-form task-form">
                    <div className="task-entry-box">
                        <div className="form-left">
                            <textarea className="task-name" 
                                name="taskName" 
                                id="taskName" 
                                rows="1" 
                                placeholder="I want to..." 
                                maxLength={1000} 
                                value={this.state.task}
                                onChange={this.onChangeTask} 
                                autoFocus
                            />
                            <div className="form-title">NOTES</div>
                            <textarea 
                                className="task-notes" 
                                name="taskNotes" 
                                id="taskNotes" 
                                rows="2" 
                                placeholder="Insert notes here" 
                                maxLength={2000}
                                value={this.state.notes}
                                onChange={this.onChangeNotes}
                            />
                        </div>
                        {/* <div className="form-right">
                            <div className="list-box">
                                <span>LIST</span>
                            </div>

                            <div className="priority-box">
                                <span>PRIORITY</span>
                                <div className="priority-choices">
                                    <div className="radio">
                                        <input 
                                            type="radio" 
                                            id="urgent" 
                                            name="priority" 
                                            value="urgent"
                                            checked={this.state.selectedOption === 'urgent'}
                                            // onChange={this.onRadioChange} 
                                        />
                                        <label htmlFor="urgent">Urgent</label>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" id="moderate" name="priority" value="moderate" />
                                        <label htmlFor="moderate">Moderate</label>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" id="leisure" name="priority" value="leisure" />
                                        <label htmlFor="leisure">Leisure</label>
                                    </div>
                                </div>
                            </div>

                            <div className="date-box">
                            <label htmlFor="dueDate">Due date:</label>
                            <input type="date" id="dueDate" name="due-date" min={new Date().toISOString().split('T')[0]}/>
                            </div>
                        </div> */}
                    </div>

                    <div className="form-handlers">
                        <button className="close-btn" onClick={handleClose}>Cancel</button>
                        <button
                            className="submit-btn"
                            type="button"
                            onClick={this.handleForm}
                        >
                            Add Task
                        </button>
                    </div>                
                </form>
        // } else if (content === 'project') {
        //     form =                 
        //         <form onSubmit="storeListName()" className="popup-form project-form" action="post">
        //             <div className="list-entry-box">
        //                     <div className="form-title">NAME THIS LIST</div>
        //                     <textarea className="task-name" name="taskName" id="taskName" rows="1" maxLength={1000} autoFocus></textarea>
        //             </div>

        //             <div className="form-handlers">
        //                 <button className="close-btn" onClick={handleClose}>Cancel</button>
        //                 <button className="submit-btn" type="submit">Create</button>
        //             </div>   
        //         </form>
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