//Will display/render all our tasks

import React from "react";

const Overview = () => {
    // const { tasks } = props; // takes tasks from the props

    let taskList = []

    if (window.localStorage.getItem('tasks') !== null) {
        taskList = JSON.parse(window.localStorage.getItem('tasks'))
    }

    return(
        <div>
            {
            taskList.map((task) =>
                <div className="task-box" key={task.task}>
                    {task.task}, {task.notes}
                </div>
            )}
        </div>
    );
};

export default Overview;