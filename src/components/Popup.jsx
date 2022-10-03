import React, {Component} from "react";

class Popup extends Component {


    render() {
        const { content, handleClose } = this.props;
        let form;

        if (content === 'task') {
            form = 
                <form action="post">
                    <div className="form-header">
                        <label htmlFor="projectName">I want to...</label>
                        <input type="text" />
                        <span className="close-icon" onClick={handleClose}>Cancel</span>
                    </div>
                    <textarea name="taskNotes" id="taskNotes" cols="30" rows="3" placeholder="Add notes"></textarea>
                    <button>Test button</button>
                </form>
        } else if (content === 'project') {
            form =                 
                <form action="post">
                    <div className="form-header">
                        <label htmlFor="projectName">NAME THIS LIST</label>
                        <input type="text" name='projectName' />
                    </div>
                    <div>
                        <span className="close-icon" onClick={handleClose}>Cancel</span>
                        <button>Submit</button>
                    </div>
                </form>
        }

        return(
            <div className="popup-box">
                <div className="box card">
                    {form}
                </div>
            </div>
        )
    }


}

export default Popup;